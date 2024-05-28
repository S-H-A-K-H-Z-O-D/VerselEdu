import { ReactNode } from "react"

interface IProps {
  children: ReactNode
  required: boolean
}

export default function FieldLabel({ required, children }: IProps) {
  return (
    <label className="text-[1.8rem] font-medium leading-[1.4]">
      {children} {required && <span className="text-red">*</span>}
    </label>
  )
}
