import { Link } from "react-router-dom"
import { ArrowLeftIcon } from "@/components/Icons.tsx"

const BackBtn = ({ to = "/" }: { to?: string }) => {
  return (
    <div className="flex">
      <Link
        to={to}
        className="flex items-center h-[5.4rem] shadow-md px-10 bg-white hover:bg-whitePurple text-black mb-10 rounded-2xl [&_svg_path]:stroke-greyTxt"
      >
        <ArrowLeftIcon />
        <span className="ml-1 font-medium text-[clamp(1.5rem,_1.5vw,_1.8rem)]">Ortga</span>
      </Link>
    </div>
  )
}
export default BackBtn
