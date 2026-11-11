import nodemailer from "nodemailer";
import dotenv from "dotenv";
import puppeteer from "puppeteer";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});

export async function sendEmail(to, subject, htmle) {
  try {
    const pdf = await makepdf(htmle);
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: htmle,
      attachments: [{ filename: "invoice.pdf", content: pdf }],
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to} successfully`);
    return true;
  } catch (err) {
    console.error(`Error sending email to ${to}:`, err);
    throw err;
  }
 
}
async function makepdf(htmle) {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.setContent(htmle, { waitUntil: "domcontentloaded" });
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    });
    return Buffer.from(pdf);
  } finally {
    await browser.close();
  }
}
