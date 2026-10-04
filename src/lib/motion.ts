export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function setSpotlightVars(event: React.MouseEvent<HTMLElement>) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  el.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export function staggerDelay(index: number, base = 0.08, max = 0.5): number {
  return Math.min(index * base, max);
}
