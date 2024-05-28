import { RouterProvider, createBrowserRouter } from "react-router-dom"
import privateRoutes from "./routes/PrivateRoutes"
import publicRoutes from "./routes/PublicRoutes"
import Root from "./views/Root"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [...(privateRoutes() || []), ...publicRoutes()],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
