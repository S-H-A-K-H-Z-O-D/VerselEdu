import { Button } from "@/components/shadcn/ui/button.tsx"
import user2 from "@/assets/images/innre-pages/user2.png"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/shadcn/ui/accordion.tsx"
import { comment_data } from "@/constants"
import { useState } from "react"
import user from "@/assets/images/innre-pages/user.png"

const AnswerAccordion = ({ data }: any) => {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      <AccordionItem className="border-none" value={"45"}>
        <AccordionTrigger className="relative data-[state=open]:text-black pb-5 pr-7 flex justify-start gap-5 comments">
          <p className="text-[1.5rem] text-deepBlue">(1) Javoblar</p>
        </AccordionTrigger>
        <AccordionContent className="space-y-5">
          {/* eslint-disable-next-line react/prop-types */}
          {data.map((item: any, index: number) => (
            <div key={index} className="flex items-start gap-6">
              <img src={item.img} width={40} height={40} alt="user profile picture" className="rounded-full" />
              <div>
                <div className="flex items-center text-[1.2rem]">
                  <p className="font-medium">{item.admin}</p>
                  <p className="font-light text-grey64 border-l-2 ml-4 pl-4">{item.time}</p>
                  <p className="font-light text-grey64 border-l-2 ml-4 pl-4">{item.day}</p>
                </div>
                <p className="text-[1.5rem]">{item.comment}</p>
              </div>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

const Comments = () => {
  const [comments, setComments] = useState(comment_data)

  const formData = {
    img: user,
    name: "Ali Yazdiy",
    time: "23.48",
    day: "09.01.2024",
    comment: "Hammasi yaxshi ketyapti rahmat!!!!!",
  }

  // Add a comment
  const onCommit = (e: any) => {
    e.preventDefault()

    setComments((prev) => [...prev, formData])
    formData.comment = ""
  }

  return (
    <section className="bg-white rounded-3xl p-10 mt-10 max-sm:p-5">
      <div className="flex justify-between items-center mb-10">
        <h5 className="text-[2.2rem] font-medium">Savol va javoblar</h5>
        <p className="text-[1.5rem] text-grey64">32 ta savollar</p>
      </div>

      {/*  Inputting Question     //start*/}
      <div className="flex items-start gap-5">
        <img src={user2} width={55} height={55} alt="user profile picture" className="rounded-full" />
        <form className="w-full" onSubmit={onCommit}>
          <input
            onChange={(e) => (formData.comment = e.target.value)}
            type="text"
            required={true}
            className="
          w-full border-b focus:outline-none py-3"
          />
          <div className="flex justify-end mt-5">
            <Button
              variant="ghost"
              className="max-sm:px-4 max-sm:h-[40px] max-sm:rounded-xl text-[1.5rem] max-sm:text-[1.3rem]"
            >
              Bekor qilish
            </Button>
            <Button
              type={"submit"}
              className="max-sm:px-4 max-sm:h-[40px] max-sm:rounded-xl text-[1.5rem] max-sm:text-[1.3rem]"
            >
              Jo'natish
            </Button>
          </div>
        </form>
      </div>
      {/*  Inputting Question     //finish*/}

      {/*  Users comments     //start*/}
      <div className="space-y-8 px-3 mt-7 max-sm:px-0">
        {comments.map((item, index) => (
          <div key={index} className="flex items-start gap-6">
            <img src={item.img} width={50} height={50} alt="user profile picture" className="rounded-full" />
            <div>
              <div className="flex items-center text-[1.2rem] max-sm:text-[1rem]">
                <p className="font-medium">{item.name}</p>
                <p className="font-light text-grey64 border-l-2 ml-4 pl-4">{item.time}</p>
                <p className="font-light text-grey64 border-l-2 ml-4 pl-4">{item.day}</p>
              </div>
              <p className="text-[1.5rem] max-sm:text-[1.3rem]">{item.comment}</p>

              {/* Replied comment*/}
              {item.reply && <AnswerAccordion data={item.reply} />}
            </div>
          </div>
        ))}
      </div>
      {/*  Users comments     //finish*/}
    </section>
  )
}
export default Comments
