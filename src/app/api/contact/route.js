import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Mailtrap configuration
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io", // Mailtrap host
      port: 2525, // Mailtrap port
      auth: {
        user: process.env.MAILTRAP_USER, // Your Mailtrap username
        pass: process.env.MAILTRAP_PASS, // Your Mailtrap password
      },
    });

    const mailOptions = {
      from: email, // Use the sender's email from the form
      to: process.env.RECEIVER_EMAIL, // Your email from .env
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send message",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
