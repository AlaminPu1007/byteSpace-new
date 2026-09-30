"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const [, prefix = "", digits, suffix = ""] = value.match(/^(\D*)(\d+)(.*)$/) ?? [];
  const target = Number(digits);
  const [current, setCurrent] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || Number.isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        setCurrent(Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      setCurrent(0);
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  if (Number.isNaN(target)) return <>{value}</>;
  return (
    <span ref={ref}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}
