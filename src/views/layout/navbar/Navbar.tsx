import { ArrowDownIcon, BellIcon, CancelIcon, LogoIcon, MoonIcon, SunIcon, TrophyIcon } from "@/components/Icons.tsx"
import { Link } from "react-router-dom"
import Courses from "@/views/layout/navbar/Courses.tsx"
import { useEffect, useState } from "react"
import { AnimateCard } from "@/components/animate-card.tsx"
import { MobileNavbar } from "@/views/layout/navbar/MobileNavbar.tsx"
import ProfileMenu from "@/components/profile-mode.tsx"
import { setDarkMode, setLightMode } from "@/lib/utils.ts"

const Navbar = () => {
  const isLight = Boolean(localStorage.getItem("dark"))
  const [isClicked, setIsClicked] = useState(false)
  const [isDark, setIsDark] = useState(isLight)

  useEffect(() => {
    if (isDark) {
      setDarkMode()
    } else setLightMode()
  }, [])

  const toggleDark = () => {
    if (isDark) {
      setLightMode()
      localStorage.removeItem("dark")
    } else {
      setDarkMode()
      localStorage.setItem("dark", "darkMode")
    }

    setIsDark(!isDark)
  }

  return (
    <div className="container h-[70px] flex items-center justify-between text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
      <div className="flex items-center">
        <div className="mr-16">
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>

        <button
          className="max-lg:hidden h-[42px] border border-deepBlue text-[clamp(1.4rem,_1.4vw,_1.6rem)] text-deepBlue rounded-2xl flex justify-center py-2 px-8 items-center hover:shadow-lg"
          onClick={() => setIsClicked(!isClicked)}
        >
          <p className="mr-3 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">Kurslarimiz</p>
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
        <div className="flex items-center gap-12 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
          <Link to="/">Asosiy sahifa</Link>
          <Link to="/actives">Faollar</Link>
          {/*<Link to="#">Kontakt</Link>*/}
          <Link
            to="/actives"
            className="flex items-center justify-center bg-bgGreyLight px-4 py-3 rounded-xl text-deepBlue font-semibold"
          >
            <TrophyIcon />
            <p className="ml-4 mr-2">0</p>
            <span>ball</span>
          </Link>
          <button onClick={toggleDark}>
            {!isDark && <MoonIcon />}
            {isDark && <SunIcon />}
          </button>
          <Link to="/notifications" className="[&_svg_path]:fill-greyTxt">
            <BellIcon />
          </Link>

          <ProfileMenu />
        </div>
      </div>

      <div className="lg:hidden">
        <MobileNavbar isDark={isDark} toggleDark={toggleDark} />
      </div>
    </div>
  )
}
export default Navbar
