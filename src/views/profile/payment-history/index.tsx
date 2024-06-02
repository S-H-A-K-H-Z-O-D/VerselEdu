import { Button } from "@/components/shadcn/ui/button.tsx"
import Table from "@/views/profile/payment-history/Table.tsx"

const PaymentHistory = () => {
  return (
    <section>
      <h2 className="font-medium text-[clamp(1.8rem,_1.8vw,_2.4rem)] border-b-2 pb-8 text-center">To’lov tarixi</h2>
      <>
        {"" && (
          <div className="flex flex-col items-center justify-center py-40">
            <svg xmlns="http://www.w3.org/2000/svg" width="250" height="170" fill="none" viewBox="0 0 250 170">
              <path fill="#fff" d="M0 0H250V200H0z"></path>
              <path
                fill="#F3F7FF"
                fillRule="evenodd"
                d="M63 134h91c.515 0 1.017-.056 1.5-.161.483.105.985.161 1.5.161h52a7 7 0 100-14h-6a7 7 0 110-14h19a7 7 0 100-14h-22a7 7 0 100-14h-64a7 7 0 100-14H79a7 7 0 100 14H39a7 7 0 100 14h25a7 7 0 110 14H24a7 7 0 100 14h39a7 7 0 100 14zm163 0a7 7 0 100-14 7 7 0 000 14z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M69.953 70.517l83.024-13.291a3 3 0 013.437 2.488l.001.01 8.122 51.832a2.999 2.999 0 01-2.489 3.426l-83.025 13.292a3 3 0 01-3.437-2.488l-.001-.01-8.122-51.832a3 3 0 012.49-3.427z"
                clipRule="evenodd"
              ></path>
              <path
                stroke="#1F64E7"
                strokeLinecap="round"
                strokeWidth="2.5"
                d="M83.345 127.423l-3.183.525c-2.187.36-4.24-1.192-4.587-3.467L68.05 75.039c-.346-2.275 1.145-4.412 3.332-4.773l80.176-13.214c2.187-.36 4.24 1.192 4.587 3.468l.807 5.3m.571 3.756l.477 3.133"
              ></path>
              <path
                fill="#E8F0FE"
                fillRule="evenodd"
                d="M73.977 72.791l75.76-11.83a3 3 0 013.425 2.487l7.36 45.819a3 3 0 01-2.499 3.44l-75.76 11.831a3 3 0 01-3.425-2.488l-7.36-45.819a3 3 0 012.499-3.44z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#fff"
                stroke="#1F64E7"
                strokeWidth="2.5"
                d="M170.75 77.25h-78.5a4 4 0 00-4 4v48.5a4 4 0 004 4h78.5a4 4 0 004-4v-48.5a4 4 0 00-4-4z"
              ></path>
              <path fill="#E8F0FE" d="M173.5 89h-84v14h84V89z"></path>
              <path
                stroke="#1F64E7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M103.289 89h-7.196m78.078 0h-65.84 65.84zm-6 13h-78.84 78.84zm-43.109 19H96.755h28.307z"
              ></path>
            </svg>
            <p className="text-[1.8rem] font-medium text-center">Sizda hech qadnay to‘lovlar bo‘lmagan</p>
            <p className="text-[1.6rem] text-greyTxt max-w-[400px] text-center">
              To‘lovlar jadvali ma‘lum bir kursga to‘lov qilganingizdan so‘ng ochiladi
            </p>
            <Button className="bg-deepBlue h-[4.5rem] px-20 mt-20 text-[1.6rem]">Kurslarni ko'rish</Button>
          </div>
        )}

        {"d" && <Table />}
      </>
    </section>
  )
}
export default PaymentHistory
