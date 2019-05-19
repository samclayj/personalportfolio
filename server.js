const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const webpack= require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackMiddleware = require('webpack-dev-middleware');

const MODE = 'production';

app.use(bodyParser.urlencoded({extended: true}));
app.use(webpackMiddleware(webpack(webpackConfig(MODE))));

app.get('/', (req, res) => {
    // res.send('I have the power');
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.get('/submit', (req, res) => {
    res.send('seems to be working?');
});

// Note: PORT is set when running on App Engine.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
