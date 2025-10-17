"use client";
import { useState } from "react";

type CarouselImage = { src: string; alt?: string };

export default function Carousel({
  images = [],
  colors = [],
  placeholderIcon,
}: {
  images?: CarouselImage[];
  colors?: string[];
  placeholderIcon?: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const hasImages = images.length > 0;
  const hasColors = !hasImages && colors.length > 0;
  const hasSlides = hasImages || hasColors;

  function go(delta: number) {
    if (!hasSlides) return;
    const len = hasImages ? images.length : colors.length;
    setIndex((i) => (i + delta + len) % len);
  }

  return (
    <div className="carousel relative w-full">
      <div className={
        "w-full h-[260px] overflow-hidden rounded-t-[20px] " +
        (hasImages ? "bg-black/20" : hasColors ? "" : "project-banner grid place-items-center")
      }>
        {hasImages ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={images[index].src}
            alt={images[index].alt || "slide"}
            className="w-full h-full object-cover"
          />
        ) : hasColors ? (
          <div className="w-full h-full" style={{ background: colors[index] }} />
        ) : (
          <span className="project-icon">{placeholderIcon ?? "🖼️"}</span>
        )}
      </div>
      {hasSlides && (
        <>
          <button
            type="button"
            aria-label="Anterior"
            className="carousel-btn left-2"
            onClick={() => go(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            className="carousel-btn right-2"
            onClick={() => go(1)}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}


