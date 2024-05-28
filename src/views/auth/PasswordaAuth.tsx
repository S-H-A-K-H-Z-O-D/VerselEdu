import { LeftArrowIcon } from "@/components/Icons"
import InputField from "@/components/form/InputField"
import { Button } from "@/components/shadcn/ui/button"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

interface IForm {
  pwd: string
  repeat_pwd: string
}

export default function PasswordAuth() {
  const navigate = useNavigate()
  const methods = useForm<IForm>()
  const { handleSubmit } = methods
  const onSubmit = handleSubmit((vals) => {
    console.log(vals)
  })
  return (
    <form onSubmit={onSubmit}>
      <main className="flex flex-col gap-[0.4rem] mb-[4rem]">
        <div className="mb-[0.4rem] flex justify-between gap-8 items-center text-[1.4rem] text-grey64 font-semibold">
          <button
            onClick={() => {
              navigate(-1)
            }}
            className="flex items-center gap-[0.8rem]"
          >
            <LeftArrowIcon />
            Orqaga
          </button>
          <p>Qadam - 4/4</p>
        </div>
        <h2 className="text-black text-[3.2rem] font-semibold">Shaxsiy parolingizni kiriting</h2>
      </main>

      <main className="flex flex-col gap-[2.4rem]">
        <InputField password methods={methods} name="pwd" label="Shaxsiy parolingiz" placeholder="..." required />
        <InputField
          password
          methods={methods}
          name="repeat_pwd"
          label="Parolni takrorlang"
          placeholder="..."
          required
        />
      </main>

      <Button className="w-full mt-[4.4rem]" type="submit">
        Davom etish
      </Button>
    </form>
  )
}
