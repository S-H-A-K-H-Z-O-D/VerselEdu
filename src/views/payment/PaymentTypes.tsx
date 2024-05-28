import { paymentTypes_data } from "@/constants"
import InputField from "@/components/form/InputField.tsx"
import { useForm } from "react-hook-form"
import { Button } from "@/components/shadcn/ui/button.tsx"
import { Link } from "react-router-dom"
import { useState } from "react"
import SelectField from "@/components/form/SelectField.tsx"
import PhoneInputField from "@/components/form/PhoneInputField.tsx"

interface IForm {
  card_number: string
  card_date: string
  month?: string
  phone_number?: string
}

const paymentPeriodOptions = [
  { value: 3, label: "3 oy" },
  { value: 6, label: "6 oy" },
  { value: 12, label: "12 oy" },
]

const PaymentTypes = () => {
  const methods = useForm<IForm>()
  const { handleSubmit, control } = methods
  const [type, setType] = useState(0)

  const onSubmit = (values: IForm) => {
    console.log(values)
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {paymentTypes_data.map((item, index) => (
          <div key={index} className={`${type === item.id && "border-deepBlue"} border-2 rounded-2xl`}>
            <Type title={item.title} img={item.img} id={item.id} setType={setType} />
          </div>
        ))}
      </div>

      {/*Form     //start*/}
      <form className="mt-16" onSubmit={handleSubmit(onSubmit)}>
        {type === 4 && (
          <SelectField
            control={control}
            name="month"
            options={paymentPeriodOptions}
            label="Nechaga bo'lib to'lamoqchisiz?"
            required
          />
        )}

        {/*Input for Card number     //start*/}
        <div className="relative mt-5 ">
          <InputField
            label="Karta raqamini kiriting"
            type="number"
            methods={methods}
            name="card_number"
            placeholder="1234 4567 7891 1005"
            className="[&_input]:font-light"
            required
          />
          <InputField
            methods={methods}
            name="card_date"
            className="min-[950px]:absolute top-14 right-1 max-w-[100px] [&_input]:font-light min-[950px]:[&_input]:border-none
           [&_input]:outline-none [&_input]:h-[5rem] max-[950px]:mt-5"
            placeholder="10/25"
          />
        </div>
        {/*Input for Card number     //finish*/}

        {type === 4 && (
          <PhoneInputField
            control={control}
            name={"phone_number"}
            className="mt-5 selectHidden "
            label="Telefon raqamingiz"
            required
          />
        )}

        <Button className="w-full mt-16" type="submit">
          To'lov qilish
        </Button>
        <p className="text-greyTxt mt-7">
          Tugmani bosish orqali siz foydalanish shartlariga{" "}
          <Link to="#" className="text-deepBlue">
            roziligingizni tasdiqlaysiz
          </Link>
        </p>
      </form>
      {/*Form     //finish*/}
    </div>
  )
}
export default PaymentTypes

function Type({ title, img, id, setType }: { title: string; img: any; id: number; setType: (id: number) => void }) {
  return (
    <div onClick={() => setType(id)} className="flex flex-col justify-between p-5 min-h-[120px] cursor-pointer">
      <p>{title}</p>
      {img && (
        <div className="mt-auto">
          <img src={img} alt="payment type images" />
        </div>
      )}
    </div>
  )
}
