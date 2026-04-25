import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DemoRequestDialog } from "@/components/site/DemoRequestDialog";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string, options?: { returnObjects?: boolean }) => {
      if (key === "demoForm.sectorOptions" && options?.returnObjects) {
        return ["Sigorta", "Gümrük", "Finans"];
      }

      const translations: Record<string, string> = {
        "demoForm.title": "Demo talep formu",
        "demoForm.description": "Kurumunuzu ve kullanım senaryonuzu paylaşın.",
        "demoForm.fullName": "Ad soyad",
        "demoForm.company": "Kurum",
        "demoForm.email": "E-posta",
        "demoForm.phone": "Telefon",
        "demoForm.sector": "Sektör",
        "demoForm.message": "Kullanım senaryosu",
        "demoForm.submit": "Talebi oluştur",
        "demoForm.submitting": "Gönderiliyor",
        "demoForm.successTitle": "Demo talebiniz hazırlandı",
        "demoForm.successBody": "Talebiniz ekibimize iletildi.",
        "demoForm.errors.required": "Lütfen zorunlu alanları doldurun.",
        "demoForm.errors.email": "Geçerli bir e-posta adresi girin.",
        "demoForm.errors.notConfigured": "Mail gönderimi henüz yapılandırılmadı.",
        "demoForm.errors.submitFailed": "Talep gönderilemedi.",
      };

      return translations[key] ?? key;
    },
  }),
}));

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("DemoRequestDialog", () => {
  it("opens the demo form and validates required fields before posting the request", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ ok: true }),
    });
    vi.stubGlobal("fetch", fetchMock);

    render(
      <DemoRequestDialog>
        <button type="button">Demo Talep Et</button>
      </DemoRequestDialog>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Demo Talep Et" }));
    expect(screen.getByRole("dialog", { name: "Demo talep formu" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Talebi oluştur" }));
    expect(screen.getByText("Lütfen zorunlu alanları doldurun.")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Ad soyad"), { target: { value: "Ayşe Yılmaz" } });
    fireEvent.change(screen.getByLabelText("Kurum"), { target: { value: "Infermatik" } });
    fireEvent.change(screen.getByLabelText("E-posta"), { target: { value: "ayse@example.com" } });
    fireEvent.change(screen.getByLabelText("Kullanım senaryosu"), {
      target: { value: "Sigorta hasar dosyaları için demo istiyoruz." },
    });
    fireEvent.click(screen.getByRole("button", { name: "Talebi oluştur" }));

    expect(await screen.findByText("Demo talebiniz hazırlandı")).toBeInTheDocument();
    expect(screen.getByText("Talebiniz ekibimize iletildi.")).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/demo-request",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: expect.stringContaining("ayse@example.com"),
      }),
    );
  });

  it("shows a configuration message when SMTP is not ready", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        json: () => Promise.resolve({ code: "SMTP_NOT_CONFIGURED" }),
      }),
    );

    render(
      <DemoRequestDialog>
        <button type="button">Demo Talep Et</button>
      </DemoRequestDialog>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Demo Talep Et" }));
    fireEvent.change(screen.getByLabelText("Ad soyad"), { target: { value: "Ayşe Yılmaz" } });
    fireEvent.change(screen.getByLabelText("Kurum"), { target: { value: "Infermatik" } });
    fireEvent.change(screen.getByLabelText("E-posta"), { target: { value: "ayse@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: "Talebi oluştur" }));

    expect(await screen.findByText("Mail gönderimi henüz yapılandırılmadı.")).toBeInTheDocument();
  });
});
