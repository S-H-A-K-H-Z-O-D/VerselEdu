import BackBtn from "@/components/BackBtn.tsx"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/shadcn/ui/accordion.tsx"
import InputField from "@/components/form/InputField.tsx"
import { useForm } from "react-hook-form"
import { Button } from "@/components/shadcn/ui/button.tsx"
import PaymentTypes from "@/views/payment/PaymentTypes.tsx"

interface IForm {
  promocode: string
}

const Payment = () => {
  const methods = useForm<IForm>()
  const { handleSubmit } = methods

  const onSubmit = (values: IForm) => {
    console.log(values)
  }

  return (
    <section className="flex gap-10 min-[520px]:mb-24 max-lg:flex-col">
      <div className="w-[20%]">
        <BackBtn />
      </div>

      <div className="max-w-[1100px] bg-white rounded-3xl flex max-md:flex-col">
        <div className="max-w-[800px] p-10 md:border-r-2 max-md:border-b-2 max-[450px]:p-5">
          <h3 className="text-[2.2rem] font-medium ">
            3D smax – Modelling (Boshlovchilar uchun) kursini boshlash uchun to’lovni amalga oshiring
          </h3>

          <div className="bg-bgGreyLight rounded-3xl p-7 my-10">
            <ul className="font-medium space-y-5 border-b-2 pb-7 mb-7">
              <li className="flex justify-between">
                <p className="text-grey64">Kurs muallifi</p>
                <p className="text-end">Abdusattor Abdurahimov</p>
              </li>
              <li className="flex justify-between">
                <p className="text-grey64">Kurs narxi</p>
                <p className="text-end">9.550.000 so‘m</p>
              </li>
              <li className="flex justify-between">
                <p className="text-grey64">Promokod</p>
                <p className="text-end">0 so‘m</p>
              </li>
            </ul>
            <div className="flex justify-between font-semibold text-[1.8rem]">
              <p className="text-grey64">Umumiy narxi</p>
              <p className="text-deepBlue text-end">9.550.000 so‘m</p>
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem className="border-none" value={"45"}>
              <AccordionTrigger className="relative data-[state=open]:text-black pb-5 pr-7 flex justify-start gap-5 hover:no-underline">
                <p className="text-[1.8rem]">Promokod ishlatish</p>
              </AccordionTrigger>
              <AccordionContent className="space-y-5">
                <form className="relative max-w-[400px]" onSubmit={handleSubmit(onSubmit)}>
                  <InputField methods={methods} name="promocode" placeholder="454JND56T" required />
                  <Button
                    variant="ghost"
                    type="submit"
                    className="text-deepBlue absolute top-0 right-0 hover:bg-transparent"
                  >
                    Qo'llash
                  </Button>
                </form>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="p-10">
          <h3 className="text-[2.2rem] font-medium mb-10">To’lov turini tanlang</h3>

          <PaymentTypes />
        </div>
      </div>
    </section>
  )
}
export default Payment
