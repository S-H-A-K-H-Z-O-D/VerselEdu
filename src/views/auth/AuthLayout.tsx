import { Outlet } from "react-router-dom"
import logo from "@/assets/images/logo-white.svg"
import bg from "@/assets/images/auth-bg.png"

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-2 items-center h-screen px-[8rem] 2xl:px-[12%] py-[5%] gap-[5%] 2xl:gap-[21%]">
      <main className="p-[6.4rem] pt-[5.6rem] rounded-[2.4rem] bg-white">
        <Outlet />
      </main>

      <figure className="relative bg-lightPurple grid place-items-center rounded-[3.2rem] h-full max-h-[85rem]">
        <img src={logo} alt="logo" className="relative z-10 px-[15%]" />
        <img src={bg} alt="background decoration" className="absolute top-0 left-0 w-full h-full" />
      </figure>
    </div>
  )
}
