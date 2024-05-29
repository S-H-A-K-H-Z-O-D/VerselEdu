import { type ClassValue, clsx } from "clsx"
import { useSearchParams } from "react-router-dom"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useGetSearchParams() {
  const [searchParams] = useSearchParams()
  return Object.fromEntries(searchParams)
}

export function useDateFormatter(
  date: Date,
  options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" },
): string {
  const formattedDate = date.toLocaleDateString("en-US", options)
  return formattedDate
}
