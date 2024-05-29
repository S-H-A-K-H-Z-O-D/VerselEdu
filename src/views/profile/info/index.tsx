import { Button } from "@/components/shadcn/ui/button.tsx"
import ProfileImg from "@/views/profile/info/ProfileImg.tsx"
import { useForm } from "react-hook-form"
import ProfileForm from "@/views/profile/info/Form.tsx"
import DangerZone from "@/views/profile/info/DangerZone.tsx"

interface IForm {
  name: string
  surname: string
  age: number
  sex: string
  country: string
  region: string
  email?: string
  description?: string
}

const ProfileInfo = () => {
  const methods = useForm<IForm>()
  const { handleSubmit, watch } = methods

  const onSubmit = (values: IForm) => {
    console.log(values)
  }

  const { name, surname, age, sex, country, region } = watch()
  const isFormValid = Boolean(name && surname && age && sex && country && region)

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between max-w-6xl mx-auto max-xl:px-5">
          <h2 className="font-semibold text-[clamp(1.8rem,_1.8vw,_2.4rem)]">Akkountingiz ma’lumotlari</h2>
          <Button
            disabled={!isFormValid}
            className={`border ${!isFormValid && "bg-bgGreyLight text-grey64"}`}
            type="submit"
          >
            Saqlash
          </Button>
        </div>

        <ProfileImg />
        <ProfileForm methods={methods} />
        <DangerZone />
      </form>
    </section>
  )
}
export default ProfileInfo
