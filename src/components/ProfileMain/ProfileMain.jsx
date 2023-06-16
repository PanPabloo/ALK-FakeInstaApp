import './ProfileMain.scss';
import FaceIcon from "@mui/icons-material/Face.js";

export const ProfileMain = () => {
   
   return (
      <div className="ProfileMain">
         <FaceIcon sx={{ fontSize: '1em' }}/>
         <div className="ProfileMain__desc">
            <p className="ProfileMain__desc-nick">jan.kowalski102</p>
            <p className="ProfileMain__desc-name">Jan Kowalski</p>
         </div>
         <div className="ProfileMain__link">
            <p className="ProfileMain__desc-link">Przełącz</p>
         </div>
      </div>
   )
}