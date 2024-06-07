import { Outlet } from "react-router-dom"
import logo from "@/assets/images/logo-white.svg"
import bg from "@/assets/images/auth-bg.png"

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-2 max-lg:place-content-center items-center h-screen px-[clamp(0.5rem,_3vw,_8rem)] 2xl:px-[12%] py-[5%] gap-[5%] 2xl:gap-[21%] max-lg:grid-cols-1">
      <main className="p-[clamp(2.5rem,_3vw,_6.4rem)] pt-[clamp(2rem,_2.5vw,_5.6rem)] rounded-[clamp(1.4rem,_1.5vw,_2.4rem)] bg-white max-lg:order-2">
        <Outlet />
      </main>

      <figure className="relative bg-lightPurple grid place-items-center rounded-[clamp(2rem,_2.2vw,_3.2rem)] h-full max-lg:h-[12rem] max-sm:h-[10rem] max-h-[85rem] max-lg:order-1">
        <img src={logo} alt="logo" className="relative z-10 px-[15%] max-lg:px-[25%]" />
        <img src={bg} alt="background decoration" className="absolute top-0 left-0 max-lg:object-cover w-full h-full" />
      </figure>
    </div>
  )
}
