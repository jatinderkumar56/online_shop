const User = require("../models/User");
const CryptoJS = require("crypto-js");
const router = require("express").Router();
const jwt = require("jsonwebtoken");


router.post("/register", async (req, res) => {
  const newuser = new User({
    username: req.body.username,
    email: req.body.email,
   
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SEC_PASS
    ).toString(),
  });
  try {
    const saveUser = await newuser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // if user not found then send error
   
     if (!user) {
      return res.status(401).json("Wrong Credentials");
    }
    // take hash password from saved user
   
    const hashedpassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SEC_PASS
    );
    // convert hash password into string
    const originalpassword = hashedpassword.toString(CryptoJS.enc.Utf8);
    // if password not same then send error
    if (originalpassword !== req.body.password) {
      return res.status(401).json("Wrong Credentials");
    }
  

    /// jsonwebtoken work
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    
    // no show password and show all other field in output in postman
    const { password, ...others } = user._doc;

    // if all are correct 
    // password and username then show real user but not show passwprd
    // Send response with user data and access token
    return res.status(200).json({
      ...others,
      accessToken,
     
    });

    
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
