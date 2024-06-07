import { DocumentIcon, VideoIcon } from "@/components/Icons.tsx"
import { CardProps } from "@/types"
import { Link } from "react-router-dom"

const Card = ({ img, title, video, test, price, neww = false }: CardProps) => {
  return (
    <Link to={`/payment`} className="flex flex-col justify-between overflow-hidden rounded-[20px] bg-bgGreyLight p-2">
      <div className="relative">
        <img className={"w-full object-cover rounded-[20px]"} src={img} alt="course" />
        {neww && (
          <div className="absolute bg-red text-white bottom-0 right-0 rounded-tl-2xl rounded-br-2xl px-4 py-3 text-[clamp(1.2rem,_1.2vw,_1.4rem)]">
            Yangi kurs
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 p-4 min-h-[130px] justify-between">
        <div>
          <p className="text-[clamp(1.6rem,_1.6vw,_2rem)] font-medium">{title}</p>
          <div className="flex items-center gap-8 mt-2">
            <div className="flex items-center gap-2">
              <VideoIcon />
              <p className="text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
                <span className="font-medium pr-2">{video}</span>
                Video
              </p>
            </div>
            <div className="flex items-center gap-2">
              <DocumentIcon />
              <p className="text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
                <span className="font-medium pr-2">{test}</span>
                Test
              </p>
            </div>
          </div>
        </div>
        <p className="blue-color text-[clamp(1.8rem,_1.8vw,_2.4rem)] font-medium text-deepBlue">
          {price} <sup className="text-[1rem]">so'm</sup>
        </p>
      </div>
    </Link>
  )
}
export default Card
