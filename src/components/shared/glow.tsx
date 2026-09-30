import { cn } from "@/lib/utils";

type Props = {
  color?: string;
  opacity?: number;
  size?: number;
  className?: string;
};

export function Glow({ color = "#cbfc01", opacity = 0.4, size = 1137, className }: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full", className)}
      style={{
        width: size,
        height: size,
        opacity,
        background: `radial-gradient(circle, ${color} 0%, color-mix(in srgb, ${color} 23%, transparent) 53%, color-mix(in srgb, ${color} 6%, transparent) 75%, transparent 100%)`,
      }}
    />
  );
}
