var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');

// Routes:
var asgnRoute = require('./routes/asgn-router');


// DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/asgn', {useNewUrlParser: true});

app.use((req, res, next) => {
    console.log(`${new Date().toString()} ===> ${req.originalUrl}`);
    next();
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.use(asgnRoute);


app.use((req, res, next) => {
    res.status(404).send('Page not found, sorry!');
});

app.listen(PORT, ()=> {
    console.log(`Server has started on port ${PORT}`);
});
