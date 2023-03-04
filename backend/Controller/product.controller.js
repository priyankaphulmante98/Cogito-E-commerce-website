const product_model = require("../model/product.model");

exports.getProduct = async (req, res) => {
  try {
    const product_data = await product_model.find();
    res.status(200).json(product_data);
  } catch (error) {
    console.log(error);
  }
};

exports.postProduct = async (req, res) => {
  const { title, price, image, quantity, desc, category } = req.body;
  try {
    const product_data = await product_model.create(req.body);
    res.status(200).json(product_data);
  } catch (error) {
    console.log(error);
  }
};

exports.singleProdcuct= async (req, res) => {
    const {id} = req.params

    try {
        const product_data = await product_model.findById(id)
        res.status(200).json(product_data);
        
    } catch (error) {
        console.log(error)
    }
};

exports.updateProduct = async(req, res) => {
    const {id} =req.params

    try {
        const product_data = await product_model.findByIdAndUpdate(id,{...req.body, new:true})
        res.status(200).json(product_data)
    } catch (error) {
        console.log(error)
        
    }
}

exports.deleteProduct =  async(req, res) => {
    const {id} = req.params
 try {

    const product_data = await product_model.findByIdAndDelete(id)
    res.status(200).json(product_data)
    
 } catch (error) {
console.log(error)
    
 }
}