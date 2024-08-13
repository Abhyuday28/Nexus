"use server";
import Template from "@/components/template";
import { User } from "@/model/User";
import { Resend } from "resend";
import { v4 as uuidv4 } from "uuid";

const sendOTP = async ({ to, subject }) => {
  try {
    const otp = Math.floor(1000 + Math.random() * 9000);

    const { data, error } = await Resend.emails.send({
      from: "NEXUS ACADEMIC <onboarding@resend.dev>",
      to: [to],
      subject,
      react: Template({
        otp,
      }),
    });

    if (error) {
      return {
        message: error,
        type: "error",
        success: false,
      };
    }

    return {
      message: error,
      type: "error",
      success: false,
    };
  } catch (error) {
    return {
      message: error.message,
      type: "error",
      success: false,
    };
  }
};
