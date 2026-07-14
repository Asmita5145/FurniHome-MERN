const Cart = require("../models/Cart");

const addToCart = async (req, res) => {
  try {

    console.log("BODY:", req.body);
    console.log("USER:", req.user);

    const { productId, quantity } = req.body;

    console.log("productId:", productId);
    console.log("quantity:", quantity);

    const existingItem = await Cart.findOne({
      user: req.user.id,
      product: productId,
    });

    if (existingItem) {

      existingItem.quantity += quantity;

      await existingItem.save();

      return res.status(200).json({
        success: true,
        message: "Cart Updated",
        cart: existingItem,
      });

    }

    const cartItem = await Cart.create({
      user: req.user.id,
      product: productId,
      quantity,
    });

    res.status(201).json({
      success: true,
      message: "Added to Cart",
      cart: cartItem,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getCart = async (req, res) => {
  try {

    const cart = await Cart.find({
      user: req.user.id,
    }).populate("product");

    res.status(200).json({
      success: true,
      count: cart.length,
      cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const updateCart = async (req, res) => {
  try {

    const { quantity } = req.body;

    const cart = await Cart.findById(req.params.id);

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });
    }

    cart.quantity = quantity;

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Cart Updated Successfully",
      cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const removeFromCart = async (req, res) => {
  try {

    const cart = await Cart.findByIdAndDelete(req.params.id);

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Item Removed Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const clearCart = async (req, res) => {
  try {

    await Cart.deleteMany({
      user: req.user.id,
    });

    res.status(200).json({
      success: true,
      message: "Cart Cleared Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
  clearCart,
};