"use server";
import nodemailer from "nodemailer";
export const sendSignupOTP = async ({ to, otp }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `NEXUS ACADEMIC <${process.env.EMAIL}>`, // sender address
      to: to, // list of receivers
      subject: "NEXUS Email Verification", // Subject line
      text: `Your OTP is ${otp}`, // plain text body
      html: `
      <div>
        <h1>Your OTP is ${otp}</h1>
        <p>You are heartly welcome.</p>
      </div>
    `,
    });

    return {
      message: `OTP sent to ${to}`,
      type: "success",
      success: true,
    };
  } catch (error) {
    return {
      message: error.message,
      type: "error",
      success: false,
    };
  }
};
