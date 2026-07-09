"use client";

import { useEffect, useRef, useState } from "react";

export function AudienceGrid({ items }: { items: string[] }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.18,
      },
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={gridRef}
      className={`audience-grid audience-grid-ready${
        isVisible ? " is-visible" : ""
      }`}
    >
      {items.map((item) => (
        <span key={item} className="audience-item">
          {item}
        </span>
      ))}
    </div>
  );
}
