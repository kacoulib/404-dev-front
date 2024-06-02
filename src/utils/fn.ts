export function truncateText(text: string, length = 100) {
  const words = text.split(" ");
  return words.length > length
    ? words.slice(0, length).join(" ") + "..."
    : text;
}
