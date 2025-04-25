const express = require('express');
const app = express();
const port = process.env.PORT || 3456;

app.get('/', (req, res) => {
  res.send('Hello Student!');
});

app.listen(port, () => {
  console.log(`Student Caller runnin on port http://0.0.0.0:${port}`)
});