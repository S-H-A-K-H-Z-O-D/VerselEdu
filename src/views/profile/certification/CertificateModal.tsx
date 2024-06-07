import { ReactNode } from "react"

import { Dialog, DialogContent, DialogTrigger } from "@/components/shadcn/ui/dialog.tsx"

const CertificateModal = ({ url, children }: { children: ReactNode; url: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        {children}
      </DialogTrigger>
      <DialogContent className="overflow-hidden mt-40 rounded-2xl border-none outline-none bg-background p-0 sm:max-w-7xl">
        <img src={url} alt="certificate" className="w-full" />
      </DialogContent>
    </Dialog>
  )
}

export default CertificateModal
