const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors")
/// All Router Import/////////
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');
const stripeRoutes = require('./routes/stripe')
const path = require("path");

// connent database
mongoose.connect(process.env.MONGO_URL).then(()=> console.log("Db connection successfull"))
.catch((err)=>{ console.log(err);

})


app.use(express.json());
app.use(cors());

const _dirname = path.resolve();
/// All Router links///////////
app.use('/api/auth',authRoutes );
app.use('/api/users',userRoutes);
app.use('/api/products',productRoutes);
app.use('/api/carts',cartRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/checkout',stripeRoutes);

app.use(express.static(path.join(_dirname, "/ecommerce/build")))
app.get('*',( _,res)=>{
    res.sendFile(path.resolve(_dirname, "ecommerce", "build", "index.html"))
})
app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is running `);
})