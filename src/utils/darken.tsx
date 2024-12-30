export function darken(color: string, amount: number): string {
  const hex = color.startsWith("#") ? color.slice(1) : color;
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  r = Math.max(0, Math.min(255, r - amount * 255));
  g = Math.max(0, Math.min(255, g - amount * 255));
  b = Math.max(0, Math.min(255, b - amount * 255));

  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}