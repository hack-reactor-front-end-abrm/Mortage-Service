var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var db = require('../model/queryDB.js');
var path = require('path');
var cors = require('cors');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));


app.use(cors());


app.get('/:number', function(req, res) {
    // console.log('getting here');
    
    // console.log('__dirname: ', __dirname);
    // res.locals.id = req.params.number;
    // console.log(res.locals.id);
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

// if the client requests queries just api it will query the database for some reason
app.get('/api/price', function(req, res) {
    // db.getPriceFromDB(null, function(result) {
    //     console.log('/price this is the result from the server', result);
    //     res.send(result);
    // }); 

    res.send({
        "price": 100000
    })
});

app.get('/api/price/:priceId', function(req, res) {
    db.byIdgetPriceFromDB(null, req.params.priceId, function(result){ 
        console.log('/price/:priceId this is the result from the server', result);
        res.locals.id = req.params.priceId;
        console.log('res.locals.id: ', res.locals.id);
        
        res.send(result);
    });
});


var port = process.env.PORT || 3008;

app.listen(port, function() {
    console.log(`Server is listening on port: ${port}`);
});