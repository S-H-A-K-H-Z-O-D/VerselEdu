import { AuthLayout, ConfirmationPhone, NameAuth, PasswordAuth, PhoneAuth } from "@/views"
import { RouteObject } from "react-router-dom"

export default function publicRoutes(): RouteObject[] {
  return [
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "phone", element: <PhoneAuth /> },
        { path: "confirmation", element: <ConfirmationPhone /> },
        { path: "name", element: <NameAuth /> },
        { path: "pwd", element: <PasswordAuth /> },
      ],
    },
    { path: "*", element: "not found" },
  ]
}
