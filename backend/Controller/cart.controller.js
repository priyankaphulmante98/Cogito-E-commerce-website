const cart_model = require("../model/cart.model");

exports.getCart = async (req, res) => {

  try {
    const carts = await cart_model.find().populate()
    return res.status(200).json(carts);
  } catch (error) {
    console.log(error);
  }
};

exports.postCart = async (req, res) => {
  try {
    const cart = await cart_model.findById(req.body.productId);
    if (!cart) {
      console.log(req.body);
      const cart = await cart_model.create({ ...req.body, userId: req.userId });
      return res.status(200).json(cart);
    } else {
      return res.status(404).json("already exists");
    }
  } catch (error) {
    console.log(error);
  }
};


