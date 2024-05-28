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
