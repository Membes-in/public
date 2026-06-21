const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const AppRes = require("../utils/AppRes");
const AppError = require("../utils/AppError");
const { Visitor } = require("../models/Visitor");

// SMTP transport is configured entirely from environment variables — never
// hard-code credentials. See .env.example.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: String(process.env.SMTP_SECURE ?? "true") === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const BRAND = {
  dark: "#063434",
  lime: "#B8FE22",
  blue: "#55A6C4",
};

const mailFrom = () =>
  process.env.MAIL_FROM || `"Membes" <${process.env.SMTP_USER}>`;

/** Auto-reply confirmation sent to the person who submitted the form. */
function visitorMail({ email, userName, description, phoneNumber }) {
  return {
    from: mailFrom(),
    to: email,
    subject: `We've received your message, ${userName}!`,
    html: `
      <div style="font-family:'Segoe UI',Tahoma,sans-serif;max-width:600px;margin:auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
        <div style="background-color:${BRAND.dark};padding:24px 32px;text-align:center;">
          <h1 style="color:${BRAND.lime};margin:0;font-size:26px;">Membes</h1>
        </div>
        <div style="height:6px;background:linear-gradient(90deg,${BRAND.lime} 0%,${BRAND.blue} 100%);"></div>
        <div style="padding:32px;color:#222;">
          <h2 style="color:${BRAND.dark};margin:0 0 16px;">Thank you for reaching out!</h2>
          <p style="line-height:1.6;font-size:15px;">Hi <strong>${userName}</strong>, we've received your enquiry and our team will get back to you shortly.</p>
          <div style="background:#F0F1F2;border-left:5px solid ${BRAND.blue};border-radius:6px;padding:20px;margin:24px 0;">
            <p style="margin:0 0 8px;"><strong>Your message:</strong> ${description || "No message provided"}</p>
            <p style="margin:0;"><strong>Contact number:</strong> ${phoneNumber}</p>
          </div>
          <p style="line-height:1.6;font-size:15px;color:#555;">If your query is urgent, just reply to this email.</p>
        </div>
      </div>`,
  };
}

/** Notification sent to the business/admin inbox so queries are received. */
function adminMail({ email, userName, description, phoneNumber }) {
  const notifyTo = process.env.CONTACT_NOTIFY_EMAIL || process.env.SMTP_USER;
  return {
    from: mailFrom(),
    to: notifyTo,
    replyTo: email, // reply goes straight to the visitor
    subject: `New contact enquiry from ${userName}`,
    html: `
      <div style="font-family:'Segoe UI',Tahoma,sans-serif;max-width:600px;margin:auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
        <div style="background-color:${BRAND.dark};padding:20px 32px;">
          <h1 style="color:${BRAND.lime};margin:0;font-size:22px;">New Contact Enquiry</h1>
        </div>
        <div style="height:5px;background:linear-gradient(90deg,${BRAND.lime} 0%,${BRAND.blue} 100%);"></div>
        <div style="padding:28px 32px;color:#222;font-size:15px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:8px 0;font-weight:600;color:${BRAND.dark};width:140px;">Name</td><td>${userName}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:${BRAND.dark};">Email</td><td><a href="mailto:${email}" style="color:${BRAND.blue};">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:${BRAND.dark};">Phone</td><td><a href="tel:${phoneNumber}" style="color:${BRAND.blue};">${phoneNumber}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:${BRAND.dark};vertical-align:top;">Message</td><td>${description || "No message provided"}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:${BRAND.dark};">Received</td><td>${new Date().toLocaleString()}</td></tr>
          </table>
        </div>
      </div>`,
  };
}

const connectService = async (data) => {
  const { email, userName, description, phoneNumber } = data || {};

  if (!userName || !email || !phoneNumber) {
    throw new AppError("Provide complete details", 400);
  }

  const tasks = [
    transporter.sendMail(visitorMail({ email, userName, description, phoneNumber })),
    transporter.sendMail(adminMail({ email, userName, description, phoneNumber })),
  ];

  // Only persist if a DB connection is established.
  if (mongoose.connection.readyState === 1) {
    tasks.push(
      Visitor.create({
        userName,
        email,
        description: description || "",
        phoneNumber,
      }),
    );
  }

  await Promise.all(tasks);

  return new AppRes("Your message has been sent successfully", 200);
};

module.exports = { connectService };
