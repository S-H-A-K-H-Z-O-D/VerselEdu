import { Dialog, DialogContent, DialogTrigger } from "@/components/shadcn/ui/dialog"
import { useEffect, useRef } from "react"
import imgDone from "@/assets/images/payment/paymentDone.png"
import { Button } from "@/components/shadcn/ui/button.tsx"
import { Link } from "react-router-dom"

const PaymentModal = ({ isPaid, setIsPaid }: { isPaid: boolean; setIsPaid: (isPaid: boolean) => void }) => {
  const modalRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    isPaid && modalRef?.current?.click()
  }, [isPaid])

  return (
    <Dialog onOpenChange={() => setIsPaid(false)}>
      <DialogTrigger asChild>
        <button ref={modalRef}>{null}</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-3xl">
        <div className="flex flex-col items-center p-12">
          <img src={imgDone} alt="payment is done" />
          <h4 className="text-[clamp(1.8rem,_1.8vw,_2.2rem)] text-center pb-10 -mt-5 font-medium">
            Kurs to’lovi muvaffaqiyatli yakunlandi
          </h4>
          <Button className="h-[4.5rem] rounded-2xl">
            <Link to={"/courses"} className="text-[1.6rem] px-10">
              Kursni ko'rish
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default PaymentModal
