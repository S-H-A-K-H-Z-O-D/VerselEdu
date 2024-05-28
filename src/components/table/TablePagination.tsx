import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons"
import { Button } from "../shadcn/ui/button"
import { useSearchParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import ReactSelect from "react-select"
import { cn } from "@/lib/utils"
import { rowsPerPageOptions } from "."

interface IPaginationProps {
  className?: string
  pageCount: number
}

interface IPaginationParams {
  currentPage: number
  pageSize: number
}

export function TablePagination({ className, pageCount }: IPaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Number(searchParams.get("currentPage")) || 1
  const pageSize = Number(searchParams.get("pageSize")) || rowsPerPageOptions[0].value
  const [params, setParams] = useState<IPaginationParams>({ currentPage, pageSize })
  const jumpInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev),
      currentPage: params.currentPage.toString(),
      pageSize: params.pageSize.toString(),
    }))
  }, [params, setSearchParams])

  const handleJump = () => {
    const jumpVal = jumpInputRef.current?.value
    if (jumpVal && +jumpVal > 0 && !(+jumpVal > pageCount)) {
      setParams((prev) => ({ ...prev, currentPage: +jumpVal }))
    }
  }

  const handleJumpOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const jumpVal = jumpInputRef.current?.value
    if (jumpVal && +jumpVal > 0 && !(+jumpVal > pageCount) && e.key === "Enter") {
      setParams((prev) => ({ ...prev, currentPage: +jumpVal }))
    }
  }

  return (
    <div className={cn("flex items-center justify-between px-2", className)}>
      <div className="flex items-center justify-between space-x-6 lg:space-x-8 w-full flex-wrap">
        <div className="flex items-center space-x-2">
          <p className="font-medium">Rows per page</p>
          <ReactSelect
            options={rowsPerPageOptions}
            value={rowsPerPageOptions.find((item) => item.value === params.pageSize)}
            onChange={(opt) => {
              setParams((prev) => ({
                ...prev,
                currentPage: 1,
                pageSize: opt?.value ?? 10,
              }))
            }}
            className="text-[1.4rem]"
          />
        </div>

        {pageCount > 1 && (
          <>
            <main className="flex items-center gap-4">
              <p className="font-medium">
                Page {currentPage} of {pageCount}
              </p>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size={"sm"}
                  className="h-12 w-12"
                  onClick={() => {
                    setParams((prev) => ({ ...prev, currentPage: 1 }))
                  }}
                  disabled={currentPage < 2}
                >
                  <span className="sr-only">Go to first page</span>
                  <DoubleArrowLeftIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="h-12 w-12 p-0"
                  onClick={() => {
                    setParams((prev) => ({ ...prev, currentPage: prev.currentPage - 1 }))
                  }}
                  disabled={currentPage < 2}
                >
                  <span className="sr-only">Go to previous page</span>
                  <ChevronLeftIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="h-12 w-12 p-0"
                  onClick={() => {
                    setParams((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }))
                  }}
                  disabled={currentPage >= pageCount}
                >
                  <span className="sr-only">Go to next page</span>
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size={"sm"}
                  className="h-12 w-12"
                  onClick={() => {
                    setParams((prev) => ({ ...prev, currentPage: pageCount }))
                  }}
                  disabled={currentPage >= pageCount}
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
                className="w-[5rem] border shadow-sm rounded focus:shadow border-input outline-none p-2 text-[1.4rem]"
              />
            </aside>
          </>
        )}
      </div>
    </div>
  )
}
