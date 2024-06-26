import { plan_detail } from "@/constants"
import { RightVideoArrowIcon } from "@/components/Icons.tsx"
import { Link } from "react-router-dom"

const Videos = () => {
  return (
    <div className="space-y-3 max-h-[500px] overflow-auto pr-7">
      {plan_detail.map((item, index) => (
        <Link
          to="/courses/detail"
          key={index}
          className={`flex rounded-xl py-2 items-center w-full ${item.isPlaying ? "bg-whitePurple" : ""}`}
        >
          {!item.isPlaying && (
            <p className="text-[clamp(1.2rem,_1.2vw,_1.4rem)] font-medium mt-2 text-start line-clamp-2 px-4">
              {index + 1}
            </p>
          )}
          {item.isPlaying && (
            <div className="px-3">
              <RightVideoArrowIcon />
            </div>
          )}

          <div className="relative overflow-hidden rounded-2xl">
            <div className="min-w-[10rem] overflow-hidden mr-2">
              <img className={"shrink min-w-[10rem] h-[6rem] object-cover rounded-xl"} src={item.img} alt="course" />
            </div>

            <div
              className="absolute bg-opacityDark70 text-[clamp(1.2rem,_1.2vw,_1.4rem)] text-white bottom-1
            left-[] rounded-xl rounded-br-2xl px-2 py-1 scale-[0.7] font-semibold"
            >
              21 daq.
            </div>
          </div>

          <div className="w-[200px] max-lg:w-auto max-md:w-[200px]">
            <p className="text-[clamp(1.2rem,_1.2vw,_1.4rem)] font-medium text-start line-clamp-2">{item.title}</p>
            <p className="text-[clamp(1rem,_1vw,_1.2rem)] font-[400] text-start line-clamp-1 text-grey64">
              UX/UI kurslari
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default Videos
