import { DocumentIcon, VideoIcon } from "@/components/Icons.tsx"
import { CardProps } from "@/types"
import { Link } from "react-router-dom"

const Card = ({ img, title, video, test, price, neww = false }: CardProps) => {
  return (
    <Link
      to={`/courses/plan`}
      className="flex flex-col justify-between overflow-hidden rounded-[20px] bg-bgGreyLight p-2"
    >
      <div className="relative">
        <img className={"w-full object-cover rounded-[20px]"} src={img} alt="course" />
        {neww && (
          <div className="absolute bg-red text-white bottom-0 right-0 rounded-tl-2xl rounded-br-2xl px-4 py-3">
            Yangi kurs
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 p-4 min-h-[130px] justify-between">
        <div>
          <p className="text-[1.8rem] font-medium max-[450px]:text-[1.5rem]">{title}</p>
          <div className="flex items-center gap-8 mt-2">
            <div className="flex items-center gap-2">
              <VideoIcon />
              <p className="text-[1.5rem] max-[450px]:text-[1.3rem]">
                <span className="font-medium pr-2">{video}</span>
                Video
              </p>
            </div>
            <div className="flex items-center gap-2">
              <DocumentIcon />
              <p className="text-[1.5rem] max-[450px]:text-[1.3rem]">
                <span className="font-medium pr-2">{test}</span>
                Test
              </p>
            </div>
          </div>
        </div>
        <p className="blue-color text-2xl font-medium text-deepBlue max-[450px]:text-[1.8rem] text-[2rem]">
          {price} <sup className="text-[1rem]">so'm</sup>
        </p>
      </div>
    </Link>
  )
}
export default Card
