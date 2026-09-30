import { cn } from "@/lib/utils";

type Props = {
  /** Centre colour of the glow, e.g. "#cbfc01" (lime) or "#003be2" (brand blue) */
  color?: string;
  /** Overall strength, 0 to 1 */
  opacity?: number;
  /** Diameter in px */
  size?: number;
  className?: string;
};

// Soft radial ellipse from the design: solid centre fading out at 53%, 75% and 100%.
// The gradient already feathers the edge, so no CSS blur is used: a blurred 1000px layer is
// expensive to repaint while scrolling.
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
