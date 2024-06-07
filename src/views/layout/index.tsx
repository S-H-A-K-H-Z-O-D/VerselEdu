import Navbar from "@/views/layout/navbar/Navbar.tsx"
import Footer from "@/views/layout/Footer.tsx"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className={`text-black bg-bgGreyLight`}>
      <div className="sticky z-50 top-0 bg-white">
        <Navbar />
      </div>
      <div className="container py-12">{<Outlet />}</div>
      <div className="fixed bottom-0 bg-white w-full">
        <Footer />
      </div>
    </div>
  )
}
export default Layout
