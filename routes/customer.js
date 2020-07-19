//uses the express package
const express = require('express');
//Use the router
const router = express.Router();
const xml2js = require('xml2js');

//Configure the path
router.get('/:customerId',(req,res,next)=> {

    

    res.status(200).json({
        'custno' : '1234','custname':'LIC','customerId':req.params.customerId
       });

});

//Parsing JSON Body Request - { "id": 5567,"name": "Test1234"}
router.post('/json/info',(req,res,next) => {

    
    const custInfo = {'id' : req.body.id,'name' : req.body.name};
    res.status(200).json({
       'postId' : '234' , 'postInfo' : 'xyz' , custInfo : custInfo
    });

});

//Parsing JSON Body XML Request - manually construct JSON
router.post('/xml/info',(req,res,next) => {
    console.log('--------'+req.body.customer);
    const custInfo = {'id' : req.body.customer.id,'name' : req.body.customer.name};

    

    res.status(200).json({
       'postId' : '234' , 'postInfo' : 'xyz' , custInfo : custInfo
    });

});


//Parsing JSON Body XML Request - manually construct JSON
router.post('/xml/detail',(req,res,next) => {
    
    // XML string to be parsed to JSON
const xmlStr = `<?xml version="1.0" encoding="UTF-8" ?>
            <user id="1">
                <name>John Doe</name>
                <email>john.doe@example.com</email>
                <roles>
                    <role>Member</role>
                    <role>Admin</role>
                </roles>
                <admin>true</admin>
            </user>`;

    console.log(xmlStr);
    var json = {};
    var result = '';

       // convert XML to JSON
xml2js.parseString(xmlStr,{ mergeAttrs: true }, (err, result) => {
    if(err) {
        throw err;
    }

    // `result` is a JavaScript object
    // convert it to a JSON string
    jsonStr = JSON.stringify(result, null, 4);
     
    // log JSON string
    console.log(result);
    console.log(jsonStr)
    res.status(200).json(result);
    
});

    

});



module.exports = router;