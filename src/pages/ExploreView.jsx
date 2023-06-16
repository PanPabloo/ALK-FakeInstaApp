import { NavBarBottom } from "../components/NavBars/NavBarBottom.jsx";
import { PhotoGallery } from "../components/ExploreGallery/PhotoGallery.jsx";
import { TopBar } from "../components/NavBars/TopBar.jsx";
import './ExploreView.scss';

export const ExploreView = () => {
   
   return (
      <>
         <div className="ExploreView__navbar">
            <TopBar/>
            <NavBarBottom/>
         </div>
         <div className="ExploreView">
            <PhotoGallery/>
         </div>
      </>
   
   )
}