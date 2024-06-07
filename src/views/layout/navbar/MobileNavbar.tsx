import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/shadcn/ui/sheet.tsx"
import { Link } from "react-router-dom"
import {
  BellIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  TelegramIcon,
  TrophyIcon,
} from "@/components/Icons.tsx"

export function MobileNavbar({ toggleDark, isDark }: { toggleDark: any; isDark: boolean }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <MenuIcon width={35} height={35} />
        </button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center gap-7 flex-col-reverse p-2 pt-16 justify-center">
            <div className="flex flex-col items-center gap-5 mt-10 font-medium text-black w-full text-[clamp(1.5rem,_1.5vw,_1.8rem)]">
              <SheetClose asChild>
                <Link to="/">Asosiy sayt</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/courses">Kurslarimiz</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/profile/info">Profil ma‘lumotlar</Link>
              </SheetClose>{" "}
              <SheetClose asChild>
                <Link to="/">Asosiy sahifa</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/actives" className="">
                  Faollar
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/auth/phone" className="flex justify-center gap-3 pt-3 border-t-2 border-borderGrey w-full">
                  Chiqish
                </Link>
              </SheetClose>
            </div>

            <div className="flex items-center justify-evenly w-full">
              <SheetClose asChild>
                <Link to="notifications" className="[&_svg_path]:fill-greyTxt">
                  <BellIcon />
                </Link>
              </SheetClose>

              <div className="flex items-center justify-center bg-bgGreyLight px-4 py-3 rounded-xl text-deepBlue font-semibold">
                <TrophyIcon />
                <p className="ml-4 mr-2">0</p>
                <span>ball</span>
              </div>

              <button onClick={toggleDark}>
                {!isDark && <MoonIcon />}
                {isDark && <SunIcon />}
              </button>
            </div>

            <div className="flex items-center justify-center bg-bgGreyLight p-1 rounded-xl text-deepBlue font-semibold w-full">
              <div className="bg-whitePurple rounded-xl px-3 py-2 w-full text-center">
                <p className="">Palonkasov Palonkas</p>
              </div>
            </div>
          </div>
          <div className="flex items-center max-[830px]:flex-col max-[830px]:gap-3 min-[520px]:hidden">
            <div className="flex items-center gap-10 min-[830px]:border-r-2 min-[830px]:pr-8 min-[830px]:mr-8">
              <Link to="#">
                <TelegramIcon />
              </Link>
              <Link to="#">
                <InstagramIcon />
              </Link>
              <Link to="#">
                <FacebookIcon />
              </Link>
            </div>
            <a href="tel:+998932844567" className="font-semibold text-[clamp(1.8rem,_1.8vw,_2rem)]">
              +998 99 123 45 67
            </a>
            <p className="text-[clamp(1.5rem,_1.5vw,_1.8rem)]">Toshkent shahar, Muminov ko’chasi, 4A</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
