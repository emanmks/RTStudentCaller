const express = require('express');
const app = express();
const port = process.env.PORT || 3456;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/office', (req, res) => {
  res.sendFile(__dirname + '/public/office.html');
});

app.get('/class', (req, res) => {
  res.sendFile(__dirname + '/public/class.html');
});

app.listen(port, () => {
  console.log(`Student Caller runnin on port http://0.0.0.0:${port}`)
});