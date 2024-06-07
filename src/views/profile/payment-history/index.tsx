import { Button } from "@/components/shadcn/ui/button.tsx"
import Table from "@/views/profile/payment-history/Table.tsx"
import cards from "@/assets/images/profile/cards.svg"

const PaymentHistory = () => {
  return (
    <section>
      <h2 className="font-medium text-[clamp(1.8rem,_1.8vw,_2.4rem)] border-b-2 border-borderGrey pb-8 text-center">
        To’lov tarixi
      </h2>
      <>
        {"" && (
          <div className="flex flex-col items-center justify-center py-40">
            <img src={cards as string} alt="Kurslarim" className="-mb-7" />
            <p className="text-[clamp(1.5rem,_1.5vw,_1.8rem)] font-medium text-center">
              Sizda hech qadnay to‘lovlar bo‘lmagan
            </p>
            <p className="text-[clamp(1.4rem,_1.4vw,_1.6rem)] text-greyTxt max-w-[400px] text-center">
              To‘lovlar jadvali ma‘lum bir kursga to‘lov qilganingizdan so‘ng ochiladi
            </p>
            <Button className="bg-deepBlue h-[4.5rem] px-20 mt-20 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
              Kurslarni ko'rish
            </Button>
          </div>
        )}

        {"d" && <Table />}
      </>
    </section>
  )
}
export default PaymentHistory
