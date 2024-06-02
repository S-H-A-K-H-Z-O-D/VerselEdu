import { DevicesHeader } from "./Devices-header"
import Table from "./Table"

export default function Devices() {
  return (
    <div>
      <DevicesHeader />
      <hr className="w-full h-2 mt-6 max-sm:mt-4" />
      <Table />
    </div>
  )
}
