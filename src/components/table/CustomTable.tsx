import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/shadcn/ui/table"
import { cn } from "@/lib/utils"
import { Skeleton } from "../shadcn/ui/skeleton"
import { TableFooter } from "./TableFooter"
import img from "@/assets/images/home/EmptyState.svg"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  pageCount?: number
  className?: string
  loading?: boolean
  currentPageKey?: string
  pageSizeKey?: string
}

export function CustomTable<TData, TValue>({
  columns,
  data,
  pageCount = 0,
  className,
  loading = false,
  currentPageKey,
  pageSizeKey,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className={cn("bg-white py-[2.4rem]", className)}>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup, i) => (
            <TableRow key={i}>
              {headerGroup.headers.map((header, i) => {
                return (
                  <TableHead key={i}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ?
            table.getRowModel().rows.map((row, i) => (
              <TableRow key={i} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell, i) => (
                  <TableCell key={i}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          : !loading && (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <div className="flex flex-col justify-center items-center py-24">
                    <img src={img} alt="!" />
                    <p className="font-medium">Jadval bo’sh ekan</p>
                  </div>
                </TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
      {loading &&
        Array(10)
          .fill(null)
          .map((_, idx) => {
            return <Skeleton key={idx} className="w-full h-[4rem] my-1" />
          })}

      <TableFooter className="mt-8" pageCount={pageCount} currentPageKey={currentPageKey} pageSizeKey={pageSizeKey} />
    </div>
  )
}
