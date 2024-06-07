import { useEffect, useRef, useState } from "react"
import { UploadFileIcon } from "@/components/Icons.tsx"

const ProfileImg = () => {
  const imgRef = useRef<HTMLInputElement>(null)
  const [uploadedImg, setUploadedImg] = useState("")

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

  return (
    <div className="bg-bgGreyLight my-10 py-16">
      <div className="max-w-6xl mx-auto">
        <p className="font-medium mb-3 text-[clamp(1.5rem,_1.5vw,_1.8rem)]">Profil rasmi</p>

        <div className="border-2 p-5 rounded-2xl bg-white">
          <div className="flex justify-between w-full">
            <div className="sm:flex items-center gap-3">
              {uploadedImg && <img alt="profile img" src={uploadedImg} className="w-[56px]" />}
              {!uploadedImg && (
                <div className="bg-whitePurple rounded-2xl w-[56px] h-[56px] flex items-center justify-center">
                  <p className="text-deepBlue text-[2rem]">BC</p>
                </div>
              )}

              <div className="max-sm:hidden">
                <p className="font-medium text-[clamp(1.4rem,_1.4vw,_1.6rem)]">Profil rasmini yuklang</p>
                <p className="text-[clamp(1.2rem,_1.2vw,_1.4rem)] text-grey64">
                  <span className="pr-3 mr-3 border-r">Rasimning hajm 1000px</span>Fayl tipi: JPG va PNG
                </p>
              </div>
            </div>

            <div
              className="min-w-[56px] h-[56px] bg-bgGreyLight cursor-pointer rounded-2xl flex items-center justify-center [&_svg_path]:stroke-greyTxt"
              onClick={clickFileInput}
            >
              <input ref={imgRef} type="file" accept="image/*" onChange={onLoad} className="hidden" />
              <UploadFileIcon />
            </div>
          </div>

          <div className="sm:hidden">
            <p className="font-medium text-[clamp(1.4rem,_1.4vw,_1.6rem)]">Profil rasmini yuklang</p>
            <p className="text-[clamp(1.2rem,_1.2vw,_1.4rem)] text-grey64">
              <span className="pr-3 mr-3 border-r">Rasimning hajm 1000px</span>Fayl tipi: JPG va PNG
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileImg
