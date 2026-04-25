import request from "supertest";
import { describe, expect, it, vi } from "vitest";
import { createApp } from "./app.js";
import { MissingSmtpConfigError } from "./mail.js";

const validPayload = {
  fullName: "Ayse Yilmaz",
  company: "Infermatik",
  email: "ayse@example.com",
  phone: "+90 555 000 00 00",
  sector: "Sigorta",
  message: "Hasar dosyalari icin demo istiyoruz.",
};

describe("demo request API", () => {
  it("validates required fields", async () => {
    const sendMail = vi.fn();
    const app = createApp({ sendMail });

    const response = await request(app).post("/api/demo-request").send({
      ...validPayload,
      email: "not-an-email",
    });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ ok: false, code: "VALIDATION_ERROR" });
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("sends valid demo requests", async () => {
    const sendMail = vi.fn().mockResolvedValue(undefined);
    const app = createApp({ sendMail });

    const response = await request(app).post("/api/demo-request").send(validPayload);

    expect(response.status).toBe(202);
    expect(response.body).toEqual({ ok: true });
    expect(sendMail).toHaveBeenCalledWith(validPayload);
  });

  it("reports missing SMTP configuration", async () => {
    const sendMail = vi.fn().mockRejectedValue(new MissingSmtpConfigError());
    const app = createApp({ sendMail });

    const response = await request(app).post("/api/demo-request").send(validPayload);

    expect(response.status).toBe(503);
    expect(response.body).toEqual({ ok: false, code: "SMTP_NOT_CONFIGURED" });
  });
});
