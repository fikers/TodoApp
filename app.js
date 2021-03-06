// required node modules
var express = require('express');
var app = express();
var toDoController = require('./controllers/toDoController');

// set ejs as view engine
app.set('view engine', 'ejs');

// set path for static files to be checked for in the ./public directory
app.use(express.static('./public'));

// fire controllers
toDoController(app);

// set port to 3000
app.listen(3000);
console.log('Server is running at Port 3000');
