import { videoDescriptionData } from "@/constants"
import { useState } from "react"
import banner3 from "@/assets/images/innre-pages/decs_boxes.png"

const VideoDescription = () => {
  const data = videoDescriptionData
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <section className="mt-5 border-t-2 pt-7">
      <h5 className="text-[1.8rem] font-medium pb-5 max-sm:text-[1.6rem]">Dars tavsiflari</h5>

      <div className="bg-bgGreyLight p-7 rounded-3xl">
        <p className="text-[1.8rem] font-medium mb-5 max-sm:text-[1.6rem]">
          Figma dasturini o'rnatish va dastur interfeysi bilan tanishish
        </p>

        <div className={`flex ${showMore ? "flex-col" : ""}`}>
          <div className={`${showMore ? "" : "line-clamp-1"} text-[1.5rem]`}>
            <ol className="list-decimal list-inside mb-4 text-grey64">
              {data.steps.map((step, index) => (
                <li key={index} className="mb-2">
                  {step}
                </li>
              ))}
            </ol>

            <h2 className="text-[1.5rem] font-light underline text-deepBlue mb-5 mt-10">
              Bajarish uchun asosiy qadamlar:
            </h2>
            <div className="flex gap-4 mb-4 max-[1320px]:flex-col">
              {data.codeExamples.map((example, index) => (
                <img
                  key={index}
                  src={example}
                  alt={`Code Example ${index + 1}`}
                  className=" w-full max-w-[400px] border rounded"
                />
              ))}
            </div>
            <p className="mb-4 text-grey64">{data.explanation}</p>
            <h2 className="text-[1.5rem] font-light underline text-deepBlue mb-5">O'quvchilar uchun tushuncha:</h2>
            <p className="mb-2 text-grey64">Mana muhimlariga quyidagi kodni yozamiz:</p>
            <pre className="text-grey64 p-4 rounded mb-4">
              <code>{data.codeSnippet}</code>
            </pre>
            <p className="mb-4 text-grey64">{data.codeExplanation}</p>
            <p className="mb-4 text-grey64">{data.mainMessage}</p>

            <h2 className="text-[1.5rem] font-light underline text-deepBlue mb-5">Bajarish uchun asosiy qadamlar:</h2>
            <img src={banner3} alt="Boxes" className="w-full border rounded mb-4 max-w-[400px]" />
            <p className="mb-4 text-grey64">{data.organizerDescription}</p>
            <h2 className="text-[1.5rem] font-light underline text-deepBlue mb-5">
              O'zgaruvchilarni nom berishda quyidagilarga e'tibor qiling:
            </h2>
            <ul className="list-disc list-inside mb-4 text-grey64">
              {data.organizerRules.map((rule, index) => (
                <li key={index} className="mb-2">
                  {rule}
                </li>
              ))}
            </ul>
            <h2 className="text-[1.5rem] font-light underline text-deepBlue mb-5">O'zgaruvchiga misollar:</h2>
            <ul className="list-disc list-inside mb-4 text-grey64">
              {data.organizerExamples.map((example, index) => (
                <li key={index} className="mb-2">
                  {example}
                </li>
              ))}
            </ul>
            <p className="mb-4 text-grey64">{data.closingMessage}</p>
          </div>

          <div className={`${showMore ? "mt-10" : ""}`}>
            <button onClick={toggleShowMore} className="text-deepBlue">
              {showMore ? "Yopish" : "...yana"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default VideoDescription
