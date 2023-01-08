const async = require("../units/error")
const cartService = require("../services/cartsService")

const selectData = catchAsync(async(req,res) =>{
    const {
        userId,
        plantId,
        plantQuantity,
        potId,
        potQuantity,
        nutrientId,
        nutrientQuantity,
      } = req.body;
    
})