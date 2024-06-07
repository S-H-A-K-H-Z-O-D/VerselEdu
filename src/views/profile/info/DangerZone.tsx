"use client"

import { Button } from "@/components/shadcn/ui/button.tsx"
import { Dialog, DialogContent } from "@/components/shadcn/ui/dialog"
import { useState } from "react"
import { DeleteAccountModal, ExitSessionsModal, ExitSystemModal } from "./Danger-zone-modals"

const DangerZone = () => {
  const [modal, setModal] = useState<string>("")
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const renderModalContent = () => {
    switch (modal) {
      case "exitSystem":
        return <ExitSystemModal />
      case "exitSessions":
        return <ExitSessionsModal />
      case "deleteAccount":
        return <DeleteAccountModal />
      default:
        return null
    }
  }

  const onOpenModal = (type: string) => {
    setModal(type)
    setIsOpen(true)
  }

  return (
    <div className="max-w-6xl mx-auto mt-12 border-t pt-10 max-xl:px-5">
      <p className="font-medium mb-3 text-[clamp(1.5rem,_1.5vw,_1.8rem)]">Xafli hudud</p>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent className="min-w-[25%] rounded-3xl">{renderModalContent()}</DialogContent>
      </Dialog>
      <div className="flex max-lg:flex-wrap justify-between gap-5">
        <Button
          variant="outline"
          className="w-full text-[clamp(1.4rem,_1.4vw,_1.6rem)]"
          onClick={() => onOpenModal("exitSystem")}
        >
          Tizimdan chiqish
        </Button>
        <Button
          variant="outline"
          className="w-full text-[clamp(1.4rem,_1.4vw,_1.6rem)]"
          onClick={() => onOpenModal("exitSessions")}
        >
          Hamma qurilmalardan chiqish{" "}
        </Button>
        <Button
          variant="outline"
          className="w-full border-red text-red text-[clamp(1.4rem,_1.4vw,_1.6rem)] hover:bg-redLight hover:text-red"
          onClick={() => onOpenModal("deleteAccount")}
        >
          Akkountni o’chirish
        </Button>
      </div>
    </div>
  )
}
export default DangerZone
