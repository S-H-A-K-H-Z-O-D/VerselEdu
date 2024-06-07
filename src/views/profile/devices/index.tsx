import { DevicesHeader } from "./Devices-header"
import Table from "./Table"

export default function Devices() {
  return (
    <div>
      <DevicesHeader />
      <hr className="w-full h-1 mt-6 max-sm:mt-4 bg-borderGrey" />
      <Table />
    </div>
  )
}
