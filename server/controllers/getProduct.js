const Product = require('../models/product');

exports.getProduct= async(req,res)=>{
    try{
        const response = await Product.find();
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Products successfully fetched!!"

            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);

        res.status(500).json({
            success:false,
            data:"Internal server Error",
            message:err.message
        })
    }
}