import certificate from "@/assets/images/profile/certification.png"
import { Button } from "@/components/shadcn/ui/button.tsx"
import { CalendarIcon } from "@/components/Icons.tsx"
import noCertificate from "@/assets/images/profile/NoDocuments.svg"
import CertificateModal from "@/views/profile/certification/CertificateModal.tsx"

const Certification = () => {
  const certification = [0, 1, 2, 3]

  return (
    <section>
      <h2 className="font-medium text-[clamp(1.8rem,_1.8vw,_2.4rem)] border-b-2 border-borderGrey pb-8 text-center">
        Sertifikatlarim
      </h2>
      <>
        {"" && (
          <div className="flex flex-col items-center justify-center py-40">
            <img src={noCertificate as string} alt="Kurslarim" className="-mb-7" />
            <p className="text-[clamp(1.5rem,_1.5vw,_1.8rem)] font-medium">O'zingiz uchun mos kursni tanlang</p>
            <p className="text-[clamp(1.4rem,_1.4vw,_1.6rem)] text-greyTxt">
              Sertifikat uchun kursni o‘qib tugatishingiz kerak
            </p>
            <Button className="bg-deepBlue h-[4.5rem] px-20 mt-20 text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
              Kurslarni ko'rish
            </Button>
          </div>
        )}

        {"h" && (
          <div className="grid  place-items-center py-20">
            <div className="grid grid-cols-2 gap-x-5 gap-y-20 px-10 max-lg:grid-cols-1">
              {certification.map((item) => (
                <div key={item} className="max-w-[500px]">
                  <CertificateModal url={certificate}>
                    <img src={certificate as string} alt="Kurslarim" className="border rounded-3xl " />
                  </CertificateModal>
                  <div className="flex items-center gap-2 mb-3 mt-5">
                    <CalendarIcon />
                    <p className="text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
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
