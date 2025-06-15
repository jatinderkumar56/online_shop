const Product = require("../models/Product");
const { verifyTokenAndAuthentication, verifyTokenAndAdmin } = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();


//Create Product
router.post('/',verifyTokenAndAdmin, async(req,res)=>{
    const newProduct = new Product(req.body);
    try {
        const productsave = await newProduct.save();
        res.status(201).json(productsave);
    } catch (error) {
        res.status(401).json(error)
    }
})


/// update Product information
router.put('/:id',verifyTokenAndAdmin, async(req,res)=>{
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(201).json(updateProduct)
    } catch (error) {
        res.status(401).json(error)
    }
})
// delete product only admin can delete
router.delete('/:id',verifyTokenAndAdmin,  async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(201).json("Product is deleted")
    } catch (error) {
        res.status(401).json(error);
    }
})
// Get sinlge Product by product ID (all admin and user can get single product)
router.get('/find/:id', async(req,res)=>{
    try {
        const productData = await Product.findById(req.params.id);
        
        res.status(201).json(productData)

    } catch (error) {
        res.status(401).json(error)
    }
   
})
// Get All products by admin
router.get('/', async(req,res)=>{

    const qCategory= req.query.category;
    const qNew = req.query.new;
    try {
         let products;
        if(qNew){
         products = await Product.find().sort({createdAt:-1}).limit(1);
        }else if(qCategory){
          products = await Product.find({categories:{$in:[qCategory]}})
        }else{
            products= await Product.find();
        }

        res.status(201).json(products);
        
    } catch (error) {
        res.status(401).json(error);
    }
})


module.exports=router;