import './ProfileSuggested.scss';
import FaceIcon from "@mui/icons-material/Face.js";

export const ProfileSuggested = props => {
   
   return (
      <div className="ProfileSuggested">
         <FaceIcon sx={{fontSize: '1em', color: props.color}}/>
         <div className="ProfileSuggested__desc">
            <p className="ProfileSuggested__desc-nick">{props.children}</p>
            <p className="ProfileSuggested__desc-name">propozycja dla Ciebie</p>
         </div>
         <div className="ProfileSuggested__link">
            <p className="ProfileSuggested__desc-link">Obserwuj</p>
         </div>
      </div>
   )
}