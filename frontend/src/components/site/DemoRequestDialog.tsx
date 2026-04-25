import { type FormEvent, type ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type DemoRequestDialogProps = {
  children: ReactNode;
};

type DemoFormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  sector: string;
  message: string;
};

const initialForm: DemoFormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  sector: "",
  message: "",
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const DemoRequestDialog = ({ children }: DemoRequestDialogProps) => {
  const { t } = useTranslation();
  const sectorOptions = t("demoForm.sectorOptions", { returnObjects: true }) as string[];
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<DemoFormState>(initialForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field: keyof DemoFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setForm(initialForm);
      setError("");
      setSubmitted(false);
      setSubmitting(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.fullName.trim() || !form.company.trim() || !form.email.trim()) {
      setError(t("demoForm.errors.required"));
      return;
    }

    if (!isValidEmail(form.email)) {
      setError(t("demoForm.errors.email"));
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        return;
      }

      const result = (await response.json().catch(() => null)) as { code?: string } | null;
      if (result?.code === "SMTP_NOT_CONFIGURED") {
        setError(t("demoForm.errors.notConfigured"));
        return;
      }

      setError(t("demoForm.errors.submitFailed"));
    } catch {
      setError(t("demoForm.errors.submitFailed"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t("demoForm.title")}</DialogTitle>
          <DialogDescription>{t("demoForm.description")}</DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="text-base font-semibold text-foreground">{t("demoForm.successTitle")}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("demoForm.successBody")}</p>
          </div>
        ) : (
          <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="demo-full-name">{t("demoForm.fullName")}</Label>
                <Input
                  id="demo-full-name"
                  value={form.fullName}
                  onChange={(event) => updateField("fullName", event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-company">{t("demoForm.company")}</Label>
                <Input
                  id="demo-company"
                  value={form.company}
                  onChange={(event) => updateField("company", event.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="demo-email">{t("demoForm.email")}</Label>
                <Input
                  id="demo-email"
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-phone">{t("demoForm.phone")}</Label>
                <Input
                  id="demo-phone"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo-sector">{t("demoForm.sector")}</Label>
              <select
                id="demo-sector"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={form.sector}
                onChange={(event) => updateField("sector", event.target.value)}
              >
                <option value="">{t("demoForm.sectorPlaceholder")}</option>
                {sectorOptions.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo-message">{t("demoForm.message")}</Label>
              <Textarea
                id="demo-message"
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder={t("demoForm.messagePlaceholder")}
              />
            </div>

            {error ? <p className="text-sm font-medium text-destructive">{error}</p> : null}

            <div className="flex justify-end">
              <Button type="submit" disabled={submitting}>
                {submitting ? t("demoForm.submitting") : t("demoForm.submit")}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
