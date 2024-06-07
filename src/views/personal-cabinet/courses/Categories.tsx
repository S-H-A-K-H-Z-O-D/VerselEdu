const Categories = () => {
  const categories = [
    { name: "Barcha kurslar", count: 86 },
    { name: "Frontend", count: 2 },
    { name: "Mobil", count: 12 },
    { name: "Backend", count: 4 },
    { name: "Full Stack", count: 34 },
    { name: "Dizayn", count: 25 },
  ]

  return (
    <>
      <div className="flex items-center justify-between p-7 border-b-2 border-borderGrey">
        <h6 className="text-[clamp(1.5rem,_1.5vw,_1.8rem)] font-semibold">Kategoriya</h6>
        <p className="bg-bgGreyLight w-14 h-14 text-darkBlue rounded-full flex items-center justify-center">86</p>
      </div>
      {categories.map((item, index) => (
        <div key={index} className="flex items-center justify-between py-[clamp(0.8rem,_0.8vw,_1.25rem)] px-7">
          <h6 className="text-[clamp(1.4rem,_1.4vw,_1.6rem)] font-medium">{item.name}</h6>
          <p className="bg-bgGreyLight w-14 h-14 text-darkBlue rounded-full flex items-center justify-center">
            {item.count}
          </p>
        </div>
      ))}
    </>
  )
}
export default Categories
