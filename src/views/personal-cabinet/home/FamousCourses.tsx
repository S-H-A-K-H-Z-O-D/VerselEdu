import { Link } from "react-router-dom"
import { ArrowRightIcon } from "@/components/Icons.tsx"
import Card from "@/components/Card.tsx"
import { FamousCourses_data } from "@/constants"

const FamousCourses = () => {
  return (
    <div className="flex justify-between gap-[4px] mt-[3rem]">
      <div className="w-[75%] bg-white rounded-3xl p-10 mr-10 max-lg:w-full max-lg:mr-0 max-[450px]:p-5">
        <div className="flex items-center justify-between max-[450px]:flex-col ">
          <h3 className="text-[2.2rem] font-medium max-[450px]:text-[2rem] max-[450px]:my-5">Mashxur kurslar</h3>
          <Link
            to="/courses"
            className="flex items-center justify-center text-[1.5rem] gap-4 text-deepBlue max-[450px]:text-[1.3rem]"
          >
            Barchasini ko'rish <ArrowRightIcon />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-10 py-10 max-md:grid-cols-2 max-sm:grid-cols-1">
          {FamousCourses_data.map((item) => (
            <div key={item.title}>
              <Card img={item.img} title={item.title} video={item.video} test={item.test} price={item.price} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[25%] max-lg:hidden"></div>
    </div>
  )
}
export default FamousCourses
