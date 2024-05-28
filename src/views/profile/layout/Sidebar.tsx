import { DiplomaIcon, LaptopIcon, MoneyBagCoinIcon, PresentationIcon, UserCircleIcon } from "@/components/Icons"
import { cn } from "@/lib/utils"
import { NavLink } from "react-router-dom"

const menu = [
  {
    label: "Ma'lumotlarim",
    icon: <UserCircleIcon />,
    path: "info",
  },
  {
    label: "Tajribalarim",
    icon: <PresentationIcon />,
    path: "experiences",
  },
  {
    label: "Sertifikatlarim",
    icon: <DiplomaIcon />,
    path: "sertifications",
  },
  {
    label: "To'lov tarixi",
    icon: <MoneyBagCoinIcon />,
    path: "payment_history",
  },
  {
    label: "Qurilmalarim",
    icon: <LaptopIcon />,
    path: "devices",
  },
]

export default function Sidebar() {
  return (
    <aside className="md:bg-white p-[clamp(1.6rem,_1.6vw,_2.4rem)] max-md:pb-0 rounded-[clamp(1.6rem,_1.6vw,_2.4rem)] md:w-[clamp(280px,_30vw,_320px)] flex md:flex-col w-full gap-16 md:gap-0 overflow-x-auto custom-scrollbar">
      {menu.map((item, i) => (
        <NavLink
          key={i}
          to={"/profile/" + item.path}
          className={({ isActive }) =>
            cn(
              "grid grid-cols-[auto,_1fr] gap-x-4 gap-y-6 font-medium text-[clamp(1.6rem,_1.6vw,_1.8rem)] mb-8 transition-all",
              isActive ?
                "text-lightPurple [&_svg_path]:fill-lightPurple [&_.item-border]:bg-lightPurple"
              : "text-black [&_svg_path]:fill-greyTxt [&_.item-border]:bg-borderGrey",
            )
          }
        >
          <span className="grid place-items-center">{item.icon}</span>
          <p className="whitespace-nowrap">{item.label}</p>
          <span></span>
          <span className={"item-border h-[1px]"}></span>
        </NavLink>
      ))}
    </aside>
  )
}
