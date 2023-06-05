import { NavBarBottom } from "../components/NavBarBottom";
import { PhotoGallery } from "../components/PhotoGallery";
import { TopBar } from "../components/TopBar.jsx";
import './ExploreView.scss';

export const ExploreView = props => {
   
   return (
      
      <>
         <div className="ExploreView__navbar">
            <TopBar />
            <NavBarBottom/>
         </div>
         <div className="ExploreView">
            {/*<div className="MainContainer">*/}
               {/*<div className="MainContainer__main">*/}
                  <PhotoGallery/>
               {/*</div>*/}
            {/*</div>*/}
         </div>
      </>
   
   )
}