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
              <div className="max-[1150px]:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="144" height="168" fill="none" viewBox="0 0 144 168">
                  <g filter="url(#filter0_f_1733_20479)" opacity="0.4">
                    <path
                      fill="#FFD900"
                      fillRule="evenodd"
                      d="M81.757 42.515c-.66-6.555-9.011-8.81-12.836-3.467l-31.48 43.98c-2.91 4.067-.881 9.813 3.926 11.111l17.907 4.837 2.646 26.216c.66 6.556 9.011 8.81 12.836 3.467l31.479-43.98c2.912-4.067.882-9.813-3.925-11.111l-17.907-4.836-2.646-26.217z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="#F7C100"
                      d="M43.618 88.847c-1.628-.444-1.785-2.71-.234-3.377l12.446-5.352c1.123-.483 2.385.294 2.47 1.522l.618 8.907c.085 1.228-1.056 2.175-2.236 1.854l-13.064-3.554z"
                    ></path>
                    <path
                      fill="#FFEF8F"
                      d="M100.657 77.984c1.629.444 1.786 2.71.234 3.377l-12.445 5.352c-1.124.483-2.385-.294-2.47-1.522l-.618-8.907c-.086-1.228 1.056-2.175 2.236-1.854l13.063 3.554z"
                    ></path>
                  </g>
                  <path
                    fill="#FFD900"
                    fillRule="evenodd"
                    d="M81.757 26.515c-.661-6.555-9.011-8.81-12.836-3.467l-31.48 43.98c-2.91 4.067-.881 9.813 3.925 11.111l17.908 4.837 2.645 26.216c.662 6.556 9.012 8.81 12.837 3.467l31.479-43.98c2.912-4.067.882-9.813-3.925-11.111l-17.907-4.836-2.646-26.217z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#F7C100"
                    d="M43.618 72.847c-1.628-.444-1.785-2.71-.234-3.377l12.446-5.352c1.123-.483 2.385.294 2.47 1.522l.618 8.907c.085 1.228-1.056 2.175-2.236 1.854l-13.064-3.554z"
                  ></path>
                  <path
                    fill="#FFEF8F"
                    d="M100.657 61.984c1.629.444 1.786 2.71.234 3.377l-12.445 5.352c-1.124.483-2.385-.294-2.47-1.522l-.618-8.907c-.086-1.228 1.056-2.175 2.236-1.854l13.063 3.554z"
                  ></path>
                  <defs>
                    <filter
                      id="filter0_f_1733_20479"
                      width="199"
                      height="200"
                      x="-27"
                      y="-17"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur result="effect1_foregroundBlur_1733_20479" stdDeviation="18"></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>
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
