import { Button } from "@/components/shadcn/ui/button"
import { DialogClose } from "@/components/shadcn/ui/dialog"
import imgBlack from "@/assets/images/profile/BlackWarning.svg"
import imgOrange from "@/assets/images/profile/orangeWarning.svg"
import imgRed from "@/assets/images/profile/redWarning.svg"

export const ExitSystemModal = () => (
  <div className="p-6 max-sm:p-4 flex flex-col items-center justify-center gap-4">
    <img src={imgBlack} alt="payment is done" />
    <h2 className="text-center text-[24px] font-medium text-black">
      Siz rostan ham tizimdan
      <br />
      chiqmoqchimisiz?
    </h2>
    <div className="mt-10 w-full flex flex-col md:flex-row justify-between items-center gap-4">
      <DialogClose className="w-full">
        <Button variant={"ghost"} className="w-full border-2 border-borderGrey text-black">
          Yo'q
        </Button>
      </DialogClose>
      <DialogClose className="w-full">
        <Button className="w-full text-white bg-black hover:bg-grey64">Ha</Button>
      </DialogClose>
    </div>
  </div>
)

export const ExitSessionsModal = () => (
  <div className="p-6 max-sm:p-4 flex flex-col items-center justify-center gap-4">
    <img src={imgOrange} alt="payment is done" />
    <h2 className="text-center text-[24px] font-medium text-black">
      Siz rostan ham tizimdan
      <br />
      chiqmoqchimisiz?
    </h2>
    <div className="mt-10 w-full flex flex-col md:flex-row justify-between items-center gap-4">
      <DialogClose className="w-full">
        <Button variant={"ghost"} className="w-full border-2 text-black border-borderGrey">
          Yo'q
        </Button>
      </DialogClose>
      <DialogClose className="w-full">
        <Button className="w-full bg-[#FF7800] hover:bg-[#ff8316]">Ha</Button>
      </DialogClose>
    </div>
  </div>
)

export const DeleteAccountModal = () => (
  <div className="p-6 max-sm:p-4 flex flex-col items-center justify-center gap-4">
    <img src={imgRed} alt="payment is done" />
    <h2 className="text-center text-[24px] font-medium text-black">
      Siz rostan ham tizimdan
      <br />
      chiqmoqchimisiz?
    </h2>
    <div className="mt-10 w-full flex flex-col md:flex-row justify-between items-center gap-4">
      <DialogClose className="w-full">
        <Button variant={"ghost"} className="w-full border-2 text-black border-borderGrey">
          Yo'q
        </Button>
      </DialogClose>
      <DialogClose className="w-full">
        <Button variant={"destructive"} className="w-full">
          Ha
        </Button>
      </DialogClose>
    </div>
  </div>
)
