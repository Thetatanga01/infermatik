import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Sectors } from "@/components/site/Sectors";
import { TooltipProvider } from "@/components/ui/tooltip";

const sectorItems = [
  {
    id: "insurance",
    sector: "Sigorta",
    title: "Akıllı hasar yönetimi",
    body: "Hasar dosyaları ve saha görselleri birlikte analiz edilir.",
    problem: "Manuel hasar inceleme süreçleri yavaş ve fraud riski yüksektir.",
    useCases: ["Fotoğraf, video ve eksper raporlarından ön ekspertiz üretir."],
    decision: "Mükerrer talepleri ve tutarsız dosyaları otomatik işaretler.",
    metrics: ["Saatler süren dosya incelemesi saniyeler içinde ön skora dönüşür."],
  },
  {
    id: "customs",
    sector: "Gümrük",
    title: "Uyum ve ceza önleme",
    body: "Beyanname ve faturalar çapraz kontrol edilir.",
    problem: "Küçük bir veri girişi hatası ağır regülasyon cezalarına dönüşebilir.",
    useCases: ["Fatura, beyanname ve sözleşme kalemlerini karşılaştırır."],
    decision: "Mevzuat uyumsuzluklarını işlem tamamlanmadan yakalar.",
    metrics: ["STP oranı yükselir, manuel kontrol yükü azalır."],
  },
];

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string, options?: { returnObjects?: boolean }) => {
      if (key === "sectors.items" && options?.returnObjects) return sectorItems;
      if (key === "sectors.eyebrow") return "Sektörler";
      if (key === "sectors.title") return "Her sektörde somut karar zekası.";
      if (key === "sectors.detailProblem") return "Problem";
      if (key === "sectors.detailUseCases") return "Kullanım senaryoları";
      if (key === "sectors.detailDecision") return "Karar zekası";
      if (key === "sectors.detailMetrics") return "Ölçülebilir değer";
      if (key === "sectors.selectSector") return "Sektör detayını göster";
      if (key === "terms.stp.label") return "STP (Straight-Through Processing) açıklaması";
      if (key === "terms.stp.tooltip") return "Straight-Through Processing, insan müdahalesi olmadan tamamlanan işlem oranıdır.";
      return key;
    },
  }),
}));

const renderSectors = () =>
  render(
    <TooltipProvider delayDuration={0}>
      <Sectors />
    </TooltipProvider>,
  );

describe("Sectors", () => {
  it("shows details for the selected sector", () => {
    renderSectors();

    expect(screen.getByText("Manuel hasar inceleme süreçleri yavaş ve fraud riski yüksektir.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /gümrük/i }));

    expect(screen.getByText("Küçük bir veri girişi hatası ağır regülasyon cezalarına dönüşebilir.")).toBeInTheDocument();
    expect(screen.queryByText("Manuel hasar inceleme süreçleri yavaş ve fraud riski yüksektir.")).not.toBeInTheDocument();
  });

  it("explains STP on focus", async () => {
    renderSectors();

    fireEvent.click(screen.getByRole("button", { name: /gümrük/i }));
    fireEvent.focus(screen.getByLabelText(/straight-through processing/i));

    expect(
      await screen.findAllByText("Straight-Through Processing, insan müdahalesi olmadan tamamlanan işlem oranıdır."),
    ).not.toHaveLength(0);
  });
});
