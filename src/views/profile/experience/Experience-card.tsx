import { PlusIcon } from "@/components/Icons"
import { Button } from "@/components/shadcn/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/shadcn/ui/dialog"
import { ComponentType, Dispatch, SetStateAction } from "react"
import { EduModal } from "./Edu-modal"
import { ExperienceModal } from "./Experience-modal"
import ExperienceInnerCard from "./Experience-inner-card"

interface PropsType {
  edu?: boolean
  experience?: boolean
  title: string
  addButtonTitle: string
  Icon: ComponentType
  emptyDescriptionTitle: string
  emptyDescriptionBody: string
  state?: any
  setState?: Dispatch<SetStateAction<any>>
}

export function ExperienceCard({
  edu,
  experience,
  title,
  addButtonTitle,
  Icon,
  emptyDescriptionTitle,
  emptyDescriptionBody,
  state,
}: PropsType) {
  return (
    <div className="w-full sm:w-1/2 border-2 rounded-3xl">
      <div className="p-6 max-sm:p-4 flex flex-col lg:flex-row justify-between sm:items-center gap-4">
        <h2 className="max-sm:m-4 font-semibold">{title}</h2>
        <Dialog>
          <DialogTrigger>
            <Button
              size="default"
              className="w-fit h-fit mr-4 px-8 py-3 flex gap-6 flex-nowrap bg-[#E5E6FF] text-blue-500 hover:bg-[#d6d7fb] transition duration-300"
            >
              {addButtonTitle} <PlusIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-3xl max-h-[95%] min-w-[90%] sm:min-w-[50%] lg:min-w-[30%] top-[50%] overflow-y-auto">
            {edu && <EduModal />}
            {experience && <ExperienceModal />}
          </DialogContent>
        </Dialog>
      </div>
      <hr className="w-full h-2" />
      <div className="w-full h-[450px] p-6 max-sm:p-4 flex justify-center items-start overflow-y-auto">
        {state.length > 0 && (
          <div className="w-full flex flex-col gap-4">
            <ExperienceInnerCard data={state} />
          </div>
        )}
        {!(state.length > 0) && (
          <div className="lg:w-1/2 my-auto flex flex-col items-center">
            <Icon />
            <h2 className="mt-8 text-center font-semibold">{emptyDescriptionTitle}</h2>
            <p className="text-center text-gray-400">{emptyDescriptionBody}</p>
          </div>
        )}
      </div>
    </div>
  )
}
