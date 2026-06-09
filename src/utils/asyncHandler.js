const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve().catch((err)=>next(err)).catch((err) =>next(err))
    }
}

export {asyncHandler}



// using try catch mathod

// const asyncHandler =(fn) => async(req,res,next) => {
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(error.code || 500).json({
//             sucess:false,
//             message:error.message
//         })
//     }
// }