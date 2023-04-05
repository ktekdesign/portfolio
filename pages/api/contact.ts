import { NextApiRequest, NextApiResponse } from "next";

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.sendgridKey);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, number, subject, text } = req.body;

  const data = {
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
    await sgMail.send(data);
    res.status(200).send("Email envoyé");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};
