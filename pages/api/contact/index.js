import { mailOptions, transporter } from "@/config/nodemailer";

export const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    try {
      if(data.email == '' || data.message == ''){
        return res.status(400).json({ message: "Bad request" });
      }
      await transporter.sendMail({
        ...mailOptions,
        subject: "Message from your website",
        text: "This is test string",
        html: `<h1>Email from ${data.email}</h1><p>${data.message}</p>`,
      });
      return res.status(201).json({message: "Email sent!"})
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};

export default handler;