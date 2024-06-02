import { devices_history } from "@/constants";

export function DevicesHeader() {
  return (
    <div className="px-[clamp(1.6rem,_1.6vw,_2.4rem)] flex flex-col md:flex-row justify-between md:items-center gap-2">
      <div className="w-full md:w-1/2">
        <h2 className="font-semibold text-[clamp(1.8rem,_1.8vw,_2.4rem)]">Qurilmalarim</h2>
        <p className="text-xl">
          Siz bir vaqning o'zida 3ta qurilmadan ta&apos;lim olishingiz mumkin. Ilovalarni uchinchi qurilmada
          faollashtirishingiz uchun avval mavjud ikkita qurilmalardan birini o&apos;chirishingiz lozim
        </p>
      </div>
      <p className="w-fit px-4 py-2 text-[clamp(1.3rem,_1.5vw,_1.4rem)] bg-orange-100 text-orange-600 rounded-full">{devices_history.length} ta qurilmadan kirish imkoni mavjud</p>
    </div>
  )
}
