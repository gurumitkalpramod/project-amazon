const sendResponse = async(res, statusCode ,success,message,data) =>{
    res.status(statusCode).json({
        success: success,
        message: message,
            data:  data
    })
}
module.exports = sendResponse
