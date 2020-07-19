//Uses the express package
const express = require('express');
//Uses the Router subpackage of express
const router = express.Router();

//Configure the GET path
router.get('/',(req,res,next)=> {

    res.status(200).json({
     'no' : '1234','name':'LIC'
    });

});

 
//Configure the POST path
router.post('/',(req,res,next)=> {

    res.status(200).json({
     'no' : '1234','name':'LIC'
    });

});


module.exports=router;