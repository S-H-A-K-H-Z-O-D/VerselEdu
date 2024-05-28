import { DocumentIcon, VideoIcon, VideoPlayIcon } from "@/components/Icons.tsx"
import { Progress } from "@/components/shadcn/ui/progress.tsx"
import { ProgressCardProps } from "@/types"

const CardInProgress = ({ img, title, video, test, progress }: ProgressCardProps) => {
  return (
    <div className={"overflow-hidden rounded-[20px] bg-bgGreyLight p-2 "}>
      <div className="flex max-sm:flex-col">
        <div className="min-w-[300px] flex flex-wrap p-4 max-[1360px]:min-w-[250px] max-[450px]:p-1 max-sm:min-w-[200px]">
          <img className={"w-full h-[180px] shrink rounded-[20px] max-sm:h-auto"} src={img} alt="course" />
        </div>

        <div className="flex flex-col gap-2 p-4 justify-between">
          <div className="max-w-[270px]">
            <p className="text-[1.8rem] font-medium max-[450px]:text-[1.5rem]">{title}</p>
            <div className="flex items-center gap-x-8 mt-2 flex-wrap">
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
          <p className="flex items-center gap-2 pb-4 max-[450px]:text-[1.3rem]">
            <VideoPlayIcon />
            Davom etish: 4.4 Amaliyot
          </p>
        </div>
      </div>

      <div className="p-4">
        <Progress value={progress} />
      </div>
    </div>
  )
}
export default CardInProgress
