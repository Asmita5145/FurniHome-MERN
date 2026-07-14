const Wishlist = require("../models/Wishlist");

// Add to Wishlist
const addToWishlist = async (req, res) => {
  try {

    const { productId } = req.body;

    const existingItem = await Wishlist.findOne({
      user: req.user.id,
      product: productId,
    });

    if (existingItem) {
      return res.status(200).json({
        success: true,
        message: "Already in Wishlist",
      });
    }

    const wishlist = await Wishlist.create({
      user: req.user.id,
      product: productId,
    });

    res.status(201).json({
      success: true,
      message: "Added to Wishlist",
      wishlist,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getWishlist = async (req, res) => {
  try {

    const wishlist = await Wishlist.find({
      user: req.user.id,
    }).populate("product");

    res.status(200).json({
      success: true,
      count: wishlist.length,
      wishlist,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const removeFromWishlist = async (req, res) => {
  try {

    const wishlist = await Wishlist.findByIdAndDelete(req.params.id);

    if (!wishlist) {

      return res.status(404).json({
        success: false,
        message: "Wishlist Item Not Found",
      });

    }

    res.status(200).json({
      success: true,
      message: "Removed from Wishlist",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
};