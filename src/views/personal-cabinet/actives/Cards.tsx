import { actives_data } from "@/constants"
import BackBtn from "@/components/BackBtn.tsx"

const Cards = () => {
  return (
    <>
      <div className="flex items-center gap-10">
        <BackBtn />
        <h3 className="font-semibold text-[clamp(1.8rem,_1.8vw,_2.4rem)] mb-10">Haftalik faollar jadvali</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {actives_data.map((item, i) => (
          <div key={i} className="flex flex-col">
            <img src={item.img} alt="#" className="rounded-t-[2rem]" />
            <div className="bg-white flex flex-col items-center gap-5 py-20 rounded-b-[2rem] max-lg:py-10 max-[450px]:py-5 max-[450px]:gap-3">
              <p className="font-semibold text-[clamp(2.4rem,_2.4vw,_4rem)]">{item.title}</p>
              <p className="text-darkBlue text-[clamp(1.4rem,_1.4vw,_1.6rem)]">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Cards
