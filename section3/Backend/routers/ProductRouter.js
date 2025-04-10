const express = require('express');
const Model = require('../models/ProductModels'); // import the model
const router= express.Router();

router.post('/add' , (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

// getall
router.get('/getall', (req, res) =>{
   Model.find()
   .then((result) => {
    res.status(200).json(result);
    })
    .catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});


//: denotes url parameter
router.get('/getbyName/:Name', (req, res)=>{
   Model.find({ProductName : req.params.city})
 .then((result) => {
    res.status(200).json(result);
 })
 .catch((err) => {
    console.log(err);
    res.status(500).json(err);
    
 });
})

//get by email
router.get('/getbyemail2:email', (req, res) =>{
    Model.findOne({email : req.params.email})
    .then((result) => {
     res.status(200).json(result);
     })
     .catch((err) => {
     console.log(err);
     res.status(500).json(err);
    });
 });
 

//getbyid
router.get('/getbyid/:id', (req, res) =>{
    Model.findById(req.params.id)
    .then((result) => {
     res.status(200).json(result);
     })
     .catch((err) => {
     console.log(err);
     res.status(500).json(err);
    });
 });

 
 
//update
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, res.body)
    .then((result) => {
        res.status(200).json(result);
        })
        .catch((err) => {
        console.log(err);
        res.status(500).json(err);
       });
    
});



//delete
router.delete('/delete/:id', (req, res) =>{
  Model.findByIdAndDelete(req.params.id)
  .then((result) => {
    res.status(200).json(result);
    })
    .catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});
   

module.exports = router;
