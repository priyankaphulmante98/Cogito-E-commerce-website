const express = require("express");

const router = express.Router();

const Controller = require("../Controller/product.controller");

const authMiddlware = async (req, res, next) => {
  const token = req.headers.token;
  
  let arr = token.split(":")
  let role= arr[arr.length-1]
  console.log(role)

  if (token&&role==="admin") {
    next();
  } else {
    return res.status(404).send("unauthrised");
  }
};




router.get("/", Controller.getProduct);

router.post("/",authMiddlware, Controller.postProduct);

router.get("/:id", Controller.singleProdcuct);

router.patch("/:id",authMiddlware, Controller.updateProduct);

router.delete("/:id",authMiddlware, Controller.deleteProduct);

module.exports = router;
