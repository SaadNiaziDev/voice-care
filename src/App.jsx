import { createHashRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components";
import { About, Contact, Home, Services } from "./pages";
import NotFound from "./pages/NotFound";

function App() {
  const router = createHashRouter( [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <NotFound />,
        }
      ],
    },
  ] );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
