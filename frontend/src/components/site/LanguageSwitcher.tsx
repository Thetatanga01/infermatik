import { Check, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const codes = { tr: "TR", en: "EN", de: "DE" } as const;

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const current = (i18n.language?.split("-")[0] || "tr") as keyof typeof codes;
  const safe = current in codes ? current : "tr";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 gap-2 border-border px-2.5 font-medium sm:px-3"
          aria-label={t("a11y.languageMenu")}
        >
          <Globe className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
          <span className="min-w-[2ch] tabular-nums">{codes[safe]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[10rem]">
        {(["tr", "en", "de"] as const).map((lng) => (
          <DropdownMenuItem
            key={lng}
            className="flex cursor-pointer items-center justify-between gap-4"
            onClick={() => void i18n.changeLanguage(lng)}
          >
            <span>{t(`lang.${lng}`)}</span>
            {safe === lng ? <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
