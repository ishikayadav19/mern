const express = require('express');
const Model = require('../models/UserModels'); // import the model

const router = express.Router();

router.post('/add',(req,res)=>{
    console.log(req.body); // to get the data from the body of the request
    new Model(req.body).save() // to save the data in the database
    .then((result)=>{
        res.status(200).json( result);  
    })
    .catch((err)=>{
        res.status(500).json(err);  
    })
});

module.exports = router;