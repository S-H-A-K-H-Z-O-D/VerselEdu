import { DocumentIcon, VideoIcon } from "@/components/Icons.tsx"
import { CardProps } from "@/types"
import { Progress } from "@/components/shadcn/ui/progress.tsx"

const Card = ({ img, title, video, test, neww = false }: CardProps) => {
  return (
    <div className={"flex flex-col justify-between overflow-hidden rounded-[20px] bg-white p-5"}>
      <div className="max-[900px]:flex max-[600px]:flex-col">
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
            <p className="text-[clamp(1.5rem,_1.5vw,_1.8rem)] font-medium">{title}</p>
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
        </div>

        <div className="max-[900px]:hidden max-[600px]:block">
          <Progress value={45} className="bg-bgGreyLight" />
        </div>
      </div>

      <div className="min-[900px]:hidden mt-10 max-[600px]:hidden">
        <Progress value={45} className="bg-bgGreyLight" />
      </div>
    </div>
  )
}
export default Card
