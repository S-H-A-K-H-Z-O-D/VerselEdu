/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons"
import { Button } from "../shadcn/ui/button"
import { useSearchParams } from "react-router-dom"
import { useEffect, useRef } from "react"
import ReactSelect from "react-select"
import { cn } from "@/lib/utils"
import { rowsPerPageOptions } from "."

interface IPaginationProps {
  pageCount: number
  className?: string
  currentPageKey?: string
  pageSizeKey?: string
}

interface IPaginationParams {
  currentPage?: string
  pageSize?: string
}

export function TableFooter({
  className,
  pageCount,
  currentPageKey = "page",
  pageSizeKey = "page_size",
}: IPaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const current = searchParams.get(currentPageKey) || "1"
  const pageS = searchParams.get(pageSizeKey) || rowsPerPageOptions[0].value
  const jumpInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev),
      [currentPageKey]: current,
      [pageSizeKey]: pageS,
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function setParams({ currentPage, pageSize }: IPaginationParams) {
    setSearchParams((prev) => {
      const prevObj = Object.fromEntries(prev)
      return {
        ...prevObj,
        [currentPageKey]: currentPage || prevObj[currentPageKey],
        [pageSizeKey]: pageSize || prevObj[pageSizeKey],
      }
    })
  }

  const handleJump = () => {
    const jumpVal = jumpInputRef.current?.value
    if (jumpVal && +jumpVal > 0 && !(+jumpVal > pageCount)) {
      setParams({ currentPage: jumpVal })
    }
  }

  const handleJumpOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const jumpVal = jumpInputRef.current?.value
    if (jumpVal && +jumpVal > 0 && !(+jumpVal > pageCount) && e.key === "Enter") {
      setParams({ currentPage: jumpVal })
    }
  }

  return (
    <div className={cn("flex items-center justify-between px-2", className)}>
      <div className="flex items-center justify-between space-x-6 lg:space-x-8 w-full flex-wrap">
        <div className="flex items-center space-x-2">
          <p className="font-medium">Rows per page</p>
          <ReactSelect
            options={rowsPerPageOptions}
            defaultValue={rowsPerPageOptions.find((item) => item.value === pageS)}
            onChange={(opt) => {
              setParams({
                currentPage: "1",
                pageSize: opt?.value || "10",
              })
            }}
            className="text-[clamp(1.2rem,_1.2vw,_1.4rem)] [&>div]:bg-white"
          />
        </div>

        {pageCount > 1 && (
          <>
            <main className="flex items-center gap-4">
              <p className="font-medium">
                Page {current} of {pageCount}
              </p>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size={"sm"}
                  className="h-12 w-12"
                  onClick={() => {
                    setParams({ currentPage: "1" })
                  }}
                  disabled={current < "2"}
                >
                  <span className="sr-only">Go to first page</span>
                  <DoubleArrowLeftIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="h-12 w-12 p-0"
                  onClick={() => {
                    setParams({ currentPage: String(+current - 1) })
                  }}
                  disabled={current < "2"}
                >
                  <span className="sr-only">Go to previous page</span>
                  <ChevronLeftIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="h-12 w-12 p-0"
                  onClick={() => {
                    setParams({ currentPage: String(+current + 1) })
                  }}
                  disabled={+current >= pageCount}
                >
                  <span className="sr-only">Go to next page</span>
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size={"sm"}
                  className="h-12 w-12"
                  onClick={() => {
                    setParams({ currentPage: pageCount.toString() })
                  }}
                  disabled={+current >= pageCount}
                >
                  <span className="sr-only">Go to last page</span>
                  <DoubleArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </main>

            <aside className="flex items-center gap-4">
              <Button onClick={handleJump} className="font-medium h-[3.8rem] rounded-[4px]">
                Jump to page
              </Button>
              <input
                onKeyDown={handleJumpOnKeyDown}
                ref={jumpInputRef}
                type="number"
                className="w-[5rem] border shadow-sm rounded focus:shadow border-input outline-none p-2 text-[clamp(1.2rem,_1.2vw,_1.4rem)]"
              />
            </aside>
          </>
        )}
      </div>
    </div>
  )
}
