import { RouteObject, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import App from "./App";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "",
    Component: App,
    children: [
      {
        path: "/",
        Component: HomePage
      },
      {
        path: "/about",
        Component: AboutPage
      },
      {
        path: "/contact",
        Component: ContactPage
      }
    ]
  }
]);
