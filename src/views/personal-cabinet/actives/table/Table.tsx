import Filters from "@/views/personal-cabinet/actives/table/Filters.tsx"
import { CustomTable } from "@/components/table/CustomTable.tsx"
import { useGetQuery } from "@/services/CommonRequests.ts"
import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { useGetSearchParams } from "@/lib/utils"

interface IData {
  count: number
  page_size: number
  current_page: number
  total_pages: number
  results: IDataListItem[]
}

const Table = () => {
  const params = useGetSearchParams()

  const { data, isFetching } = useGetQuery<IData>("new-list", [params], undefined, { params })

  const dataList: IDataListItem[] = useMemo(
    () =>
      data?.results?.map((item, i) => ({
        id: item?.id ?? i,
        title: item?.title ?? "",
        date: item?.date ?? "",
      })) ?? [],
    [data],
  )

  return (
    <div className="mt-10 mb-40">
      <div className="bg-white rounded-3xl p-10 max-[450px]:p-5">
        <div className="flex justify-between mb-5 max-lg:flex-col gap-7">
          <div>
            <h3 className="text-[2.2rem] font-medium">Faollar jadvali</h3>
            <p className="text-[1.5rem] text-grey64">
              So’ngi yangilangan vaqt:
              <span className="text-black"> 4/12/2024</span>
            </p>
          </div>

          <div>
            <Filters />
          </div>
        </div>

        <CustomTable data={dataList} columns={columns} pageCount={data?.total_pages} loading={isFetching} />
      </div>
    </div>
  )
}
export default Table

export interface IDataListItem {
  id: number
  title: string
  date: string
}

const columns: ColumnDef<IDataListItem>[] = [
  {
    accessorKey: "id",
    header: "№",
  },
  {
    accessorKey: "title",
    header: "O’QUVCHILAR",
  },
  {
    accessorKey: "date",
    header: "BALLAR",
  },
  {
    accessorKey: "date",
    header: "YULDUZLAR",
  },
  {
    accessorKey: "date",
    header: "BOSHLASH SANASI",
  },
]
