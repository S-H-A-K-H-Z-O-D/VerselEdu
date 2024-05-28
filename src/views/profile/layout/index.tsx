import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

export default function ProfileLayout() {
  return (
    <>
      <h2 className="font-semibold text-[clamp(1.8rem,_1.8vw,_2.4rem)]">Profil ma'lumotlarim</h2>

      <div className="flex flex-col md:flex-row gap-[clamp(1.6rem,_1.6vw,_2.4rem)] mt-8">
        <Sidebar />

        <main className="bg-white py-[clamp(1.6rem,_1.6vw,_2.4rem)] rounded-[clamp(1.6rem,_1.6vw,_2.4rem)] flex-auto">
          <Outlet />
        </main>
      </div>
    </>
  )
}
