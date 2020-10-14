// JavaScript Document
const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
        
      app = express();
      
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(express.static(path.join(__dirname,'public')));
      
const port = process.env.PORT || 3000,
      controller = require('./controller/controller');

app.use(function(req,res,next) {
	res.setHeader('Access-Control-Allow-Origin','*');
	next();
})

var routes = require('./routes/routes');
routes(app);

app.listen(port);
console.log('running on port ' + port);
