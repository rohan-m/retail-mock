var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

//var logger = require('morgan');
//app.use(logger('combined'));



var routes = require('./lib/routes.js');

app.get('/products/:productId', routes.getProduct);
app.get('/products/', routes.getProducts);
app.post('/payment/', routes.createPayment);
//error APIs
app.get('/*',function (req,res)
{
    err={};
    err.code=400;
    err.msg="Please provide a valid path";
    res.status(err.code).send(JSON.stringify(err, undefined, 2));

});

app.listen(80, function ()
{
    console.log('App listening on port 80!');

});
