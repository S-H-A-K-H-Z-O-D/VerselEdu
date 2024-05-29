import { GraduationCapIcon, NotepadTextIcon } from "@/components/Icons"
import { ExperienceCard } from "./Experience-card"
import { useState } from "react"

export default function Experiences() {
  const [educationalData, setEducationalData] = useState([
    {
      position: "Dasturiy Injenering",
      name: "Toshkent Axborotot Texnologoiyalar Universiteti",
      date: new Date(),
    },
    {
      position: "Axborot tizimi va jamoatchilik bilan aloqador",
      name: "O'zbekiston Davlat Jahon Tillari Universiteti",
      date: new Date(),
    },
  ])
  const [experience, setExperience] = useState([])

  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="text-4xl font-medium">Shaxsiy tajribalarim</h1>
      <hr className="w-full h-2 mt-8 max-sm:mt-6" />
      <div className="w-full p-8 max-sm:6 flex flex-col sm:flex-row justify-start items-center gap-6 max-sm:gap-4">
        <ExperienceCard
          edu
          title="Ta'lim"
          addButtonTitle="Ta'lim qo'shish"
          Icon={GraduationCapIcon}
          emptyDescriptionTitle="Ta'lim tajribasi qo'shilmagan"
          emptyDescriptionBody="Bu yerda qayerda ta'lim olganingizni ulashishingiz mumkin"
          state={educationalData}
          setState={setEducationalData}
        />
        <ExperienceCard
          experience
          title="Ish tajribasi"
          addButtonTitle="Ish tajribasini qo'shish"
          Icon={NotepadTextIcon}
          emptyDescriptionTitle="Ish tajribasi qo'shilmagan"
          emptyDescriptionBody="Bu kursdan oldin qayerda tajriba orttirganingizni ulashishingiz mumkin"
          state={experience}
          setState={setExperience}
        />
      </div>
    </div>
  )
}
