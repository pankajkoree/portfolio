import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER, // Your email address (Gmail)
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`, // Dynamically set "from" from form data
      to: process.env.RECEIVER_EMAIL, // Email address from .env file
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
    console.log("Mail Options:", mailOptions);

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res
      .status(500)
      .json({ message: `Failed to send message: ${error.message}` });
  }
}
