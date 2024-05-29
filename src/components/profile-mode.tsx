import { useNavigate } from "react-router-dom"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu"
import { HomeIcon, LogOutIcon, MenuIcon, UserIcon } from "@/components/Icons.tsx"

const ProfileMenu = () => {
  const navigate = useNavigate()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none">
          <div className="flex items-center justify-center bg-bgGreyLight p-1 rounded-xl text-deepBlue font-semibold">
            <div className="bg-whitePurple rounded-xl px-3 py-2">
              <p className="">BC</p>
            </div>
            <button className="px-3">
              <MenuIcon />
            </button>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 rounded-2xl p-0 absolute -right-16 w-[210px] top-0">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => navigate("/")} className="text-[1.6rem] space-x-3 p-5">
            <HomeIcon />
            <span>Asosiy sayt</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => navigate("/profile/info")}
            className="text-[1.6rem] space-x-3 p-5 hover:[&_svg_path]:fill-deepBlue"
          >
            <UserIcon />
            <span>Profil ma'lumotlari</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuItem className="text-[1.6rem] space-x-3 p-5">
          <LogOutIcon />
          <span>Chiqish</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default ProfileMenu
