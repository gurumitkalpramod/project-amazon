const UserService = require("./user.service");
const catchAsync = require("../../shared/catchAsync");
const sendResponse = require("../../shared/sendResponse");


const createUser =catchAsync(async (req, res) => {
  
    const payload = req.body;
    const result = await UserService.createUser(payload);

         sendResponse(res,200,true,"sign  fetched successfully",result)

});

const signin = catchAsync(async (req, res) => {

    const payload = req.body;
    const result = await UserService.signin(payload);

     sendResponse(res,200,true,"sign  fetched successfully",result)

});


const getAllUsers = catchAsync(async(req,res) => {
  const result = await UserService.getAllUsers();
 sendResponse(res,200,true,"All users fetched successfully",result)
})


const getUserById = catchAsync(async (req,res) => {
  const id = req.params.id
    const result = await UserService.getUserById(id);
     sendResponse(res,200,true,"User by id fetched successfully",result)

}); 



const deleteUserById = catchAsync(async (req,res) => {
  const id = req.params.id
    const result = await UserService.deleteUserById(id);
     sendResponse(res,200,true,"User by id delete successfully",result)

});

const updateUserById = catchAsync(async(req,res) =>{
  const id = req.params.id
    const payload = req.body
    const result = await UserService.updateUserById(id);
     sendResponse(res,200,true,"User by id upadate successfully",result)

  });


const UserControllers = {
  createUser,
  signin,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById
};

module.exports = UserControllers;