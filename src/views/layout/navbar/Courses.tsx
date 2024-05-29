import { useNavigate } from "react-router-dom"
import { ArrowRightIcon } from "@/components/Icons.tsx"
import { ModalCourses_data } from "@/constants"
import Card from "./Card.tsx"
import img from "@/assets/images/courseModalPic.png"
import { CoursesModalProps } from "@/types"

const Courses = ({ setIsClicked }: CoursesModalProps) => {
  const categories = [
    { name: "Barcha kurslar", count: 86 },
    { name: "Frontend", count: 2 },
    { name: "Mobil", count: 12 },
    { name: "Backend", count: 4 },
    { name: "Full Stack", count: 34 },
    { name: "Dizayn", count: 25 },
  ]

  const navigate = useNavigate()

  const onMove = () => {
    navigate("/courses")
    if (setIsClicked) {
      setIsClicked(false)
    }
  }

  return (
    <div className="bg-white w-full container px-0 rounded-3xl">
      <div className="flex items-center justify-between border-b-2 p-10">
        <h3 className="text-[2.2rem] font-medium">Kurslar to'plami</h3>
        <button className="flex items-center justify-center text-[1.5rem] gap-4 text-deepBlue" onClick={onMove}>
          Kurslar sahifaga o’tish <ArrowRightIcon />
        </button>
      </div>

      <div className="mt-12 flex justify-between gap-[3rem] items-start px-10">
        <div className="w-[25%] bg-white pb-10 border-r-2 h-[60vh] overflow-auto">
          {categories.map((item) => (
            <div key={item.count} className="flex items-center justify-between py-5 px-7">
              <h6 className="text-[1.6rem] font-medium">{item.name}</h6>
              <p className="bg-bgGreyLight w-14 h-14 text-darkBlue rounded-full flex items-center justify-center">
                {item.count}
              </p>
            </div>
          ))}
        </div>

        <div className="w-[75%] bg-white rounded-3xl mr-10">
          <div className="grid grid-cols-3 gap-10 max-2xl:grid-cols-2">
            {ModalCourses_data.map((item, index) => (
              <div key={index}>
                <Card img={img} title={item.title} video={item.video} test={item.test} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Courses
