import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = {
  auth: {
    // Update here your SendGrid API key 
    api_key: process.env.sendgridKey
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
  // console.log(req.body)
  const { name, email, number, subject, text } = req.body;

  const data = {
    // Update here your email
    to: "contact@ktekdesign.com",
    from: `${name}<contact@ktekdesign.com>`,
    replyTo: email,
    subject: subject,
    text: text,
    html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Message:</b> ${text} 
        `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};
