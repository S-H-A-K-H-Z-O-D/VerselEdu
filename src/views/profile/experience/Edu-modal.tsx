import DatePickerField from "@/components/form/DatePickerField"
import InputField from "@/components/form/InputField"
import SelectField from "@/components/form/SelectField"
import { Button } from "@/components/shadcn/ui/button"
import { DialogClose } from "@/components/shadcn/ui/dialog"
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from "uuid"

interface IForm {
  position: string
  name: string
  type: string
  link: string
  date: string
}

const selectOptions = [
  { value: "free", label: "Free" },
  { value: "premium", label: "Premium" },
  { value: "Vip", label: "Vip" },
]

export function EduModal({ state, setState, edit, setEdit }: any) {
  const methods = useForm<IForm>()

  const { handleSubmit, control, reset } = methods
  const onSubmit = handleSubmit((vals) => {
    if (edit) {
      const filteredData = state.filter((c: any) => c.id !== edit.id)
      setState([...filteredData, { id: uuidv4(), ...vals }])
      setEdit()
      return
    }
    reset()
    setState((prev: any) => [...prev, { id: uuidv4(), ...vals }])
  })

  return (
    <div>
      <div className="p-6 max-sm:p-4 border-b border-borderGrey">
        <h1 className="text-4xl font-medium text-black">Ta&apos;lim qo&apos;shish</h1>
      </div>

      <form onSubmit={onSubmit}>
        <main className="p-6 max-sm:p-4 flex flex-col gap-[2.4rem]">
          <InputField
            className="text-black"
            methods={methods}
            name="position"
            defaultValue={edit?.position}
            label="Yo'nalishingizni kiriting"
            placeholder="Yo'nalishingiz"
            required
          />
          <InputField
            className="text-black"
            methods={methods}
            name="name"
            defaultValue={edit?.name}
            label="O'quv muassasini nomini kiriting"
            placeholder="O'quv muassasasi"
            required
          />
          <SelectField
            className="text-black"
            control={control}
            defaultValue={edit?.type}
            name="type"
            options={selectOptions}
            label="Ta'lim turini kiriting"
            required
          />
          <InputField
            className="text-black"
            methods={methods}
            name="link"
            defaultValue={edit?.link}
            label="Muassasaning web sahifasini kirting"
            placeholder="https://"
            required
          />
          <DatePickerField
            className="text-black"
            control={control}
            name="date"
            placeholderText="oo/kk/yy"
            label="Muddatini kiriting"
            required
          />
        </main>

        <div className="flex gap-4">
          <DialogClose className="w-full h-[5.4rem] mt-[4.4rem] px-[2.4rem] py-[1.6rem] bg-[#E5E6FF] text-blue-500 rounded-3xl hover:bg-[#d6d7fb] transition duration-300">
            Yopish
          </DialogClose>
          <Button className="w-full mt-[4.4rem]" type="submit">
            Qo&apos;shish
          </Button>
        </div>
      </form>
    </div>
  )
}
