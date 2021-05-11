require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("./"));
const path = require("path");
var nodemailer = require("nodemailer");
const CryptoJS = require("crypto-js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "./") });
});

app.post("/contact", function (req, res) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "thekittrellcompany@gmail.com",
      pass: process.env.email_pass,
    },
  });

  var mailOptions = {
    from: "thekittrellcompany@gmail.com",
    to: req.body.email,
    subject: "Howdy from The Kittrell Company!",
    text:
      "Hello " +
      req.body.name +
      "!" +
      "\n\n" +
      "Glad you like our houses. " +
      "Please don't hesitate to ask any questions here. " +
      "We are quite busy, but if you would like to discuss buying a home, " +
      "David will contact you to set up a discussion at his earliest convenience." +
      "\n\n" +
      "Best, " +
      "\n" +
      "The Kittrell Company",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Contact Email sent: " + info.response);
    }
  });

  //create second transporter for sending contact details to us
  var contactOptions = {
    from: "thekittrellcompany.com website",
    to: "thekittrellcompany@gmail.com",
    subject: "Contact Submission from Website",
    text:
      "Name: " +
      req.body.name +
      "\n" +
      "Phone: " +
      req.body.phone +
      "\n" +
      "Email: " +
      req.body.email +
      "\n" +
      "Message: " +
      req.body.message,
  };

  transporter.sendMail(contactOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Admin Email sent: " + info.response);
    }
  });
});

app.get("/gmaps", function (req, res) {
  res.send(encrypt(process.env.gmaps_1));
});

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

function encrypt(message = "", key = "") {
  var message = CryptoJS.AES.encrypt(message, key);
  return message.toString();
}
