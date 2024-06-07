/* eslint-disable react-hooks/rules-of-hooks */
import { EditIcon, TrashIcon } from "@/components/Icons"
import { Button } from "@/components/shadcn/ui/button"
import { useDateFormatter } from "@/lib/utils"

export default function ExperienceInnerCard({ data, setData, setEdit, setOpen }: any) {
  const onDelete = (id: string) => {
    const filteredData = data.filter((c: any) => c.id !== id)
    setData(filteredData)
  }

  const onEdit = (item: any) => {
    setOpen(true)
    setEdit(item)
  }

  return data.map((item: any, idx: number) => {
    const date = useDateFormatter(item.date)
    return (
      <div
        key={idx}
        className="w-full p-4 flex flex-col lg:flex-row justify-between items-center gap-4 border border-borderGrey rounded-3xl shadow-lg"
      >
        <div className="w-full flex flex-col gap-4">
          <h2 className="font-semibold">{item.position}</h2>
          <p className="text-2xl text-blue-600">{item.name}</p>
          <p className="w-fit mt-6 text-base px-6 py-2 bg-bgGreyLight text-black rounded-full">{date}</p>
        </div>
        <div className="max-sm:w-full h-full flex flex-col max-lg:flex-row-reverse justify-between items-end max-lg:border-t">
          <Button variant="ghost" className="w-fit" onClick={() => onDelete(item.id)}>
            <TrashIcon />
          </Button>
          <Button variant="ghost" className="flex flex-nowrap gap-4" onClick={() => onEdit(item)}>
            Tahrirlash
            <EditIcon />
          </Button>
        </div>
      </div>
    )
  })
}
