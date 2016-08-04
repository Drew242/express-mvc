var express    = require('express'),
    logger     = require('morgan'),
    bodyParser = require('body-parser');

// Define App //
var app = express();

// Mount Middleware //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));

require('./routes')(app)

// Listener //
var port = process.env.PORT || 8080
app.listen(port, function() {
  console.log(`Server running on port: ${port}`);
})
