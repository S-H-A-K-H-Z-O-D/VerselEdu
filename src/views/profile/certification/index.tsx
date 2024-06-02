import certificate from "@/assets/images/profile/certification.png"
import { Button } from "@/components/shadcn/ui/button.tsx"
import { CalendarIcon } from "@/components/Icons.tsx"

const Certification = () => {
  const certification = [0, 1, 2, 3]

  return (
    <section>
      <h2 className="font-medium text-[clamp(1.8rem,_1.8vw,_2.4rem)] border-b-2 pb-8 text-center">Sertifikatlarim</h2>
      <>
        {"" && (
          <div className="flex flex-col items-center justify-center py-40">
            <svg xmlns="http://www.w3.org/2000/svg" width="250" height="170" fill="none" viewBox="0 0 250 170">
              <path fill="#fff" d="M0 0H250V200H0z"></path>
              <path
                fill="#F3F7FF"
                fillRule="evenodd"
                d="M207 65a7 7 0 110 14h-40a7 7 0 110 14h22a7 7 0 110 14h-10.174c-4.874 0-8.826 3.134-8.826 7 0 2.577 2 4.911 6 7a7 7 0 110 14H93a7 7 0 110-14H54a7 7 0 110-14h40a7 7 0 100-14H69a7 7 0 110-14h40a7 7 0 110-14h98zm0 28a7 7 0 110 14 7 7 0 010-14z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M153.672 64l9.302 67.843.835 6.807a3.999 3.999 0 01-3.482 4.457l-58.561 7.191a4 4 0 01-4.457-3.483l-9.016-73.428a2 2 0 011.741-2.228l.021-.003 4.859-.545m3.928-.44l4.587-.515-4.587.514z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#1F64E7"
                d="M154.91 63.83a1.25 1.25 0 10-2.477.34l2.477-.34zm8.064 68.013l1.24-.152a.088.088 0 00-.002-.017l-1.238.169zm.835 6.807l-1.24.152 1.24-.152zm-66.5 8.165l1.24-.152-1.24.152zm-9.016-73.428l-1.24.153 1.24-.153zm1.762-2.23l-.14-1.243.14 1.242zm4.998.696a1.25 1.25 0 00-.279-2.484l.279 2.484zm3.65-2.925a1.25 1.25 0 10.278 2.485l-.278-2.485zm4.865 1.97a1.25 1.25 0 10-.278-2.484l.278 2.484zm48.865-6.727l9.302 67.842 2.477-.339-9.302-67.843-2.477.34zm9.3 67.825l.836 6.806 2.481-.305-.836-6.806-2.481.305zm.836 6.806a2.75 2.75 0 01-2.395 3.065l.305 2.481a5.25 5.25 0 004.571-5.851l-2.481.305zm-2.395 3.065l-58.56 7.19.305 2.481 58.56-7.19-.305-2.481zm-58.56 7.19a2.75 2.75 0 01-3.065-2.394l-2.48.304a5.25 5.25 0 005.85 4.571l-.305-2.481zm-3.065-2.394l-9.015-73.428-2.482.305 9.016 73.427 2.481-.304zm-9.015-73.428a.75.75 0 01.653-.836l-.305-2.481a3.25 3.25 0 00-2.83 3.622l2.482-.305zm.653-.836h.008l-.28-2.485a1.836 1.836 0 00-.033.004l.305 2.481zm.008 0l4.858-.546-.279-2.484-4.858.545.279 2.484zm8.786-.986l4.587-.515-.278-2.484-4.587.514.278 2.485zm4.309-3l-4.587.515.278 2.485 4.587-.515-.278-2.484z"
              ></path>
              <path
                fill="#E8F0FE"
                fillRule="evenodd"
                d="M151.14 68.269l8.42 61.483.757 6.169c.244 1.987-1.15 3.793-3.114 4.034l-52.442 6.439c-1.963.241-3.753-1.174-3.997-3.161l-8.15-66.377a2 2 0 011.742-2.229l6.487-.796"
                clipRule="evenodd"
              ></path>
              <path
                fill="#fff"
                stroke="#1F64E7"
                strokeWidth="2.5"
                d="M107.922 54a2.75 2.75 0 012.75-2.75h45.557c.729 0 1.428.29 1.944.805l13.443 13.435a2.75 2.75 0 01.806 1.945V130a2.75 2.75 0 01-2.75 2.75h-59a2.75 2.75 0 01-2.75-2.75V54z"
              ></path>
              <path
                stroke="#1F64E7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M156.672 52.402V64a3 3 0 003 3h7.933"
              ></path>
              <path
                stroke="#75A4FE"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M118 118h26m-26-51h26-26zm0 12h43-43zm0 13h43-43zm0 13h43-43z"
              ></path>
            </svg>
            <p className="text-[1.8rem] font-medium">O'zingiz uchun mos kursni tanlang</p>
            <p className="text-[1.6rem] text-greyTxt">Sertifikat uchun kursni o‘qib tugatishingiz kerak</p>
            <Button className="bg-deepBlue h-[4.5rem] px-20 mt-20 text-[1.6rem]">Kurslarni ko'rish</Button>
          </div>
        )}

        {"h" && (
          <div className="grid  place-items-center py-20">
            <div className="grid grid-cols-2 gap-x-5 gap-y-20 px-10 max-lg:grid-cols-1">
              {certification.map((item) => (
                <div key={item} className="max-w-[500px]">
                  <img src={certificate as string} alt="Kurslarim" className="border rounded-3xl " />
                  <div className="flex items-center gap-2 mb-3 mt-5">
                    <CalendarIcon />
                    <p className="text-[1.6rem] max-[450px]:text-[1.3rem]">
                      <span className="font-medium pr-4 mr-4 border-r text-greyTxt">23.10.2024</span>
                      <span className="font-medium text-grey64">240391 ID</span>
                    </p>
                  </div>
                  <p className="font-medium text-[clamp(1.6rem,_1.6vw,_2rem)]">
                    Gudge fest raqamli kursini muvaffaqiyatli tamomlagani uchun berildi!
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    </section>
  )
}
export default Certification
