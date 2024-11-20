const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); 

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  
    pass: process.env.EMAIL_PASS,  
  },
});

// Memverifikasi apakah konfigurasi SMTP berhasil
contactEmail.verify((error) => {
  if (error) {
    console.log("SMTP verification failed:", error);
  } else {
    console.log("Ready to Send");
  }
});

// Endpoint untuk menerima form submission dan mengirim email
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;
  
  const mail = {
    from: `${firstName} ${lastName} <${email}>`, 
    to: "luis.gantar1@gmail.com",  
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Error in sending email:", error);
      res.json({ code: 500, status: "Error in sending message" });
    } else {
      console.log("Message Sent Successfully");
      res.json({ code: 200, status: "Message Sent Successfully" });
    }
  });
});