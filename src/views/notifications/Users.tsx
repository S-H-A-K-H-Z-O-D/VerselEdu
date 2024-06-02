import { users_data } from "@/constants"
import { Link, useLocation, useParams } from "react-router-dom"
import { NotReadIcon, ReadIcon, SearchIcon } from "@/components/Icons.tsx"

const Users = () => {
  const { id } = useParams()
  const userId = Number(id)
  const location = useLocation()
  const { pathname } = location
  const isUser = pathname.includes("user")
  console.log(isUser)

  return (
    <aside
      className={`max-md:pb-0 md:min-w-[clamp(280px,_30vw,_450px)] md:w-[clamp(280px,_30vw,_450px)]
        flex flex-col w-full md:gap-0 overflow-auto custom-scrollbar md:border-r-2 h-full ${isUser && "max-md:hidden"}`}
    >
      <div className="sticky top-0 border-b-2 bg-white rounded-tl-[clamp(1.6rem,_1.6vw,_2.4rem)] max-md:rounded-tr-[clamp(1.6rem,_1.6vw,_2.4rem)]">
        <div className="relative m-[clamp(0.8rem,_0.8vw,_1.4rem)]">
          <div className="absolute top-5 right-3">
            <SearchIcon />
          </div>
          <input
            type="text"
            className="text-[clamp(1.4rem,_1.4vw,_1.6rem)] p-4 w-full focus:outline-none max-md:w-full"
            placeholder="Qidiruv..."
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 p-[clamp(0.6rem,_0.6vw,_1.4rem)]">
        {users_data.map((item, index) => (
          <Link
            to={`user/${item.id}`}
            key={index}
            className={`flex items-center gap-6 p-4 rounded-2xl ${userId === item.id && "bg-bgGreyLight"}`}
          >
            <img src={item.img} width={50} height={50} alt="user profile picture" className="rounded-full" />
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between text-[1.2rem] max-sm:text-[1rem]">
                <p className="font-semibold text-[clamp(1.6rem,_1.6vw,_1.8rem)]">{item.name}</p>
                <p className="font-light text-grey64 text-[clamp(1.2rem,_1.2vw,_1.4rem)]">{item.time}</p>
              </div>
              <div className="flex justify-between gap-2">
                <p className="text-[clamp(1.3rem,_1.3vw,_1.6rem)] line-clamp-1 text-grey64">{item.comment}</p>
                <div>
                  {!item.isRead && <NotReadIcon />}
                  {item.isRead && <ReadIcon />}
                </div>
              </div>

              {/* Replied comment*/}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}
export default Users
