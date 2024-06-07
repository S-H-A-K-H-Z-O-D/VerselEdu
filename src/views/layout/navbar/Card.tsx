import { DocumentIcon, VideoIcon } from "@/components/Icons.tsx"
import { ProgressCardProps } from "@/types"

const Card = ({ img, title, video, test }: ProgressCardProps) => {
  return (
    <div className={"overflow-hidden rounded-xl bg-bgGreyLight"}>
      <div className="flex">
        <div className="min-w-[150px] flex flex-wrap p-3">
          <img className={"w-full h-[120px] shrink rounded-xl"} src={img} alt="course" />
        </div>

        <div className="flex flex-col gap-2 p-4 justify-between">
          <div className="max-w-[270px]">
            <p className="text-[clamp(1.4rem,_1.4vw,_1.6rem)] font-medium">{title}</p>
            <div className="flex items-center gap-x-5 mt-2 flex-wrap">
              <div className="flex items-center gap-2">
                <i className="[&_svg_path]:fill-lightPurple">
                  <VideoIcon />
                </i>
                <p className="text-[clamp(1.2rem,_1.2vw,_1.4rem)]">
                  <span className="font-medium pr-2">{video}</span>
                  Video
                </p>
              </div>
              <div className="flex items-center gap-2">
                <i className="[&_svg_path]:fill-lightPurple">
                  <DocumentIcon />
                </i>
                <p className="text-[clamp(1.2rem,_1.2vw,_1.4rem)]">
                  <span className="font-medium pr-2">{test}</span>
                  Test
                </p>
              </div>
            </div>
          </div>
          <p className="blue-color text-2xl text-deepBlue font-semibold text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
            {500.0} <sup className="text-[1rem] font-medium">so'm</sup>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Card
