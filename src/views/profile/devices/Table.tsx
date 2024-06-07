/* eslint-disable react-hooks/rules-of-hooks */
import { ActiveCompyuterIcon, CompyuterIcon, MobileIcon } from "@/components/Icons"
import { devices_history } from "@/constants"
import { useDateFormatter2, useGetBrowserDeviceInfo } from "@/lib/utils"

const Table = () => {
  const diveceName = useGetBrowserDeviceInfo()

  const currentDevice = devices_history.filter((item) => item.name === diveceName)
  const otherDevices = devices_history.filter((item) => item.name !== diveceName)

  const onDeleteHandler = (id: string) => {
    console.log(id)
  }

  return (
    <div className="relative overflow-x-auto p-10 rounded">
      <table className="w-full text-left rtl:text-right">
        <thead className="uppercase bg-bgGreyLight">
          <tr className="">
            <th
              scope="col"
              className="px-6 py-3 font-semibold text-grey64 text-[clamp(1.4rem,_1.4vw,_1.6rem)] rounded-l-2xl"
            >
              Qurilma nomi
            </th>
            <th scope="col" className="px-6 py-3 font-semibold text-grey64 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
              SANASI
            </th>
            <th scope="col" className="px-6 py-3 font-semibold text-grey64 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
              Harakatlar
            </th>
          </tr>
        </thead>
        <tbody>
          {currentDevice.map((item) => {
            const { id, name, device_type } = item
            const date = useDateFormatter2(item.data)
            return (
              <tr key={id} className="bg-white border-b border-borderGrey">
                <td
                  scope="row"
                  className="px-6 py-4 flex items-center gap-4 font-medium text-[clamp(1.4rem,_1.4vw,_1.6rem)]"
                >
                  {device_type === "compyuter" ?
                    <div className="p-4 w-fit bg-[#00CD69] rounded-xl">
                      <ActiveCompyuterIcon />
                    </div>
                  : <div className="p-4 w-fit bg-[#F5F5F7] rounded-xl">
                      <MobileIcon />
                    </div>
                  }
                  <div className="flex flex-col ">
                    <span className="text-nowrap">{name}</span>
                    <span className="text-xl text-green-600 font-medium">Mazkur qurilma</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">{date}</td>
                <td className="px-6 py-4 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
                  <span className="px-5 py-2 text-green-600 font-medium rounded-full">Faol</span>
                </td>
              </tr>
            )
          })}
          {otherDevices.map((item) => {
            const { id, name, device_type } = item
            const date = useDateFormatter2(item.data)
            return (
              <tr key={id} className="bg-white border-b border-borderGrey">
                <td
                  scope="row"
                  className="px-6 py-4 flex items-center gap-4 font-medium text-[clamp(1.4rem,_1.4vw,_1.6rem)]"
                >
                  <div className="p-4 w-fit bg-bgGreyLight rounded-xl [&_svg_rect]:stroke-greyTxt [&_svg_path]:stroke-greyTxt">
                    {device_type === "compyuter" ?
                      <CompyuterIcon />
                    : <MobileIcon />}
                  </div>
                  <span className="text-nowrap">{name}</span>
                </td>
                <td className="px-6 py-4 text-[clamp(1.4rem,_1.4vw,_1.6rem)] text-nowrap">{date}</td>
                <td className="px-6 py-4 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
                  <span
                    className="px-5 py-2 text-red font-medium rounded-full cursor-pointer"
                    onClick={() => onDeleteHandler(id)}
                  >
                    O&apos;chirish
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
