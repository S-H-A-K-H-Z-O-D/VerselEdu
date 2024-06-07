import { privacyPolicy } from "@/constants"
import React from "react"

export function Sections() {
  return privacyPolicy.map((item) => (
    <section key={item.sectionId} id={item.sectionId} className="py-4 flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl md:text-4xl font-semibold">{item.heading}</h2> <span>{item.date}</span>
      </div>
      <p>
        {item.body.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
            <br />
          </React.Fragment>
        ))}
      </p>
    </section>
  ))
}
