import { LeftArrowIcon } from "@/components/Icons"
import InputField from "@/components/form/InputField"
import { Button } from "@/components/shadcn/ui/button"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

interface IForm {
  name: string
  surname: string
}

export default function NameAuth() {
  const navigate = useNavigate()
  const methods = useForm<IForm>()
  const { handleSubmit } = methods
  const onSubmit = handleSubmit((vals) => {
    console.log(vals)
  })
  return (
    <form onSubmit={onSubmit}>
      <main className="flex flex-col gap-[0.4rem] mb-[clamp(2.5rem,_2.5vw,_4rem)]">
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
          <p>Qadam - 3/4</p>
        </div>
        <h2 className="text-black text-[clamp(2.4rem,_2.6vw,_3.2rem)] font-semibold">Ism familiyangizni kiriting</h2>
      </main>

      <main className="flex flex-col gap-[2.4rem]">
        <InputField methods={methods} name="name" label="Ismingizni kiriting" placeholder="Ismingiz" required />
        <InputField
          methods={methods}
          name="surname"
          label="Familiyangizni kiriting"
          placeholder="Familiyangiz"
          required
        />
      </main>

      <Button className="w-full mt-[4.4rem]" type="submit">
        Davom etish
      </Button>
    </form>
  )
}
