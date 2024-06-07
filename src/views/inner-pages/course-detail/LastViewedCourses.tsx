import { courses_inProgress_data } from "@/constants"
import CardInProgress from "@/views/personal-cabinet/home/header/CardInProgress.tsx"

const LastViewedCourses = () => {
  return (
    <section className="bg-white rounded-3xl p-10 max-lg:w-full max-[450px]:p-5 mt-10">
      <h3 className="text-[clamp(1.8rem,_1.8vw,_2.4rem)] font-medium">Kurslarim</h3>

      <div className="grid grid-cols-3 gap-[1rem] mt-10 max-[1220px]:grid-cols-2 max-[900px]:grid-cols-1">
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
    </section>
  )
}
export default LastViewedCourses
