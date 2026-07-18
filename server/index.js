require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const userRoutes = require("./routes/userRoutes");

const orderRoutes = require("./routes/orderRoutes");

const cartRoutes = require("./routes/cartRoutes");

const wishlistRoutes = require("./routes/wishlistRoutes");

const contactRoutes = require("./routes/contactRoutes");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/products", productRoutes);

app.use("/api/users", userRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/cart", cartRoutes);

app.use("/api/wishlist", wishlistRoutes);

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {

  res.send("🚀 FurniHome Backend Running Successfully");

});

app.listen(PORT, () => {

  console.log(`✅ Server running on http://localhost:${PORT}`);

});