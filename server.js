const { render } = require('ejs');
const express = require('express');
const app = express();

const CONFIG = require('./CONFIG.js');

app.set('view engine', 'ejs');
var path = require('path');
app.use(express.static( path.join(__dirname, 'style/css') ));
app.use(express.static( path.join(__dirname, 'js') ));
app.use(express.json());

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());





app.get('/myaccount', (req, res) => {
    res.render('myaccount');
});








app.listen( CONFIG.POSTNO , () => {
    console.log("SERVER LIVE ON 'http://127.0.0.1:5000/'");
} );