
import './TopBar.scss';
import { TextField } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram.js";

export const TopBar = props => {
   
   return (
      <div className="TopBar">
         <div className="TopBar__logo">
            <InstagramIcon sx={{fontSize: '1.5em', color: '#dc2525'}}/>
            <p>Fake-Insta</p>
         </div>
      </div>
   )
}