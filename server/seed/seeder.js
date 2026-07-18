const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Product = require("../models/Product");
const products = require("./products");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("✅ Products Imported Successfully");

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

importData();