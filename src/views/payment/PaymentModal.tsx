import { Dialog, DialogContent, DialogTrigger } from "@/components/shadcn/ui/dialog"
import { useEffect, useRef } from "react"
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
          <svg xmlns="http://www.w3.org/2000/svg" width="136" height="136" fill="none" viewBox="0 0 136 136">
            <g filter="url(#filter0_di_1546_18912)">
              <rect width="88" height="88" x="24" y="8" fill="#00CD69" rx="16" shapeRendering="crispEdges"></rect>
              <rect
                width="86"
                height="86"
                x="25"
                y="9"
                stroke="#fff"
                strokeOpacity="0.24"
                strokeWidth="2"
                rx="15"
                shapeRendering="crispEdges"
              ></rect>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M68 68.666c9.205 0 16.667-7.462 16.667-16.666 0-9.205-7.462-16.667-16.667-16.667-9.205 0-16.667 7.462-16.667 16.667 0 9.204 7.462 16.666 16.667 16.666zm7.653-20.899a1.25 1.25 0 00-1.973-1.535l-6.678 8.587a.417.417 0 01-.608.054l-4.225-3.802a1.25 1.25 0 00-1.672 1.858l4.225 3.802a2.917 2.917 0 004.253-.377l6.678-8.587z"
                clipRule="evenodd"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_di_1546_18912"
                width="136"
                height="136"
                x="0"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="16"></feOffset>
                <feGaussianBlur stdDeviation="12"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.803922 0 0 0 0 0.411765 0 0 0 0.25 0"></feColorMatrix>
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1546_18912"></feBlend>
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1546_18912" result="shape"></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="12"></feGaussianBlur>
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"></feColorMatrix>
                <feBlend in2="shape" result="effect2_innerShadow_1546_18912"></feBlend>
              </filter>
            </defs>
          </svg>
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
