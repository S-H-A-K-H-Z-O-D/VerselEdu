import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import Users from "./Users.tsx"
import { ArrowLeftIcon } from "@/components/Icons.tsx"

const NotificationLayout = () => {
  const { id } = useParams()
  const location = useLocation()
  const { pathname } = location
  const isUser = pathname.includes("user")

  return (
    <div className="min-[520px]:mb-24">
      <div className="flex items-center gap-7">
        <Link to="/notifications" className={`${!isUser && "hidden"} md:hidden`}>
          <ArrowLeftIcon />
        </Link>
        <h2 className="font-semibold text-[clamp(1.8rem,_1.8vw,_2.4rem)]">Xabarnomalar</h2>
      </div>

      <div className="h-[72vh] max-[520px]:h-[77vh] flex flex-col bg-white md:flex-row mt-8 rounded-[clamp(1.6rem,_1.6vw,_2.4rem)]">
        {/*<div className="">*/}
        <Users />
        {/*</div>*/}

        <main className="flex-auto max-md:overflow-auto">
          {id && <Outlet />}
          {!id && (
            <div className="w-full h-full flex items-center justify-center max-md:hidden">
              <p className="rounded-full bg-bgGreyLight px-5 py-2">Chatni tanlang va yozishni boshlang</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
export default NotificationLayout
