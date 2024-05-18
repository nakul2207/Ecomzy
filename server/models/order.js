const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        description:{
            type:String,
            required:true
         },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    }
)
module.exports = mongoose.model("order", orderSchema);