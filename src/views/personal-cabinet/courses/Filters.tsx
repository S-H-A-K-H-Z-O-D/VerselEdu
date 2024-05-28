import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select.tsx"
import { SearchIcon } from "@/components/Icons.tsx"

const Filters = () => {
  return (
    <div className="flex min-md:items-center gap-5 max-md:flex-col">
      <Select>
        <SelectTrigger className="w-[220px] max-md:w-full">
          <SelectValue placeholder="Haftalik" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="text-2xl">
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="relative">
        <div className="absolute top-[10px] left-5">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="border text-[1.2rem] py-4 rounded-2xl w-[300px] pl-16 focus:outline-none max-md:w-full"
          placeholder="Yoqtirgan kursingizni qidiring"
        />
      </div>
    </div>
  )
}
export default Filters
