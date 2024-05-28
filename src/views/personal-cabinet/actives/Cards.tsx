import { actives_data } from "@/constants"
import BackBtn from "@/components/BackBtn.tsx"

const cards = (img: any, title: string, name: string) => {
  return (
    <div className="flex flex-col">
      <img src={img} alt="#" className="rounded-t-[2rem]" />
      <div className="bg-white flex flex-col items-center gap-5 py-20 rounded-b-[2rem] max-lg:py-10 max-[450px]:py-5 max-[450px]:gap-3">
        <p className="lg:text-5xl font-semibold text-3xl">{title}</p>
        <p className="text-darkBlue">{name}</p>
      </div>
    </div>
  )
}

const Cards = () => {
  return (
    <>
      <BackBtn />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {actives_data.map((item) => cards(item.img, item.title, item.name))}
      </div>
    </>
  )
}
export default Cards
