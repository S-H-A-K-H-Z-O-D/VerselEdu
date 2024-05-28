import { plan_detail } from "@/constants"
import { BlueVideoPlayIcon, CheckIcon } from "@/components/Icons.tsx"

const PlanDetail = () => {
  return (
    <div className="grid grid-cols-3 gap-3 max-[1200px]:grid-cols-2 max-[600px]:grid-cols-1">
      {plan_detail.map((item, index) => (
        <button key={index} className={"flex flex-col justify-between rounded-[20px] bg-white p-5"}>
          <div className="relative overflow-hidden rounded-2xl">
            <img className={"w-full object-cover rounded-2xl"} src={item.img} alt="course" />

            <div
              className="absolute bg-opacityDark70 text-[1.3rem] text-white bottom-7
            left-7 rounded-xl rounded-br-2xl px-3 py-2 border border-borderGrey"
            >
              21 daq.
            </div>
            <div className="absolute text-[1.3rem] text-white top-7 left-7 bg-white rounded-full">
              {!item.isPlaying && <CheckIcon />}
              {item.isPlaying && <BlueVideoPlayIcon />}
            </div>

            {item.isPlaying && (
              <div className="flex justify-between items-center w-full absolute bottom-0">
                <div className="w-[60%] h-[5px] bg-deepBlue rounded-bl-2xl"></div>
                <div className="w-[40%] h-[5px] bg-opacityWhite rounded-br-2xl"></div>
              </div>
            )}
          </div>

          <p className="text-[1.6rem] font-medium mt-2 text-start">{item.title}</p>
        </button>
      ))}
    </div>
  )
}
export default PlanDetail
