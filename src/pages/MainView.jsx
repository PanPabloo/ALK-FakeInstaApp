import { NavBarBottom } from "../components/NavBarBottom";
import { RightPanel } from "../components/RightPanel.jsx";

import './MainView.scss';
import { PhotoGallery } from "../components/PhotoGallery";
import { TopBar } from "../components/TopBar.jsx";

export const MainView = props => {
   
   
   return (
      
      <>
         <TopBar />
         <NavBarBottom/>
         <div className="MainView">
            <div className="MainContainer">
               <div className="MainContainer__main">
                  test
                  {/*<PhotoGallery/>*/}
               </div>
               <div className="MainContainer__aside">
                  <RightPanel/>
               </div>
            </div>
         </div>
      </>

   )
}