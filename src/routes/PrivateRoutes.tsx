import { RouteObject } from "react-router-dom"
import { Layout, Home, Actives, Courses, CoursePlan, CourseDetail, Payment, ProfileLayout } from "@/views"

export default function privateRoutes(): RouteObject[] {
  return [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "actives", element: <Actives /> },
        { path: "courses", element: <Courses /> },
        { path: "courses/plan", element: <CoursePlan /> },
        { path: "courses/detail", element: <CourseDetail /> },
        { path: "payment", element: <Payment /> },
        {
          path: "profile",
          element: <ProfileLayout />,
          children: [
            { path: "info", element: "info" },
            { path: "experiences", element: "experiences" },
            { path: "sertifications", element: "sertifications" },
            { path: "payment_history", element: "payment_history" },
            { path: "devices", element: "devices" },
          ],
        },
      ],
    },
    { path: "*", element: "not found" },
  ]
}
