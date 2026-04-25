import express from "express";
import { z } from "zod";
import { MissingSmtpConfigError, sendDemoRequestMail } from "./mail.js";

const demoRequestSchema = z.object({
  fullName: z.string().trim().min(1),
  company: z.string().trim().min(1),
  email: z.string().trim().email(),
  phone: z.string().trim().optional().default(""),
  sector: z.string().trim().optional().default(""),
  message: z.string().trim().optional().default(""),
});

export const createApp = ({ sendMail = sendDemoRequestMail } = {}) => {
  const app = express();

  app.use(express.json({ limit: "1mb" }));

  app.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  app.post("/api/demo-request", async (req, res) => {
    const parsed = demoRequestSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        ok: false,
        code: "VALIDATION_ERROR",
      });
    }

    try {
      await sendMail(parsed.data);
      return res.status(202).json({ ok: true });
    } catch (error) {
      if (error instanceof MissingSmtpConfigError || error?.code === "MISSING_SMTP_CONFIG") {
        return res.status(503).json({
          ok: false,
          code: "SMTP_NOT_CONFIGURED",
        });
      }

      console.error("Failed to send demo request email", error);
      return res.status(500).json({
        ok: false,
        code: "MAIL_SEND_FAILED",
      });
    }
  });

  return app;
};
