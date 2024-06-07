import { FamousCourses_data } from "@/constants"
import Card from "@/components/Card.tsx"
import Categories from "@/views/personal-cabinet/courses/Categories.tsx"
import Filters from "@/views/personal-cabinet/courses/Filters.tsx"
import BackBtn from "@/components/BackBtn.tsx"

const Courses = () => {
  return (
    <div className="min-[520px]:mb-24">
      <BackBtn />

      <div className="mt-12 flex justify-between gap-[3rem] items-start max-[800px]:flex-col">
        {/*Categories     //start*/}
        <div className="w-[25%] bg-white rounded-3xl pb-10 min-w-[250px] max-[800px]:w-full max-[450px]:pb-5">
          <Categories />
        </div>
        {/*Categories    //finish*/}

        <div className="w-[75%] bg-white rounded-3xl mr-10 max-[800px]:w-full">
          {/*Courses filter     //start*/}
          <div className="flex min-[1200px]:items-center justify-between border-b-2 border-borderGrey p-10 gap-7 max-[1200px]:flex-col max-[450px]:p-5">
            <h3 className="text-[clamp(1.8rem,_1.8vw,_2.4rem)] font-medium">Barcha kurslar</h3>
            <Filters />
          </div>
          {/*Courses filter    //finish*/}

          {/*Courses     //start*/}
          <div className="grid grid-cols-3 gap-10 p-10 max-[1200px]:grid-cols-2 max-sm:grid-cols-1 max-[450px]:p-5">
            {FamousCourses_data.map((item, index) => (
              <div key={index}>
                <Card img={item.img} title={item.title} video={item.video} test={item.test} price={item.price} />
              </div>
            ))}
            {FamousCourses_data.map((item, index) => (
              <div key={index}>
                <Card img={item.img} title={item.title} video={item.video} test={item.test} price={item.price} />
              </div>
            ))}
          </div>
          {/*Courses     //finish*/}
        </div>
      </div>
    </div>
  )
}
export default Courses
