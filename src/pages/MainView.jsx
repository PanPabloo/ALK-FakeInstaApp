import { NavBarBottom } from "../components/NavBars/NavBarBottom.jsx";
import { RightPanel } from "../components/RigthPanel/RightPanel.jsx";

import './MainView.scss';
import { TopBar } from "../components/NavBars/TopBar.jsx";
import { Posts } from "../components/Posts/Posts.jsx";

export const MainView = props => {
   
   return (
      <>
         <TopBar />
         <NavBarBottom/>
         <div className="MainView">
            <div className="MainContainer">
               <div className="MainContainer__main">
                  <Posts />
               </div>
               <div className="MainContainer__aside">
                  <RightPanel/>
               </div>
            </div>
         </div>
      </>
   )
}