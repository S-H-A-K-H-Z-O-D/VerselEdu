import { Button } from "@/components/shadcn/ui/button.tsx"

const DangerZone = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 border-t pt-10 max-xl:px-5">
      <p className="font-medium mb-3 text-[clamp(1.6rem,_1.6vw,_1.8rem)]">Xafli hudud</p>

      <div className="flex max-lg:flex-wrap justify-between gap-5">
        <Button variant="outline" className="w-full text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
          Tizimdan chiqish
        </Button>
        <Button variant="outline" className="w-full text-[clamp(1.4rem,_1.4vw,_1.6rem)]">
          Hamma qurilmalardan chiqish{" "}
        </Button>
        <Button
          variant="outline"
          className="w-full border-red text-red text-[clamp(1.4rem,_1.4vw,_1.6rem)] hover:bg-redLight hover:text-red"
        >
          Akkountni o’chirish
        </Button>
      </div>
    </div>
  )
}
export default DangerZone
