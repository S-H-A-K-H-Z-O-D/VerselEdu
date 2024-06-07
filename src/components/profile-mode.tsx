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
        <main className="outline-none cursor-pointer">
          <div className="flex items-center justify-center bg-bgGreyLight p-1 rounded-xl text-deepBlue font-semibold">
            <div className="bg-whitePurple rounded-xl px-3 py-2">
              <p className="">BC</p>
            </div>
            <div className="px-3 [&_svg_path]:stroke-greyTxt">
              <MenuIcon />
            </div>
          </div>
        </main>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 rounded-2xl p-0 absolute -right-16 w-[clamp(21rem,_18vw,_24rem)] top-0">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => navigate("/")} className="text-[clamp(1.5rem,_1.5vw,_1.8rem)] space-x-3 p-5">
            <HomeIcon />
            <span>Asosiy sayt</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => navigate("/profile/info")}
            className="text-[clamp(1.5rem,_1.5vw,_1.8rem)] space-x-3 p-5 hover:[&_svg_path]:fill-deepBlue"
          >
            <UserIcon />
            <span>Profil ma'lumotlari</span>
          </DropdownMenuItem>

          {/*<DropdownMenuItem*/}
          {/*  onClick={() => navigate("/notifications")}*/}
          {/*  className="text-[clamp(1.5rem,_1.5vw,_1.8rem)] space-x-4 p-5 hover:[&_svg_path]:fill-deepBlue pl-[16px]"*/}
          {/*>*/}
          {/*  <EnvelopeIcon />*/}
          {/*  <span>Xabarnomalar</span>*/}
          {/*</DropdownMenuItem>*/}
        </DropdownMenuGroup>

        <DropdownMenuItem
          className="text-[clamp(1.5rem,_1.5vw,_1.8rem)] space-x-3 p-5"
          onClick={() => navigate("/auth/phone")}
        >
          <LogOutIcon />
          <span>Chiqish</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default ProfileMenu
