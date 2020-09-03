const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  // Change for our server only after testing.
  // res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

// app.get('/test', (req, res, next) => {
//   res.send('API Server Is Working');
// });
// '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'

app.post('/send', (req, res, next) => {
  sgMail.setApiKey(process.env.SG_KEY);

  const msg = {
    to: 'andrewgriswold7@gmail.com',
    from: 'andrewgriswold7@gmail.com',
    subject: 'Agriswold.com' + req.body.name,
    text: req.body.email + req.body.company + req.body.message,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  sgMail.send(msg)
    .then(result => {
      res.status(200).json({
        success: true
      });
    })
    .catch(err => {
      console.log(err.response.body);
      res.status(401).json({
        success: false
      });
    });

});

app.listen(PORT, function() {
  console.log(`Api Server is listening on port: ${PORT}`);
});