var express = require('express');
var app = express();
var cors = require('cors');
var mongoose = require('mongoose');
var config = require('./config');
var setupContoller = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/my-todo'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionsString());
setupContoller(app);
apiController(app);

app.listen(port);
app.use(cors());
 app.use(allowCrossDomain);
    //some other code
