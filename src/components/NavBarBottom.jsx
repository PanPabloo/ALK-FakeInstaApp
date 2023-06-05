import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreIcon from '@mui/icons-material/Explore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SendIcon from '@mui/icons-material/Send';
import FaceIcon from '@mui/icons-material/Face';
import InstagramIcon from '@mui/icons-material/Instagram';

import './NavBarBottom.scss';
import { NavBarBottomItem } from "./NavBarBottomItem";

export const NavBarBottom = props => {
   
   const handleStopDefaultAnchor = (event) => event.preventDefault();
   
   return (
   
      <nav className="NavBarBottom">
         <ul className="NavBarBottom__list">
            <div className="NavBarBottom__logo">
               <NavBarBottomItem handleStopDefaultAnchor={handleStopDefaultAnchor} label="FakeInsta">
                  <InstagramIcon sx={{fontSize: '5em', color: '#dc2525'}}/>
               </NavBarBottomItem>
            </div>
            <NavBarBottomItem handleStopDefaultAnchor={handleStopDefaultAnchor} label="Strona główna">
               <HomeOutlinedIcon sx={{fontSize: '5em'}}/>
            </NavBarBottomItem>
            <NavBarBottomItem handleStopDefaultAnchor={handleStopDefaultAnchor} label="Odkrywaj">
               <ExploreIcon sx={{fontSize: '5em'}}/>
            </NavBarBottomItem>
            <NavBarBottomItem handleStopDefaultAnchor={handleStopDefaultAnchor} label="Rolki">
               <VideoLibraryIcon sx={{fontSize: '5em'}}/>
            </NavBarBottomItem>
            <NavBarBottomItem handleStopDefaultAnchor={handleStopDefaultAnchor} label="Utwórz">
               <AddBoxIcon sx={{fontSize: '5em'}}/>
            </NavBarBottomItem>
            <NavBarBottomItem handleStopDefaultAnchor={handleStopDefaultAnchor} label="Wiadomości">
               <SendIcon sx={{fontSize: '5em'}}/>
            </NavBarBottomItem>
            <NavBarBottomItem handleStopDefaultAnchor={handleStopDefaultAnchor} label="Profil">
               <FaceIcon sx={{fontSize: '5em'}}/>
            </NavBarBottomItem>
         </ul>
      </nav>
   )
}