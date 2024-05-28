import { FacebookIcon, InstagramIcon, LogoIcon, TelegramIcon } from "@/components/Icons.tsx"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="container h-[70px] flex items-center justify-between text-[1.5rem] max-[520px]:hidden">
      <div className="flex min-[830px]:items-center max-[830px]:flex-col max-[830px]:gap-3">
        <div className="mr-8 min-[830px]:border-r-2 pr-8">
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>
        <div>
          <p>Toshkent shahar, Muminov ko’chasi, 4A</p>
        </div>
      </div>

      <div className="flex items-center max-[830px]:flex-col max-[830px]:gap-3">
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
      </div>
    </div>
  )
}
export default Footer
