const Order = require("../models/Order");
const Cart = require("../models/Cart");

// Place Order
const placeOrder = async (req, res) => {
  try {

    const {
      shippingAddress,
      paymentMethod,
    } = req.body;

    const cartItems = await Cart.find({
      user: req.user.id,
    }).populate("product");

    if (cartItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Your cart is empty",
      });
    }

    const products = cartItems.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
    }));

    const totalAmount = cartItems.reduce(
      (total, item) =>
        total +
        item.product.price * item.quantity,
      0
    );

    const order = await Order.create({
      user: req.user.id,
      products,
      totalAmount,
      shippingAddress,
      paymentMethod,
    });

    // Clear Cart
    await Cart.deleteMany({
      user: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Order Placed Successfully",
      order,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Logged-in User Orders
const getMyOrders = async (req, res) => {
  try {

    const orders = await Order.find({
      user: req.user.id,
    })
      .populate("products.product")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Single Order
const getOrderById = async (req, res) => {
  try {

    const order = await Order.findById(
      req.params.id
    ).populate("products.product");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order Not Found",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  placeOrder,
  getMyOrders,
  getOrderById,
};