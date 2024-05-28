import Select, { ClassNamesConfig, Props, GroupBase } from "react-select"
import makeAnimated from "react-select/animated"
import { cn } from "@/lib/utils"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { SelectComponents } from "node_modules/react-select/dist/declarations/src/components"

interface Opt {
  value: string
  label: string
}

interface IProps extends Props<Opt, false, GroupBase<Opt>> {
  filterKey: string
  options: Opt[]
  defaultValue?: Opt
}

const animatedComponents: Partial<SelectComponents<Opt, false, GroupBase<Opt>>> = makeAnimated()

export default function FilterSelect({ filterKey, defaultValue, options = [], classNames, ...props }: IProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const filterVal = searchParams.get(filterKey)
  const currentVal = options.find((o) => o.value === filterVal)

  useEffect(() => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev),
      [filterKey]: currentVal?.value ?? defaultValue?.value ?? "",
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOnChange = (opt: any) => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev),
      currentPage: "1",
      [filterKey]: opt ? opt.value : "",
    }))
  }
  return (
    <Select
      getOptionLabel={(opt) => opt.label}
      getOptionValue={(opt) => opt.value}
      defaultValue={defaultValue}
      value={currentVal}
      options={options}
      components={animatedComponents}
      isClearable
      classNames={{ ...defaultClassNames, ...classNames }}
      onChange={handleOnChange}
      {...props}
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
