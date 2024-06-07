import { LeftArrowIcon } from "@/components/Icons"
import InputField from "@/components/form/InputField"
import { Button } from "@/components/shadcn/ui/button"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

interface IForm {
  code: string
}

export default function ConfirmationPhone() {
  const navigate = useNavigate()
  const methods = useForm<IForm>()
  const { handleSubmit } = methods
  const onSubmit = handleSubmit((vals) => {
    console.log(vals)
  })
  return (
    <form onSubmit={onSubmit}>
      <main className="flex flex-col gap-[0.4rem] mb-[4rem]">
        <div className="mb-[0.4rem] flex justify-between gap-8 items-center text-[clamp(1.2rem,_1.2vw,_1.4rem)] text-grey64 font-semibold">
          <button
            onClick={() => {
              navigate(-1)
            }}
            className="flex items-center gap-[0.8rem]"
          >
            <LeftArrowIcon />
            Orqaga
          </button>
          <p>Qadam - 2/4</p>
        </div>
        <h2 className="text-black text-[clamp(2.4rem,_2.6vw,_3.2rem)] font-semibold">Ro‘yhatdan o‘tish</h2>
        <p className="text-darkGray70 text-[clamp(1.2rem,_1.2vw,_1.4rem)]">Tasdiqlash kodi ushbu raqamga yuboriladi:</p>
        <p>+998 99 123 45 67</p>
      </main>

      <InputField
        methods={methods}
        name="code"
        label="Tasdiqlash kodi"
        placeholder="Tasdiqlash kodi"
        password
        required
      />
      <p className="text-darkBlue leading-[1.4] mt-[0.8rem]">(00:59) kodni qayta yuborish uchun</p>
      <Button className="w-full mt-[4.4rem]" type="submit">
        Davom etish
      </Button>
    </form>
  )
}
