import PhoneInputField from "@/components/form/PhoneInputField"
import { Button } from "@/components/shadcn/ui/button"
import { useForm } from "react-hook-form"

interface IForm {
  phone: string
}

export default function PhoneAuth() {
  const { control, handleSubmit } = useForm<IForm>()
  const onSubmit = handleSubmit((vals) => {
    console.log(vals)
  })
  return (
    <form onSubmit={onSubmit}>
      <p className="text-[clamp(1.2rem,_1.2vw,_1.4rem)] text-grey64 font-semibold text-end mb-[0.4rem]">Qadam - 1/4</p>
      <h2 className="text-black text-[clamp(2.4rem,_2.6vw,_3.2rem)] font-semibold mb-[clamp(2.5rem,_2.5vw,_4rem)]">
        Ro‘yhatdan o‘tish
      </h2>
      <PhoneInputField control={control} name="phone" label="Telefon Raqam" required />
      <Button className="w-full mt-[4.4rem]" type="submit">
        Davom etish
      </Button>
    </form>
  )
}
