const Order = require("../models/Order");
const {
  verifyTokenAndAuthentication,
  verifyTokenAndAdmin,
  verifytoken,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();


router.post("/", verifytoken, async (req, res) => {
  const newOrder = new Order(req.body);
  console.log("Order Request Body: ", req.body);
  try {
    const OrderSave = await newOrder.save();
    res.status(201).json(OrderSave);
    

  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
});
/// update Order information
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateOrder = Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(updateOrder);
  } catch (error) {
    res.status(401).json(error);
  }
});
// delete Order only admin can delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(201).json("Order is deleted");
  } catch (error) {
    res.status(401).json(error);
  }
});
// Get sinlge Order by User ID (all admin and user can get single product)
router.get("/find/:userId", verifyTokenAndAuthentication, async (req, res) => {
  try {
    const OrderData = await Order.find({ userId: req.params.userId });

    res.status(201).json(OrderData);
  } catch (error) {
    res.status(401).json(error);
  }
});
// Get All Cart by admin
router.get("/", async (req, res) => {
  try {
    const allOrder = await Order.find();
    res.status(201).json(allOrder);
  } catch (error) {
    res.status(401).json(error);
  }
});


router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
