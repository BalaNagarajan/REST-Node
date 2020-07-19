//importing express to use the http utility methods
const express = require('express');
//creating the app as express
const app = express();
//Logging package
const morgan = require('morgan')
//Body parser
const bodyParser = require('body-parser')




//Body parser XML
require('body-parser-xml')(bodyParser);



const agentRoutes = require('./routes/agent');
const customerRoutes = require('./routes/customer');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));


//app.use(bodyParser.json());
app.use(bodyParser.xml())


app.use('/v1/api/agents',agentRoutes);
app.use('/v1/api/customers',customerRoutes);

module.exports = app;
