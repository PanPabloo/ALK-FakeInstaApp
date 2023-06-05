import { createBrowserRouter, Link } from "react-router-dom";
import { PhotoGallery } from "../components/PhotoGallery.jsx";
import { ErrorView } from "../pages/ErrorView.jsx";
import { MainView } from "../pages/MainView";

export const router = createBrowserRouter([
   {
      path: "/",
      // element: <PhotoGallery />,
      element: <MainView />,
      errorElement: <ErrorView />,
   },
   {
      path: "/test",
      element: <div>
         <Link to={'/'}>Strona Główna</Link>
      </div>,
   },
]);