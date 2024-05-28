import { Button } from "@/components/shadcn/ui/button.tsx"
import { ArrowLeftIcon, DownloadIcon, FileIcon } from "@/components/Icons.tsx"
import { useNavigate } from "react-router-dom"
import video from "@/assets/edbvstkuzvo2r5n4zlj4.mp4"
import videoImg from "@/assets/images/innre-pages/videoPlayer.png"
import VideoPlayer from "@/components/VideoPlayer.tsx"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/shadcn/ui/accordion.tsx"
import Videos from "./Videos.tsx"
import VideoDescription from "@/views/inner-pages/course-detail/VideoDescription.tsx"
import Comments from "@/views/inner-pages/course-detail/Comments.tsx"
import LastViewedCourses from "@/views/inner-pages/course-detail/LastViewedCourses.tsx"

const CourseDetail = () => {
  const navigate = useNavigate()

  return (
    <section className="mb-24">
      {/*Title and Back button    //start*/}
      <div className="flex sm:items-center mb-10 max-sm:flex-col">
        <Button className="bg-white hover:bg-whitePurple text-black" onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
          <span className="ml-1">Ortga</span>
        </Button>
        <p className="font-semibold text-[1.8rem] ml-10 max-sm:text-[1.6rem] max-sm:mt-5">
          2.1 Figma dasturini o'rnatish va dastur interfeysi bilan tanishish
        </p>
      </div>
      {/*Title and Back button    //finish*/}

      <div className="flex gap-10 items-start max-lg:flex-col">
        <div className="w-[80%] max-lg:w-full">
          <div className="bg-white rounded-3xl p-10 max-lg:w-full max-sm:p-5">
            <VideoPlayer url={video} imgUrl={videoImg} />

            {/*Video downloading    //start*/}
            <div className="flex justify-between items-center mt-10 max-sm:flex-col">
              <div className="flex items-center max-sm:text-[1.5rem]">
                <FileIcon />
                <span className="ml-1 mr-4 pr-4 border-r-2">Darslik uchun resurslar.pdf</span>
                <span className="font-medium text-grey64">523</span>
              </div>

              <Button className="bg-black hover:bg-opacityDark70 text-white max-sm:w-full max-sm:mt-5">
                <span className="mr-3 max-sm:text-[1.5rem]">Yuklab olish</span>
                <DownloadIcon />
              </Button>
            </div>
            {/*Video downloading    //finish*/}

            {/*  Description     //start*/}
            <VideoDescription />
            {/*  Description     //finish*/}
          </div>

          <Comments />
        </div>

        {/*Course videos (accordion)    //start*/}
        <div className="w-[400px] bg-white rounded-3xl pl-7 py-5 max-lg:w-full">
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem className="border-none" value={"45"}>
              <AccordionTrigger className="relative data-[state=open]:text-black pb-12 pr-7">
                <div>
                  <p>UX/UI kurslari</p>
                  <p className="absolute bottom-0 text-[1.3rem] text-grey64 pb-2 font-[400]">1 video - 47 videodan</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Videos />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/*Course videos (accordion)    //finish*/}
      </div>

      <LastViewedCourses />
    </section>
  )
}
export default CourseDetail
