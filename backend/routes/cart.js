const Cart = require("../models/Cart");
const { verifyTokenAndAuthentication, verifyTokenAndAdmin, verifytoken } = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();


//Create Cart
router.post('/',verifytoken, async(req,res)=>{
    const newCart = new Cart(req.body);
    try {
        const cartSave = await newCart.save();
        res.status(201).json(cartSave);
    } catch (error) {
        res.status(401).json(error)
    }
})


/// update Cart information
router.put('/:id',verifyTokenAndAuthentication, async(req,res)=>{
    try {
        const updateCart = Cart.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(201).json(updateCart)
    } catch (error) {
        res.status(401).json(error)
    }
})
// delete Cart only admin can delete
router.delete('/:id',verifyTokenAndAuthentication,  async(req,res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(201).json("Cart is deleted")
    } catch (error) {
        res.status(401).json(error);
    }
})
// Get sinlge Cart by User ID (all admin and user can get single product)
router.get('/find/:userId', async(req,res)=>{
    try {
        const cartData = await Cart.findOne({userId:req.params.userId});
        
        res.status(201).json(cartData)

    } catch (error) {
        res.status(401).json(error)
    }
   
})
// Get All Cart by admin
router.get('/findallcart', async(req,res)=>{

    try {
        const allCart = await Cart.find();
        res.status(201).json(allCart);
        
    } catch (error) {
        res.status(401).json(error)
    }
})


module.exports=router;