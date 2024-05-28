import activeStar from "@/assets/images/home/Group 7.png"
import { Button } from "@/components/shadcn/ui/button.tsx"
import { useNavigate } from "react-router-dom"
import Courses from "@/views/personal-cabinet/home/header/Courses.tsx"

const Header = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="">
        <h1 className="text-[4rem] leading-[6.5rem] text-center font-medium max-md:text-[2.5rem] max-md:leading-[3.2rem]">
          O’rganishni shu Sahifadan Boshlang
        </h1>
        <p className="text-center text-[1.8rem] text-darkBlue max-md:text-[1.5rem]">
          O'zingiz uchun qulay vaqtda o'rganing
        </p>
      </div>
      <div className="mt-12 flex justify-between gap-[3rem] items-start max-lg:flex-col-reverse">
        <Courses />

        <div className="w-[25%] bg-white rounded-3xl p-10 max-lg:w-full max-lg:flex justify-between max-sm:flex-col max-[450px]:p-5">
          <div className="flex">
            <div className="pr-5">
              <h3 className="text-[2.2rem] font-semibold max-md:text-[1.8rem]">Haftalik faollar jadvali</h3>
              <p className="text-[1.5rem] text-darkBlue max-md:text-[1.3rem]">
                Siz bilan birga o’qiyotgan o’quvchilar reytingini ko’rishingiz mumkin.
              </p>
            </div>
            <div>
              <div>
                <img
                  src={activeStar as string}
                  alt="Kurslarim"
                  className="w-[30rem] max-[1250px]:w-auto max-[1150px]:hidden"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-5 max-lg:w-[20rem] max-sm:w-full">
            <Button
              className="bg-whitePurple w-full text-deepBlue hover:text-white max-md:text-[1.5rem] max-md:h-[42px]"
              onClick={() => navigate("/actives")}
            >
              Kurslarni ko'rish
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header
