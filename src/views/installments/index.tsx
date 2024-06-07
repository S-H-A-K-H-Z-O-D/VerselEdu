import videoImg from "@/assets/images/innre-pages/videoPlayer.png"
import video from "@/assets/edbvstkuzvo2r5n4zlj4.mp4"
import VideoPlayer from "@/components/VideoPlayer"

export default function Installments() {
  return (
    <div className="min-[520px]:mb-24">
      <div className="md:w-[70%]  mx-auto p-10 max-sm:p-6 flex flex-col bg-white mt-8 rounded-[clamp(1.6rem,_1.6vw,_2.4rem)]">
        <h2 className="font-semibold text-[clamp(1.8rem,_1.8vw,_2.4rem)]">Bo'lib to'lash</h2>
        <h3 className="font-medium text-[clamp(1.4rem,_1.4vw,_2.0rem)]">
          Platformadagi kurslarni 3 va 6 oy ichida bo’lib to’lash orqali xarid qilishingiz mumkin. Kurs narxiga
          qo’shimcha ustama qo’shilmaydi.
        </h3>
        <div className="w-full mt-10 flex flex-col gap-4">
          <h3 className="font-medium text-[clamp(1.4rem,_1.4vw,_2.0rem)] text-start">Bo’lib to’lash bo’yicha qo’llanma:</h3>
          <VideoPlayer url={video} imgUrl={videoImg} className="w-[full]"/>
        </div>
      </div>
    </div>
  )
}
