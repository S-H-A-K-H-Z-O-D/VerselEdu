import { Button } from "@/components/shadcn/ui/button"
import { DialogClose } from "@/components/shadcn/ui/dialog"

export const ExitSystemModal = () => (
  <div className="p-6 max-sm:p-4 flex flex-col items-center justify-center gap-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="136" height="130" fill="none" viewBox="0 0 136 130">
      <g filter="url(#filter0_di_1716_6733)">
        <rect width="88" height="88" x="24" y="8" fill="#161719" rx="16" shapeRendering="crispEdges"></rect>
        <rect
          width="86"
          height="86"
          x="25"
          y="9"
          stroke="#fff"
          strokeOpacity="0.24"
          strokeWidth="2"
          rx="15"
          shapeRendering="crispEdges"
        ></rect>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M64.614 38.943c1.476-2.59 5.297-2.59 6.773 0l12.787 22.444C85.608 63.906 83.74 67 80.787 67H55.213c-2.954 0-4.821-3.094-3.386-5.613l12.787-22.444zm5.053 21.39a1.667 1.667 0 11-3.334 0 1.667 1.667 0 013.334 0zM69.25 47a1.25 1.25 0 00-2.5 0v8.333a1.25 1.25 0 102.5 0V47z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_di_1716_6733"
          width="136"
          height="136"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="16"></feOffset>
          <feGaussianBlur stdDeviation="12"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.0862745 0 0 0 0 0.0901961 0 0 0 0 0.0980392 0 0 0 0.25 0"></feColorMatrix>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1716_6733"></feBlend>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1716_6733" result="shape"></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="12"></feGaussianBlur>
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"></feColorMatrix>
          <feBlend in2="shape" result="effect2_innerShadow_1716_6733"></feBlend>
        </filter>
      </defs>
    </svg>
    <h2 className="text-center text-[24px] font-medium">
      Siz rostan ham tizimdan
      <br />
      chiqmoqchimisiz?
    </h2>
    <div className="mt-10 w-full flex flex-col md:flex-row justify-between items-center gap-4">
      <DialogClose className="w-full">
        <Button variant={"ghost"} className="w-full border-2">
          Yo'q
        </Button>
      </DialogClose>
      <DialogClose className="w-full">
        <Button className="w-full bg-black hover:bg-gray-800">Ha</Button>
      </DialogClose>
    </div>
  </div>
)

export const ExitSessionsModal = () => (
  <div className="p-6 max-sm:p-4 flex flex-col items-center justify-center gap-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="136" height="136" fill="none" viewBox="0 0 136 136">
      <g filter="url(#filter0_di_1719_6496)">
        <rect width="88" height="88" x="24" y="8" fill="#FF7800" rx="16" shapeRendering="crispEdges"></rect>
        <rect
          width="86"
          height="86"
          x="25"
          y="9"
          stroke="#fff"
          strokeOpacity="0.24"
          strokeWidth="2"
          rx="15"
          shapeRendering="crispEdges"
        ></rect>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M64.614 38.943c1.476-2.59 5.297-2.59 6.773 0l12.787 22.444C85.608 63.906 83.74 67 80.787 67H55.213c-2.954 0-4.821-3.094-3.386-5.613l12.787-22.444zm5.053 21.39a1.667 1.667 0 11-3.334 0 1.667 1.667 0 013.334 0zM69.25 47a1.25 1.25 0 00-2.5 0v8.333a1.25 1.25 0 102.5 0V47z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_di_1719_6496"
          width="136"
          height="136"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="16"></feOffset>
          <feGaussianBlur stdDeviation="12"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.470588 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1719_6496"></feBlend>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1719_6496" result="shape"></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="12"></feGaussianBlur>
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"></feColorMatrix>
          <feBlend in2="shape" result="effect2_innerShadow_1719_6496"></feBlend>
        </filter>
      </defs>
    </svg>
    <h2 className="text-center text-[24px] font-medium">
      Siz rostan ham tizimdan
      <br />
      chiqmoqchimisiz?
    </h2>
    <div className="mt-10 w-full flex flex-col md:flex-row justify-between items-center gap-4">
      <DialogClose className="w-full">
        <Button variant={"ghost"} className="w-full border-2">
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="136"
      height="136"
      fill="none"
      viewBox="0 0 136 136"
    >
      <g filter="url(#filter0_di_1719_6516)">
        <rect
          width="88"
          height="88"
          x="24"
          y="8"
          fill="#EB5757"
          rx="16"
          shapeRendering="crispEdges"
        ></rect>
        <rect
          width="86"
          height="86"
          x="25"
          y="9"
          stroke="#fff"
          strokeOpacity="0.24"
          strokeWidth="2"
          rx="15"
          shapeRendering="crispEdges"
        ></rect>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M64.613 38.943c1.476-2.59 5.297-2.59 6.773 0l12.787 22.444C85.608 63.906 83.741 67 80.787 67H55.213c-2.954 0-4.822-3.094-3.387-5.613l12.787-22.444zm5.053 21.39a1.667 1.667 0 11-3.333 0 1.667 1.667 0 013.333 0zM69.25 47a1.25 1.25 0 00-2.5 0v8.333a1.25 1.25 0 102.5 0V47z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_di_1719_6516"
          width="136"
          height="136"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="16"></feOffset>
          <feGaussianBlur stdDeviation="12"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.921569 0 0 0 0 0.341176 0 0 0 0 0.341176 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1719_6516"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1719_6516"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="12"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"></feColorMatrix>
          <feBlend in2="shape" result="effect2_innerShadow_1719_6516"></feBlend>
        </filter>
      </defs>
    </svg>
    <h2 className="text-center text-[24px] font-medium">
      Siz rostan ham tizimdan
      <br />
      chiqmoqchimisiz?
    </h2>
    <div className="mt-10 w-full flex flex-col md:flex-row justify-between items-center gap-4">
      <DialogClose className="w-full">
        <Button variant={"ghost"} className="w-full border-2">
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
