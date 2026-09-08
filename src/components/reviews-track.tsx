"use client";

import { useRef, type ReactNode } from "react";

type ReviewsTrackProps = {
  children: ReactNode;
  prevLabel: string;
  nextLabel: string;
};

export function ReviewsTrack({ children, prevLabel, nextLabel }: ReviewsTrackProps) {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector("article");
    const amount = card ? card.getBoundingClientRect().width + 24 : node.clientWidth * 0.8;
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="relative mt-10 md:px-8">
      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <button
        type="button"
        className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#e8eaed] text-lg text-ink hover:bg-[#dadce0] md:flex"
        aria-label={prevLabel}
        onClick={() => scroll(-1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#e8eaed] text-lg text-ink hover:bg-[#dadce0] md:flex"
        aria-label={nextLabel}
        onClick={() => scroll(1)}
      >
        ›
      </button>
    </div>
  );
}
