
import './TopBar.scss';
import InstagramIcon from "@mui/icons-material/Instagram.js";
import { useNavigate } from "react-router-dom";

export const TopBar = props => {
   
   const navigate = useNavigate();
   
   return (
      <div className="TopBar">
         <div className="TopBar__logo" onClick={() => navigate('/')}>
            <InstagramIcon sx={{fontSize: '1.5em', color: '#dc2525'}}/>
            <p>Fake-Insta</p>
         </div>
      </div>
   )
}
