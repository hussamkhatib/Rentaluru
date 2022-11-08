export function kFormatter(num: number) {
  return Math.abs(num) > 999 ? Math.floor(num / 1000).toFixed(0) + "k" : num;
}
