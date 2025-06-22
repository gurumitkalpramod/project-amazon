const catchAsync = require("../../shared/catchAsync")
const sendResponse = require("../../shared/sendResponse");
const ProductService = require("./product.service");

const createProduct = catchAsync(async(req,res)=>{
    const payload = req.body;
    const result = await ProductService.createProduct(payload);
    sendResponse(res,201,true,"Product created successfully",result);
})

const singleProduct= catchAsync(async(req, res) => {
    const payload = req.body;
    const result = await ProductService.singleProduct(payload);

     sendResponse(res,200,true,"singleProduct  fetched successfully",result)

});

const getAllProducts = catchAsync(async(req,res) => {
  const result = await ProductService.getAllProducts();
 sendResponse(res,200,true,"All Product fetched successfully",result)
})


const getProductById = catchAsync(async (req,res) => {
  const id = req.params.id
    const result = await ProductService.getProductById(id);
     sendResponse(res,200,true,"Product by id fetched successfully",result)

}); 



const deleteProductById = catchAsync(async (req,res) => {
  const id = req.params.id
    const result = await ProductService.deleteProductById(id);
     sendResponse(res,200,true,"Product by id delete successfully",result)

});

const updateProductById = catchAsync(async(req,res) =>{
  const id = req.params.id
    const payload = req.body
    const result = await ProductService.updateProductById(id,payload);
     sendResponse(res,200,true,"Product by id upadate successfully",result)

  });

  const uploadFile = catchAsync(async(req,res) =>{
    const payload = req.file;
    const result = await ProductService.uploadFile(payload);
     sendResponse(res,200,true,"file uploaded successfully",result)

  });

const Productcontrollers ={
    uploadFile,
    createProduct,
    singleProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById
};
 module.exports = Productcontrollers