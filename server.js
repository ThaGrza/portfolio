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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})


app.post('/send', (req, res, next) => {
  sgMail.setApiKey(process.env.REACT_APP_API_KEY);
  console.log(req.body);
  console.log()
  const msg = {
    to: 'andrewgriswold7@gmail.com',
    from: req.body.email,
    subject: req.body.name,
    text: req.body.email + req.body.company + req.body.message,
    html: '<strong>Testing testing I think its not working because sendgrid account approval needed</strong>',
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
