require("dotenv").config();

const connectDB = require("../config/db");
const Product = require("../models/Product");
const products = require("./products");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("✅ Products Imported Successfully!");

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

importData();