import Header from "@/views/personal-cabinet/home/header/Header.tsx"
import FamousCourses from "@/views/personal-cabinet/home/FamousCourses.tsx"
import NewCourses from "@/views/personal-cabinet/home/NewCourses.tsx"

const Home = () => {
  return (
    <div className="mb-24">
      <Header />
      <FamousCourses />
      <NewCourses />
    </div>
  )
}
export default Home
