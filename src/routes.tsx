import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

/**
 * Application Routes Configuration
 * Defines all routes and their corresponding components
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "track",
        element: <Home />, // Track page uses Home component (tracking functionality)
      },
    ],
  },
]);

/**
 * AppRouter Component
 * Provides routing functionality to the entire application
 */
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
