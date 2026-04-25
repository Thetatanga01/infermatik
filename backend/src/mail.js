import nodemailer from "nodemailer";

export class MissingSmtpConfigError extends Error {
  constructor() {
    super("SMTP configuration is missing");
    this.name = "MissingSmtpConfigError";
    this.code = "MISSING_SMTP_CONFIG";
  }
}

const requiredSmtpKeys = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_TO"];

const getMissingKeys = (env) => requiredSmtpKeys.filter((key) => !env[key]);

const escapeHtml = (value = "") =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const formatDemoRequestHtml = (data) => `
  <h2>Yeni demo talebi</h2>
  <p><strong>Ad soyad:</strong> ${escapeHtml(data.fullName)}</p>
  <p><strong>Kurum:</strong> ${escapeHtml(data.company)}</p>
  <p><strong>E-posta:</strong> ${escapeHtml(data.email)}</p>
  <p><strong>Telefon:</strong> ${escapeHtml(data.phone || "-")}</p>
  <p><strong>Sektör:</strong> ${escapeHtml(data.sector || "-")}</p>
  <p><strong>Kullanım senaryosu:</strong></p>
  <p>${escapeHtml(data.message || "-").replaceAll("\n", "<br />")}</p>
`;

const formatDemoRequestText = (data) => [
  "Yeni demo talebi",
  "",
  `Ad soyad: ${data.fullName}`,
  `Kurum: ${data.company}`,
  `E-posta: ${data.email}`,
  `Telefon: ${data.phone || "-"}`,
  `Sektör: ${data.sector || "-"}`,
  "",
  "Kullanım senaryosu:",
  data.message || "-",
].join("\n");

export const sendDemoRequestMail = async (data, env = process.env) => {
  const missingKeys = getMissingKeys(env);
  if (missingKeys.length > 0) {
    throw new MissingSmtpConfigError();
  }

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT),
    secure: env.SMTP_SECURE === "true" || Number(env.SMTP_PORT) === 465,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: env.MAIL_FROM || env.SMTP_USER,
    to: env.MAIL_TO,
    replyTo: data.email,
    subject: `Infermatik demo talebi - ${data.company}`,
    text: formatDemoRequestText(data),
    html: formatDemoRequestHtml(data),
  });
};
