
const Product = require("./product.model");

const createProduct = async (payload) => {
    const {name,price,description,images,category ,quantity} =  payload
const result = await Product.create({name,price,description,images,category ,quantity})
if(!result){
    throw new Error("failed to create the product")
}
return result;
};


const singleProduct = async (id) =>{
  
  const result = await Product.findById(id);
  if (!result) {
    throw new Error("Product not found");
  }
  return result;
};
const getAllProducts = async () => {
  const result = await Product.find({}).sort({ createdAt: -1 }); 
  return result;
};


const getProductById = async (id) => {
  const result = await Product.findById(id);
  if (!result) {
    throw new Error("Product not found");
  }
  return result;
};


const deleteProductById = async (id) => {
  const result = await Product.findByIdAndDelete(id);
  if (!result) {
    throw new Error("Failed to delete the product");
  }
  return result;
};

const updateProductById = async (id, payload) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true }); 
  if (!result) {
    throw new Error("Failed to update the product");
  }
  return result;
};


const ProductService ={
    createProduct,
     singleProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById
}


module.exports = ProductService
