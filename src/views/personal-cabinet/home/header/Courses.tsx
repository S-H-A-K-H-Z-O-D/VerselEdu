import courseCard from "@/assets/images/home/EmptyState.png"
import { Button } from "@/components/shadcn/ui/button.tsx"
import CardInProgress from "@/views/personal-cabinet/home/header/CardInProgress.tsx"
import { courses_inProgress_data } from "@/constants"
import { useState } from "react"

const Courses = () => {
  const [courses, setCourses] = useState(false)
  return (
    <>
      <div className="w-[75%] bg-white rounded-3xl p-10 max-lg:w-full max-[450px]:p-5">
        <h3 className="text-[2.2rem] font-medium max-[450px]:text-[2rem]">Kurslarim</h3>

        {courses && (
          <div className="grid grid-cols-2 gap-[1rem] mt-10 max-[1220px]:grid-cols-1">
            {courses_inProgress_data.map((item) => (
              <div key={item.title}>
                <CardInProgress
                  img={item.img}
                  title={item.title}
                  video={item.video}
                  test={item.test}
                  progress={item.progress}
                  play={item.play}
                />
              </div>
            ))}
          </div>
        )}
        {!courses && (
          <div className="flex flex-col items-center justify-center pb-10">
            <img src={courseCard as string} alt="Kurslarim" className="-mb-7" />
            <p className="text-[1.6rem]">O'zingiz uchun mos kursni tanlang</p>
            <Button className="bg-deepBlue px-10 mt-8 text-[1.6rem]" onClick={() => setCourses(true)}>
              Kurslarni ko'rish
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
export default Courses
