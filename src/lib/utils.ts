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

export function useDateFormatter2(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0")
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const year = date.getFullYear()
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")

  return `${day}.${month}.${year} | ${hours}:${minutes}`
}

export const useGetBrowserDeviceInfo = (): string => {
  const userAgent = navigator.userAgent
  const platform = navigator.platform

  const detectOS = (platform: string) => {
    let os = "Unknown OS"

    if (platform.toLowerCase().includes("win")) {
      os = "Windows"
    } else if (platform.toLowerCase().includes("mac")) {
      os = "Mac OS"
    } else if (platform.toLowerCase().includes("linux")) {
      os = "Linux"
    }

    return os
  }

  const detectBrowser = (userAgent: string) => {
    let browser = "Unknown Browser"

    if (userAgent.includes("Chrome")) {
      browser = "Chrome"
    } else if (userAgent.includes("Firefox")) {
      browser = "Firefox"
    } else if (userAgent.includes("Edge")) {
      browser = "Edge"
    } else if (userAgent.includes("Safari")) {
      browser = "Safari"
    }

    return browser
  }

  const browser = detectBrowser(userAgent)
  const os = detectOS(platform)

  return `${os}, ${browser}`
}
