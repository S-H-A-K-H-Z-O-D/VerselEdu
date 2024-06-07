import { Button } from "@/components/shadcn/ui/button.tsx"
import CardInProgress from "@/views/personal-cabinet/home/header/CardInProgress.tsx"
import { courses_inProgress_data } from "@/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import img from "@/assets/images/home/EmptyState.svg"

const Courses = () => {
  const [courses, setCourses] = useState(false)
  return (
    <>
      <div className="w-[75%] bg-white rounded-3xl p-10 max-lg:w-full max-[450px]:p-5">
        <h3 className="text-[clamp(1.8rem,_1.8vw,_2.4rem)] font-medium">Kurslarim</h3>

        {courses && (
          <div className="grid grid-cols-2 gap-[1rem] mt-10 max-[1220px]:grid-cols-1">
            {courses_inProgress_data.map((item) => (
              <Link to="/courses/detail" key={item.title}>
                <CardInProgress
                  img={item.img}
                  title={item.title}
                  video={item.video}
                  test={item.test}
                  progress={item.progress}
                  play={item.play}
                />
              </Link>
            ))}
          </div>
        )}
        {!courses && (
          <div className="flex flex-col items-center justify-center pb-10">
            <img src={img} alt="!" />
            <p className="text-[clamp(1.4rem,_1.4vw,_1.6rem)]">O'zingiz uchun mos kursni tanlang</p>
            <Button
              className="bg-deepBlue px-10 mt-8 text-[clamp(1.4rem,_1.4vw,_1.6rem)]"
              onClick={() => setCourses(true)}
            >
              Kurslarni ko'rish
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
export default Courses
