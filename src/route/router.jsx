import { createBrowserRouter, Link } from "react-router-dom";
import { PhotoGallery } from "../components/PhotoGallery.jsx";
import { ErrorView } from "../pages/ErrorView.jsx";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <PhotoGallery />,
      errorElement: <ErrorView />,
   },
   {
      path: "/test",
      element: <div>
         <Link to={'/'}>Strona Główna</Link>
      </div>,
   },
]);