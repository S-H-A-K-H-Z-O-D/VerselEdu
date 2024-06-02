import ChatInput from "@/views/notifications/chat/ChatInput.tsx"
import { chat } from "@/constants"
import { useEffect, useRef, useState } from "react"

const ChatField = () => {
  // const { id } = useParams()
  const [chatData, setChatData] = useState(chat)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Scroll to the bottom whenever chatData changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatData])

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col justify-between h-full overflow-auto" ref={chatContainerRef}>
          <div className="flex justify-center mt-5">
            <span className="rounded-full bg-bgGreyLight px-5 py-2">23 iyul 2024 y.</span>
          </div>

          <div className="flex flex-col gap-7 px-10 my-10">
            {chatData.map((chat) => (
              <div key={chat.id} className={`${chat.side === "right" && "flex justify-end"}`}>
                <p
                  className={`max-w-[800px] bg-bgGreyLight p-5
                rounded-[clamp(1rem,_1vw,_1.4rem)] ${chat.side === "right" ? "rounded-br-none text-end bg-lightBlue" : "rounded-bl-none"}`}
                >
                  {chat.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ChatInput setChatData={setChatData} />
      </div>
    </>
  )
}
export default ChatField
