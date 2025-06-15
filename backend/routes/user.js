const User = require("../models/User");
const { verifyTokenAndAuthentication, verifyTokenAndAdmin } = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();


/// update user information
router.put('/:id',verifyTokenAndAuthentication, async(req,res)=>{
    if(req.body.password){
        req.body.password=CryptoJS.AES.encrypt(
              req.body.password,
              process.env.SEC_PASS
            ).toString()
    }
    try {
        const updateuser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(201).json(updateuser)
    } catch (error) {
        res.status(401).json(error)
    }
})
// delete user
router.delete('/:id', verifyTokenAndAuthentication,  async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(201).json("User is deleted")
    } catch (error) {
        res.status(401).json(error);
    }
})
// Get user (only admin get user data)
router.get('/find/:id', verifyTokenAndAdmin, async(req,res)=>{
    try {
        const userdata = await User.findById(req.params.id);
        const{ password , ...others }= userdata._doc;
        res.status(201).json(others)

    } catch (error) {
        res.status(401).json(error)
    }
   
})
// Get All user by admin
router.get('/', verifyTokenAndAdmin, async(req,res)=>{
    const query = req.query.new;
   try {
   
    const alluser = query ? await User.find().sort({_id:-1}).limit(8): await User.find();
    res.status(201).json(alluser);
   } catch (error) {
    res.status(401).json(error)
   }
})

//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports=router;