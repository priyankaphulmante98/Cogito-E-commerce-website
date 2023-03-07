const express = require('express');
const cart_model = require("../model/cart.model")
const product_model = require('../model/product.model')
const  userModel = require('../model/user.model')
const jwt = require('jsonwebtoken')
const controller = require('../Controller/cart.controller')

const router = express.Router();
 router.use(authmiddleware)


async function authmiddleware(req, res, next) {
    let token = req.headers.token;
  
    if (token) {
      let decoded = jwt.verify(token,"SECRETPRIYA123" );
      const user = await userModel.findById(decoded.id);
      req.userId = user.id;
      next();
    } else {
      return res.status(401).send("not authrized to this process");
    }
  }

router.get('/', controller.getCart)

router.post('/', authmiddleware, controller.postCart)


module.exports = router;



