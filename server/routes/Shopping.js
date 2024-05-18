const express = require('express');
const router = express.Router();


//import
const {login,signup} = require('../controllers/Auth');
const {placeorder} = require('../controllers/placeorder');
const {getProduct} = require('../controllers/getProduct');



//controller map
router.post('/login',login);
router.post('/signup',signup);
router.post('/placeorder',placeorder);
router.get('/products',getProduct);



//export

module.exports = router;