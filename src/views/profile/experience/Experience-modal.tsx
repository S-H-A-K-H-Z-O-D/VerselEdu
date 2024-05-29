"use client"

import DatePickerField from "@/components/form/DatePickerField"
import InputField from "@/components/form/InputField"
import { Button } from "@/components/shadcn/ui/button"
import { DialogClose } from "@/components/shadcn/ui/dialog"
import { useForm } from "react-hook-form"

interface IForm {
  position: string
  name: string
  type: string
  link: string
  skills: string
  date: string
}

export function ExperienceModal() {
  const methods = useForm<IForm>()

  const { handleSubmit, control } = methods
  const onSubmit = handleSubmit((vals) => {
    console.log(vals)
  })

  return (
    <div>
      <div className="p-6 max-sm:p-4">
        <h1 className="text-4xl font-medium">Ta&apos;lim qo&apos;shish</h1>
      </div>
      <hr className="w-full h-2 mt-4" />
      <form onSubmit={onSubmit}>
        <main className="p-6 max-sm:p-4 flex flex-col gap-[2.4rem]">
          <InputField
            methods={methods}
            name="position"
            label="Lavozimingizni kiriting"
            placeholder="Lavozimingiz"
            required
          />
          <InputField
            methods={methods}
            name="name"
            label="Kompaniya nomini kiriting"
            placeholder="Kompaniya nomi"
            required
          />
          <InputField
            methods={methods}
            name="link"
            label="Kompaniya web sahifasini kirting"
            placeholder="https://"
            required
          />
          <InputField
            methods={methods}
            name="skills"
            label="Bilim va ko'nikmalarini kirting"
            placeholder="Ko'nikmalaringiz"
            required
          />
          <DatePickerField control={control} name="date" placeholder="oo/kk/yy" label="Muddatini kiriting" required />
        </main>

        <div className="flex gap-4">
          <DialogClose className="w-full">
            <Button variant={"secondary"} className="w-full mt-[4.4rem]" type="button">
              Yopish
            </Button>
          </DialogClose>
          <Button className="w-full mt-[4.4rem]" type="submit">
            Qo&apos;shish
          </Button>
        </div>
      </form>
    </div>
  )
}
