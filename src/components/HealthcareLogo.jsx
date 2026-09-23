function HealthcareLogo({ size = 70 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="12" y="4" width="40" height="56" rx="8" fill="#005EB8" />
      <rect x="4" y="12" width="56" height="40" rx="8" fill="#005EB8" />

      <path
        d="M10 32 H20 L24 24 L28 40 L32 28 L36 32 H54"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HealthcareLogo;
