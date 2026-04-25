import { useTranslation } from "react-i18next";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const STP_PATTERN = /STP(?: \(Straight-Through Processing\))?/g;

type StpTooltipTextProps = {
  text: string;
};

export const StpTooltipText = ({ text }: StpTooltipTextProps) => {
  const { t } = useTranslation();
  const parts = text.split(STP_PATTERN);
  const matches = text.match(STP_PATTERN) ?? [];

  if (matches.length === 0) return <>{text}</>;

  return (
    <>
      {parts.map((part, index) => (
        // The split result is ordered as text, match, text, match...
        <span key={`${part}-${index}`}>
          {part}
          {matches[index] ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  aria-label={t("terms.stp.label")}
                  className="cursor-help rounded-sm border-b border-dotted border-primary text-foreground underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  role="button"
                  tabIndex={0}
                >
                  {matches[index]}
                </span>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs leading-relaxed">
                <p>{t("terms.stp.tooltip")}</p>
              </TooltipContent>
            </Tooltip>
          ) : null}
        </span>
      ))}
    </>
  );
};
