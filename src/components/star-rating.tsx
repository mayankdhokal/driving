type StarRatingProps = {
  value: number;
  label: string;
  size?: "sm" | "md";
};

function Star({ fill }: { fill: number }) {
  const clip = Math.max(0, Math.min(1, fill));
  return (
    <span className="relative inline-block h-[1em] w-[1em]" aria-hidden>
      <svg viewBox="0 0 24 24" className="absolute inset-0 fill-[#d9d3c7]">
        <path d="M12 2.6 14.9 9l6.9.6-5.2 4.5 1.6 6.7L12 17.2 5.8 20.8l1.6-6.7L2.2 9.6 9.1 9z" />
      </svg>
      <span className="absolute inset-0 overflow-hidden" style={{ width: `${clip * 100}%` }}>
        <svg viewBox="0 0 24 24" className="h-[1em] w-[1em] fill-[#fb8c00]">
          <path d="M12 2.6 14.9 9l6.9.6-5.2 4.5 1.6 6.7L12 17.2 5.8 20.8l1.6-6.7L2.2 9.6 9.1 9z" />
        </svg>
      </span>
    </span>
  );
}

export function StarRating({ value, label, size = "md" }: StarRatingProps) {
  const stars = [0, 1, 2, 3, 4].map((index) => Math.max(0, Math.min(1, value - index)));
  return (
    <p
      className={`flex items-center gap-0.5 text-[#fb8c00] ${size === "sm" ? "text-base" : "text-xl"}`}
      aria-label={label}
    >
      {stars.map((fill, index) => (
        <Star key={index} fill={fill} />
      ))}
    </p>
  );
}
