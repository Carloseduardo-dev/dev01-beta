export const Dev01Logo = ({ className = "" }: { className?: string }) => (
  <svg
    width="140"
    height="36"
    viewBox="0 0 280 72"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Dev01 logo"
    className={className}
  >
    <g fill="none" fillRule="evenodd">
      <rect
        x="0"
        y="8"
        width="72"
        height="56"
        rx="12"
        className="fill-foreground"
      />
      <path
        d="M24 26 L38 36 L24 46"
        stroke="hsl(147, 100%, 45%)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="44"
        y="44"
        width="20"
        height="5"
        rx="2"
        fill="hsl(147, 100%, 45%)"
      />
      <text
        x="92"
        y="48"
        fontFamily="Inter, ui-sans-serif, system-ui"
        fontSize="36"
        fontWeight="700"
        className="fill-foreground"
      >
        Dev<tspan className="fill-muted-foreground">01</tspan>
      </text>
    </g>
  </svg>
);

export const Dev01Symbol = ({ className = "" }: { className?: string }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 72 72"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Dev01 símbolo"
    className={className}
  >
    <rect width="72" height="72" rx="14" className="fill-foreground/10" />
    <g
      transform="translate(6,6)"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 16 L26 28 L12 40" className="stroke-primary" />
      <rect
        x="32"
        y="36"
        width="10"
        height="4"
        rx="2"
        className="fill-primary"
      />
    </g>
  </svg>
);
