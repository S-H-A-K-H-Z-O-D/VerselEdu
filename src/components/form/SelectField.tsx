import { Control, FieldValues, Path, useController } from "react-hook-form"
import FieldLabel from "./FieldLabel"
import Select, { ClassNamesConfig, Props } from "react-select"
import makeAnimated from "react-select/animated"
import FieldError from "./FieldError"
import { cn } from "@/lib/utils"

interface IProps<IForm extends FieldValues> {
  control: Control<IForm>
  name: Path<IForm>
  label?: string
  required?: boolean
}

const animatedComponents = makeAnimated()

export default function SelectField<IForm extends FieldValues>({
  name,
  control,
  label,
  required = false,
  className,
  ...props
}: IProps<IForm> & Props) {
  const {
    field: { ...field },
    fieldState,
  } = useController({
    name,
    control,
    rules: {
      validate: (val) => {
        let err = ""
        let valid = true
        if (required) {
          if (props.isMulti && val && val.length == 0) {
            err = "Ushbu maydon to'ldirilishi shart"
            valid = false
          }

          if (!val) {
            err = "Ushbu maydon to'ldirilishi shart"
            valid = false
          }
        }

        return valid || err
      },
    },
  })

  return (
    <fieldset className={cn("flex flex-col gap-[0.8rem]", className)}>
      {label && <FieldLabel required={required}>{label}</FieldLabel>}
      <Select
        // @ts-expect-error this is default getOptionLabel
        getOptionLabel={(opt) => opt?.label}
        // @ts-expect-error this is default getOptionValue
        getOptionValue={(opt) => opt?.id ?? opt?.value}
        components={animatedComponents}
        isClearable
        classNames={classNames}
        {...field}
        {...props}
      />
      {fieldState.error && <FieldError>{fieldState.error?.message}</FieldError>}
    </fieldset>
  )
}

const classNames: ClassNamesConfig = {
  control: ({ isFocused }) =>
    cn(
      "h-[5.6rem] !rounded-[1.2rem] px-[1.6rem] !border-borderGrey !shadow-sm",
      isFocused ? "!border-borderGrey !border-2" : "",
    ),
  indicatorSeparator: () => "!hidden",
  menu: () => "",
  menuList: () => "!p-0",
  option: ({ isSelected }) => cn("rounded-[0.4rem]", isSelected ? "!bg-slate-500" : ""),
}
