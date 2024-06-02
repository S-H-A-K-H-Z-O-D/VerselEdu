import { AttachFileIcon, SentFileIcon } from "@/components/Icons.tsx"
import { useEffect, useRef, useState } from "react"

const ChatInput = ({ setChatData }: any) => {
  const imgRef = useRef<HTMLInputElement>(null)
  const [uploadedImg, setUploadedImg] = useState("")
  const [chatText, setChatText] = useState("")

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage")
    if (savedImage) {
      setUploadedImg(savedImage)
    }
  }, [])

  const onLoad = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      const baseImage = reader.result as string
      localStorage.setItem("profileImage", baseImage)
      setUploadedImg(baseImage)
    }

    reader.readAsDataURL(file)
  }

  const clickFileInput = () => {
    imgRef?.current?.click()
  }
  console.log(uploadedImg)

  const onSubmit = (e: any) => {
    e.preventDefault()

    setChatData((prev: any) => [...prev, { id: 2, text: chatText, side: "right" }])
  }

  return (
    <>
      <div className=" border-t-2 bg-white rounded-br-[clamp(1.6rem,_1.6vw,_2.4rem)] max-md:rounded-bl-[clamp(1.6rem,_1.6vw,_2.4rem)]">
        <form className="relative" onSubmit={onSubmit}>
          <input
            type="text"
            className="text-[clamp(1.4rem,_1.4vw,_1.6rem)] py-[clamp(1.2rem,_1.2vw,_1.4rem)] px-[clamp(1.5rem,_1.5vw,_1.8rem)] w-full
               focus:outline-none max-md:w-full rounded-br-[clamp(1.6rem,_1.6vw,_2.4rem)] max-md:rounded-bl-[clamp(1.6rem,_1.6vw,_2.4rem)]"
            placeholder="Xabaringizni yozing..."
            onChange={(e) => setChatText(e.target.value)}
            value={chatText}
          />

          <button className="absolute right-28 top-5" onClick={clickFileInput} type="button">
            <input ref={imgRef} type="file" onChange={onLoad} className="hidden" />
            <AttachFileIcon />
          </button>

          <button type="submit" className="absolute right-10 top-5">
            <SentFileIcon />
          </button>
        </form>
      </div>
    </>
  )
}
export default ChatInput
