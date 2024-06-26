import { FieldValues, Path, RegisterOptions, UseFormReturn } from "react-hook-form"
import FieldLabel from "./FieldLabel"
import FieldError from "./FieldError"
import { ReactNode, useState } from "react"
import { EyeHideIcon, EyeIcon } from "../Icons"
import { cn } from "@/lib/utils"

interface IProps<IForm extends FieldValues> {
  methods: UseFormReturn<IForm>
  name: Path<IForm>
  label?: string
  required?: boolean
  registerOptions?: RegisterOptions
  password?: boolean
}

export default function InputField<IForm extends FieldValues>({
  methods,
  name,
  label,
  required = false,
  registerOptions,
  password = false,
  className,
  ...props
}: IProps<IForm> & React.InputHTMLAttributes<HTMLInputElement>) {
  const [pwd, setPwd] = useState(true)

  const {
    register,
    formState: { errors },
  } = methods
  const reg = register(name, {
    required: {
      value: required,
      message: "Ushbu maydon to'ldirilishi shart",
    },
    ...registerOptions,
  })

  return (
    <fieldset className={cn("flex flex-col gap-[0.8rem]", className)}>
      {label && <FieldLabel required={required}>{label}</FieldLabel>}
      <label className="relative flex items-center">
        <input
          type={
            password ?
              pwd ?
                "password"
              : "text"
            : "text"
          }
          className={cn(
            "w-full border-borderGrey border rounded-[1.2rem] bg-white outline-none leading-none px-[2.4rem] text-darkBlue caret-darkBlue font-medium text-[clamp(1.4rem,_1.4vw,_1.6rem)] h-[clamp(4.8rem,_4.8vw,_5.6rem)]",
            password ? "font-[Verdana] pr-[6.8rem]" : "",
          )}
          autoComplete="off"
          {...reg}
          {...props}
        />
        {password && (
          <span
            onClick={() => {
              setPwd((prev) => !prev)
            }}
            className="absolute right-[2.4rem]"
          >
            {pwd ?
              <EyeHideIcon />
            : <EyeIcon />}
          </span>
        )}
      </label>
      {errors[name] && <FieldError>{errors[name]?.message as ReactNode}</FieldError>}
    </fieldset>
  )
}
