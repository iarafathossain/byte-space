export { cn } from "cn"

const timeUnits = [
  ["year", 31_536_000],
  ["month", 2_592_000],
  ["week", 604_800],
  ["day", 86_400],
  ["hour", 3_600],
  ["minute", 60],
] as const

// Formats a past date as "a year ago", "3 months ago", "an hour ago", etc.
export function formatTimeAgo(date: Date | string, now = new Date()) {
  const seconds = (now.getTime() - new Date(date).getTime()) / 1000

  for (const [unit, unitSeconds] of timeUnits) {
    const value = Math.floor(seconds / unitSeconds)
    if (value > 1) return `${value} ${unit}s ago`
    if (value === 1) return `${unit === "hour" ? "an" : "a"} ${unit} ago`
  }

  return "just now"
}
