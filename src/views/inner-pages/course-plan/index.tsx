import { ArrowLeftIcon, BlueVideoPlayIcon } from "@/components/Icons.tsx"
import { Button } from "@/components/shadcn/ui/button.tsx"
import { useNavigate } from "react-router-dom"
import Card from "@/views/inner-pages/course-plan/Card.tsx"
import img from "@/assets/images/home/card3.png"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/shadcn/ui/accordion.tsx"
import { course_plan } from "@/constants"

const CoursePlan = () => {
  const navigate = useNavigate()

  return (
    <div className="flex gap-10 max-[900px]:flex-col min-[520px]:mb-52">
      <div className="w-[20%] min-w-[250px] max-[900px]:w-full">
        <Button className="bg-white hover:bg-whitePurple text-black mb-10" onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
          <span className="ml-1">Ortga</span>
        </Button>

        <Card img={img} title="UX/UI dizayn " video="43" test="12" />
      </div>
      <div className="w-[80%] bg-white rounded-3xl p-10 h-[10rem]] max-[900px]:w-full max-[450px]:p-5">
        <Accordion type="single" collapsible className="space-y-[clamp(0.75rem,_1vw,_1.75rem)]">
          {course_plan.map((item, index) => {
            const isLast = index === course_plan.length - 1

            return (
              <AccordionItem value={item.title} key={index} className={`border-borderGrey ${isLast && "border-none"}`}>
                <AccordionTrigger className="relative text-start text-[clamp(1.6rem,_1.6vw,_2rem)]">
                  {item.inProgress && (
                    <span className="absolute right-12">
                      <BlueVideoPlayIcon />
                    </span>
                  )}
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </div>
  )
}
export default CoursePlan
