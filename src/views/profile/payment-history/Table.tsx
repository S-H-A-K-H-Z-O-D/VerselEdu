import { payment_history } from "@/constants"

const Table = () => {
  return (
    <div className="relative overflow-x-auto p-10 rounded">
      <table className="w-full text-left rtl:text-right">
        <thead className="uppercase bg-bgGreyLight">
          <tr className="">
            <th
              scope="col"
              className="px-6 py-3 font-semibold text-grey64 text-[clamp(1.4rem,_1.4vw,_1.6rem)] rounded-l-2xl"
            >
              KURS NOMI
            </th>
            <th scope="col" className="px-6 py-3 font-semibold text-grey64 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
              SANASI
            </th>
            <th scope="col" className="px-6 py-3 font-semibold text-grey64 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
              QIYMATI
            </th>
            <th scope="col" className="px-6 py-3 font-semibold text-grey64 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
              TO’LOV TURI
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-semibold text-grey64 text-[clamp(1.4rem,_1.4vw,_1.6rem)] rounded-r-2xl"
            >
              STATUS
            </th>
          </tr>
        </thead>
        <tbody>
          {payment_history.map((item, index) => {
            const { name, date, price, payment_type, status } = item

            return (
              <tr key={index} className="bg-white border-b border-borderGrey">
                <td scope="row" className="px-6 py-4 font-medium text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
                  {name}
                </td>
                <td className="px-6 py-4 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">{date}</td>
                <td className="px-6 py-4 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">{price}</td>
                <td className="px-6 py-4 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">{payment_type}</td>
                <td className="px-6 py-4 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
                  <span className="px-5 py-2 text-deepGreen bg-greenLight font-medium rounded-full">{status}</span>
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
