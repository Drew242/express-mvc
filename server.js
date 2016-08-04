var express    = require('express'),
    logger     = require('morgan'),
    bodyParser = require('body-parser'),
    path = require('path'),
	  port = process.env.PORT||1337;

// Define App //
var app = express();

// Mount Middleware //
app.use(logger('dev'));
app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }))


// defines static routes & covers Windows OS //
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app)

// Listener //
app.listen(port, function() {
  console.log(`Server running on port: ${port}`);
})
