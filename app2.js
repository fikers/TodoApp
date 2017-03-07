// required node modules
var express = require('express');
var app = express();

// set ejs as view engine
app.set('view engine', 'ejs');

// set path for static files to be checked for in the ./public directory
app.use(express.static('./public'));

app.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=eb7e2842c398138ae094359ea413ccd1', function(req, res) {
})

// set port to 3000
app.listen(3000);
console.log('Server is running at Port 3000');
