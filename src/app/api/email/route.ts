import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email, name, price, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
      },
    });

    const title = `Noire Lab message: ${email}`;

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_GMAIL,
      to: process.env.NEXT_PUBLIC_GMAIL,
      subject: title,
      text: `Email: ${email}; Name: ${name}; Price: ${price} Message: ${message};`,
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}