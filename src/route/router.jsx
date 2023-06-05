import { createBrowserRouter, Link } from "react-router-dom";
import { ErrorView } from "../pages/ErrorView.jsx";
import { MainView } from "../pages/MainView";
import { ExploreView } from "../pages/ExploreView";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainView />,
      errorElement: <ErrorView />,
   },
   {
      path: "/explore",
      element: <ExploreView />,
   },
]);