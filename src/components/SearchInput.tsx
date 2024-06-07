import { cn } from "@/lib/utils"
import { ChangeEvent, InputHTMLAttributes, useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import { SearchIcon } from "./Icons"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  searchKey?: string
  currentPageKey?: string
}

export default function SearchInput({
  searchKey = "search",
  className,
  placeholder = "...",
  currentPageKey = "page",
  ...props
}: IProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchVal = searchParams.get(searchKey) ?? ""
  const timeoutIdRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }

    timeoutIdRef.current = window.setTimeout(() => {
      setSearchParams((prev) => ({ ...Object.fromEntries(prev), [searchKey]: value, [currentPageKey]: "1" }))
    }, 500)
  }

  return (
    <label className={cn("relative flex items-center max-w-[36rem] w-full", className)}>
      <span className="absolute left-[1.6rem] [&_svg_path]:stroke-greyTxt">
        <SearchIcon />
      </span>
      <input
        defaultValue={searchVal}
        onChange={handleSearch}
        type="search"
        className="w-full border-borderGrey border rounded-[0.8rem] bg-white outline-borderGrey h-[4rem] leading-none px-[1.6rem] pl-[4.8rem] text-darkBlue caret-darkBlue font-medium outline-offset-0"
        placeholder={placeholder}
        {...props}
      />
    </label>
  )
}
