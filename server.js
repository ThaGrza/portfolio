const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendGrid/mail');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  // Change for our server only after testing.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST PUT PATCH DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

// app.get('/test', (req, res, next) => {
//   res.send('API Server Is Working');
// });

app.post('/send', (req, res, next) => {
  console.log(req.body);
});

app.listen(PORT, function() {
  console.log(`Api Server is listening on port: ${PORT}`);
});

