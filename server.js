const express = require("express");
const router = express.Router();
const path = require("path");
const cors = require("cors");
const PORT   = process.env.PORT || 3001;
const app = express();
var nodemailer = require("nodemailer");
const creds = require("./config");



var transport = {
  host: creds.HOST,
  port: creds.PORT,
  auth: {
  user: creds.USER,
  pass: creds.PASS
  }
}


var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if(error){
    console.log(error);
  }else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  let name = req.body.name
  let company = req.body.company
  let email = req.body.email
  let message = req.body.message
  let content = `Name: ${name} \n Company: ${company} \n Email: ${email} \n Message: ${message} `

  var mail = {
    from: name,
    to: "andrewgriswold7@gmail.com",
    subject: "New Message From Contact Form",
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if(err) {
      res.json({
        status: "failed"
      })
    }else {
      res.json({
        status: "Success!"
      })
    }
  })
});

// Server info/setup.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function(){
  console.log(`🤖 ==> Server listening on port ${PORT}`);
});