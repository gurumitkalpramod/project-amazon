
const Product = require("./product.model");

const createProduct = async (payload) => {
    const {name,price,description,images,category ,quantity} =  payload
const result = await Product.create({name,price,description,images,category ,quantity})
if(!result){
    throw new Error("failed to create the product")
}
return result;
};
const singleProduct = async (payload) =>{
    const {email, password} = payload

    if(!email || !password){
        throw new Error("Please provide email and password")
    }


    const isExist = await Product.findOne({email})
    if(!isExist){
        throw new Error("Email is wrong!")
    }


    const isPasswordCorrect = await bcrypt.compare(password, isExist.password)

    if(!isPasswordCorrect){
        throw new Error("Password is wrong!")
    }

    return isExist

}

const getAllProducts = async () =>{
    const result = await User.find({}).sort({createdAt: -1})
    return result
}

const getProductById = async(id) =>{
    const result = await User.findById(id)
    return result
}

const deleteProductById = async(id) =>{
    const result = await User.findByIdAndDelete(id)

    if(!result){
        throw new Error("Failed to delete the user!")
    }

    return result
}

const updateProductById = async(id, payload) => {
    const result = await User.findByIdAndUpdate(id, payload, {new: true})
    if(!result){
        throw new Error("Failed to update the user!")
    }
    return result
}

const ProductService ={
    createProduct,
     singleProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById
}


module.exports = ProductService
