const order = require('../models/order');


exports.placeorder = async(req,res)=>{
    try{
        const {title,price,description,user} = req.body;

        const neworder = await order.create({
            title,price,description,user
        })

        res.status(200).json({
            success:true,
            res:neworder,
            message:"Order Placed!!"
        })

    }
    catch(err){
        return res.status(500).json({
            error: "Error Placing order",
        });
    }
}