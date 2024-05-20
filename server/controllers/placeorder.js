const Order = require('../models/order');

exports.placeorder = async (req, res) => {
    try {
        const { product,totalamount ,user } = req.body;

        // Validate that product and user are provided
        if (!product || !user) {
            return res.status(400).json({
                success: false,
                message: "Product and user fields are required."
            });
        }

        // Validate that product is an array
        if (!Array.isArray(product) || product.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Product must be a non-empty array."
            });
        }

        const newOrder = await Order.create({
            product,
            totalamount,
            user
        });

        const populatedOrder = await Order.findById(newOrder._id)
                                          .populate('user')
                                          .exec();

        res.status(200).json({
            success: true,
            order: populatedOrder,
            message: "Order Placed!!"
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Error placing order",
            error: err.message
        });
    }
};
