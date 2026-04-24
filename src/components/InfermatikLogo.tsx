type Props = { className?: string };

export const InfermatikLogo = ({ className }: Props) => (
  <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="text-primary"
    >
      <path d="M9 0L18 9L9 18L0 9L9 0Z" fill="currentColor" />
    </svg>
    <span className="text-[17px] font-bold tracking-tight text-foreground">Infermatik</span>
  </div>
);
