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
            <p className="text-[1.5rem] font-medium">{title}</p>
            <div className="flex items-center gap-x-5 mt-2 flex-wrap">
              <div className="flex items-center gap-2">
                <VideoIcon isBlue={true} />
                <p className="text-[1.3rem]">
                  <span className="font-medium pr-2">{video}</span>
                  Video
                </p>
              </div>
              <div className="flex items-center gap-2">
                <DocumentIcon isBlue={true} />
                <p className="text-[1.3rem]">
                  <span className="font-medium pr-2">{test}</span>
                  Test
                </p>
              </div>
            </div>
          </div>
          <p className="blue-color text-2xl text-deepBlue font-semibold text-[1.6rem]">
            {500.0} <sup className="text-[1rem] font-medium">so'm</sup>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Card
