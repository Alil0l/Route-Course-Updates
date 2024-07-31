import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Layout from "./components/Layout/Layout";

function App() {
  const routuer = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Home",
          element: <Home />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Portfolio",
          element: <Portfolio />,
        },

        {
          path: "/Contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routuer} />;
}

export default App;
