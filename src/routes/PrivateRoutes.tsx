import { RouteObject } from "react-router-dom"
import {
  Layout,
  Home,
  Actives,
  Courses,
  CoursePlan,
  CourseDetail,
  Payment,
  ProfileLayout,
  Certification,
  PaymentHistory,
  ProfileInfo,
  NotificationLayout,
  Experiences,
  Devices,
  ChatField,
} from "@/views"

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
          path: "notifications",
          element: <NotificationLayout />,
          children: [{ path: "user/:id", element: <ChatField /> }],
        },
        {
          path: "profile",
          element: <ProfileLayout />,
          children: [
            { path: "info", element: <ProfileInfo /> },
            { path: "experiences", element: <Experiences /> },
            { path: "certifications", element: <Certification /> },
            { path: "payment_history", element: <PaymentHistory /> },
            { path: "devices", element: <Devices /> },
          ],
        },
      ],
    },
    { path: "*", element: "not found" },
  ]
}
