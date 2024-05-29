import { ArrowDownIcon, BellIcon, CancelIcon, LogoIcon, MoonIcon, TrophyIcon } from "@/components/Icons.tsx"
import { Link } from "react-router-dom"
import Courses from "@/views/layout/navbar/Courses.tsx"
import { useState } from "react"
import { AnimateCard } from "@/components/animate-card.tsx"
import { MobileNavbar } from "@/views/layout/navbar/MobileNavbar.tsx"
import ProfileMenu from "@/components/profile-mode.tsx"

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="container h-[70px] flex items-center justify-between text-[1.5rem]">
      <div className="flex items-center">
        <div className="mr-16">
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>

        <button
          className="max-lg:hidden h-[42px] border border-deepBlue text-[1.5rem] text-deepBlue rounded-2xl flex justify-center py-2 px-8 items-center hover:shadow-lg"
          onClick={() => setIsClicked(!isClicked)}
        >
          <p className="mr-3">Kurslarimiz</p>
          {isClicked && <CancelIcon />}
          {!isClicked && <ArrowDownIcon />}
        </button>

        <div
          className={`max-lg:hidden absolute bg-opacityDark top-[70px] h-[100vh] w-full left-0 px-28 
                    max-[1600px]:px-10 transition-all duration-100 ${!isClicked && "hidden"} pt-10`}
        >
          <div className={`transition-all duration-300 delay-500 `}>
            <AnimateCard>
              <Courses setIsClicked={setIsClicked} />
            </AnimateCard>
          </div>
        </div>
      </div>

      <div className="max-lg:hidden">
        <div className="flex items-center gap-12">
          <Link to="#">Asosiy sahifa</Link>
          <Link to="#">Kontakt</Link>
          <div className="flex items-center justify-center bg-bgGreyLight px-4 py-3 rounded-xl text-deepBlue font-semibold">
            <TrophyIcon />
            <p className="ml-4 mr-2">0</p>
            <span>ball</span>
          </div>
          <button>
            <MoonIcon />
          </button>
          <button>
            <BellIcon />
          </button>

          <ProfileMenu />
        </div>
      </div>

      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </div>
  )
}
export default Navbar
