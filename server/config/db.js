const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.DB_URL || 'mongodb+srv://ng2272003:nakul1234@cluster1.wrfbq6n.mongodb.net/ShoppingAPP' ;

const dbconnect = ()=>{
    mongoose.connect(url)
    .then(()=>{
        console.log("DB connected!!");
    })
    .catch((err)=>{
        console.log("Error occured");
        console.log(err.message);
    })
};

module.exports = dbconnect;