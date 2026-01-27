require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

// ================= Nodemailer Setup =================
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter.verify((err) => {
    if (err) {
        console.log("Email error:", err);
    } else {
        console.log("Email server ready");
    }
});

// ================= CONTACT API =================
app.post("/contact", async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: "New Contact Form Message",
        html: `
      <h2>New Message</h2>
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({
            code: 200,
            message: "Email sent successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: 500,
            message: "Failed to send email",
        });
    }
});

// ================= SERVER =================
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {



    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}


module.exports = app;