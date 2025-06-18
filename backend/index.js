const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

/// All Router Import/////////
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');
const stripeRoutes = require('./routes/stripe');

const PORT = process.env.PORT || 5000;

// Connect database
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Db connection successful"))
  .catch((err) => console.log(err));

app.use(express.json());
// app.use(cors({
//   origin: "https://ecommerce-web-1-fdu6.onrender.com", // Only allow this frontend
//  credentials:true
// }));
app.use(cors());

/// All Router links///////////
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/checkout', stripeRoutes);

// Serve React frontend
app.use(express.static(path.join(__dirname, "../ecommerce/build")));

app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, "../ecommerce/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
