import { Button } from "@/components/shadcn/ui/button.tsx"
import { useNavigate } from "react-router-dom"
import Courses from "@/views/personal-cabinet/home/header/Courses.tsx"
import img from "@/assets/images/home/Group 7.svg"

const Header = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="">
        <h1 className="text-[clamp(2.8rem,_2.8vw,_4.8rem)] leading-[clamp(3.5rem,_3.5vw,_6.5rem)] text-center font-medium">
          O’rganishni shu Sahifadan Boshlang
        </h1>
        <p className="text-center text-[clamp(1.6rem,_1.6vw,_2rem)] text-darkBlue">
          O'zingiz uchun qulay vaqtda o'rganing
        </p>
      </div>
      <div className="mt-12 flex justify-between gap-[3rem] items-start max-lg:flex-col-reverse">
        <Courses />

        <div className="w-[25%] bg-white rounded-3xl p-10 max-lg:w-full max-lg:flex justify-between max-sm:flex-col max-[450px]:p-5">
          <div className="flex">
            <div className="pr-5">
              <h3 className="font-semibold text-[clamp(1.8rem,_1.8vw,_2.4rem)]">Haftalik faollar jadvali</h3>
              <p className="text-[clamp(1.4rem,_1.4vw,_1.6rem)] text-darkBlue">
                Siz bilan birga o’qiyotgan o’quvchilar reytingini ko’rishingiz mumkin.
              </p>
            </div>
            <div>
              <div>
                <img
                  src={img as string}
                  alt="Kurslarim"
                  className="w-[30rem] max-[1250px]:w-auto max-[1150px]:hidden"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-5 max-lg:w-[20rem] max-sm:w-full">
            <Button
              className="bg-whitePurple w-full text-deepBlue hover:text-primary-foreground text-[clamp(1.4rem,_1.4vw,_1.6rem)] max-md:h-[42px]"
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
