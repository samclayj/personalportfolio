const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello from App Engine.');
});

app.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/form.html'));
});

app.post('/submit', (req, res) => {
  console.log({
    name: req.body.name,
    message: req.body.message,
  });
  res.send('Thanks for your message');
});

// Note: PORT is set when running on App Engine.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
