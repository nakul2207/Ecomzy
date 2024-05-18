const express = require('express');
const app= express();
const cors = require('cors');
const dbconnect = require('./config/db');
const Shopping = require('./routes/Shopping')

require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/api/v1',Shopping);
dbconnect();

app.listen(PORT,()=>{
    console.log(`Server live at ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send('HEllo world');
})
