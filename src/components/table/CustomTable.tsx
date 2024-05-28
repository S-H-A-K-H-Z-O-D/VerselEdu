import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/shadcn/ui/table"
import { TablePagination } from "./TablePagination"
import { cn } from "@/lib/utils"
import { Skeleton } from "../shadcn/ui/skeleton"
import emptyImg from "@/assets/images/home/EmptyState.png"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  pageCount?: number
  className?: string
  loading?: boolean
}

export function CustomTable<TData, TValue>({
  columns,
  data,
  pageCount = 0,
  className,
  loading = false,
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
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ?
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          : !loading && (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <div className="flex flex-col justify-center items-center py-32">
                    <img src={emptyImg as string} alt="#" />
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

      <TablePagination className="mt-8" pageCount={pageCount} />
    </div>
  )
}
