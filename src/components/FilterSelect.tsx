import Select, { ClassNamesConfig, Props, GroupBase } from "react-select"
import makeAnimated from "react-select/animated"
import { cn } from "@/lib/utils"
import { useSearchParams } from "react-router-dom"
import { SelectComponents } from "node_modules/react-select/dist/declarations/src/components"

type Opt = Record<string, any>

interface IProps extends Props<Opt, false, GroupBase<Opt>> {
  filterKey: string
  options: Opt[]
  defaultValue?: Opt
  currentPageKey?: string
  optLabel?: string
  optValue?: string
}

const animatedComponents: Partial<SelectComponents<Opt, false, GroupBase<Opt>>> = makeAnimated()

export default function FilterSelect({
  filterKey,
  options = [],
  classNames,
  currentPageKey = "page",
  optLabel = "name",
  optValue = "id",
  ...props
}: IProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const filterVal = searchParams.get(filterKey)
  const currentVal = options.find((o) => String(o[optValue]) === filterVal)

  const handleOnChange = (opt: any) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev)
      if (opt) {
        newParams.set(filterKey, String(opt[optValue]))
      } else {
        newParams.delete(filterKey)
      }
      newParams.set(currentPageKey, "1")
      return newParams
    })
  }

  return (
    <Select
      getOptionLabel={(opt) => opt[optLabel]}
      getOptionValue={(opt) => opt[optValue]}
      defaultValue={currentVal}
      options={options}
      components={animatedComponents}
      isClearable
      classNames={{ ...defaultClassNames, ...classNames }}
      onChange={handleOnChange}
      {...props}
      isMulti={false}
    />
  )
}

const defaultClassNames: ClassNamesConfig<Opt, false, GroupBase<Opt>> = {
  container: () => "min-w-[25rem]",
  control: ({ isFocused }) =>
    cn(
      "h-[4rem] !rounded-[0.8rem] px-[0.8rem] !border-borderGrey !shadow-sm",
      isFocused ? "!border-borderGrey !border-2" : "",
    ),
  indicatorSeparator: () => "!hidden",
  menuList: () => "!p-0",
  option: ({ isSelected }) => cn("rounded-[0.4rem]", isSelected ? "!bg-slate-500" : ""),
}
