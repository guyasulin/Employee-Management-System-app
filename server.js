var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
const cors = require("cors");
var config = "mongodb://localhost:27017/employees";
mongoose.connect(config);
mongoose.connection.once('open',()=>{
    console.log('Connected to db' + config);
});
mongoose.connection.once('error',()=>{
    console.log('errorrrrr' );
});

var app = express()

var port = 3000;

app.get('/', function(req,res){
    res.send("Hello from sikandar")
});

var router = require('./routes')

//middleware
app.use(bodyparser.urlencoded({extended:true}));

app.use(cors());

app.use(bodyparser.json());

app.use('/api/employees', router)

app.listen(port, function(){
    console.log('server is runnig on port ' + port)
})