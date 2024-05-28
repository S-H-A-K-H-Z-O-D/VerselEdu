import { Sheet, SheetContent, SheetTrigger } from "@/components/shadcn/ui/sheet.tsx"
import { Link } from "react-router-dom"
import {
  BellIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  MoonIcon,
  TelegramIcon,
  TrophyIcon,
} from "@/components/Icons.tsx"

export function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <MenuIcon width={35} height={35} />
        </button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-start gap-7 flex-col-reverse p-2 pt-16">
            <div className="flex flex-col gap-5 w-full">
              <Link to="#">Asosiy sayt</Link>
              <Link to="#">Kurslarimiz</Link>
              <Link to="#">Profil ma‘lumotlar</Link>
              <Link to="#">Asosiy sahifa</Link>
              <Link to="#">Kontakt</Link>
              <Link to="#" className="border-t-2 pt-4">
                Chiqish
              </Link>
            </div>

            <div className="flex items-center justify-between ">
              <button className="mr-5">
                <BellIcon />
              </button>
              <button className="mr-16">
                <MoonIcon />
              </button>
              <div className="flex items-center justify-center bg-bgGreyLight px-4 py-3 rounded-xl text-deepBlue font-semibold">
                <TrophyIcon />
                <p className="ml-4 mr-2">0</p>
                <span>ball</span>
              </div>
            </div>

            <div className="flex items-center justify-center bg-bgGreyLight p-1 rounded-xl text-deepBlue font-semibold">
              <div className="bg-whitePurple rounded-xl px-3 py-2">
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
            <a href="tel:+998932844567" className="font-semibold">
              +998 99 123 45 67
            </a>
            <p>Toshkent shahar, Muminov ko’chasi, 4A</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
