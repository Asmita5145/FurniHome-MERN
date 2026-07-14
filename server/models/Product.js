const mongoose = require("mongoose"); //Imports the Mongoose library.

const productSchema = new mongoose.Schema({ //Creates the blueprint of product.

  name: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    default: 5,
  },

  badge: {
    type: String,
    default: "",
  },

  description: {
    type: String,
    required: true,
  }

});

module.exports = mongoose.model("Product", productSchema); //Creates the Product Model.