
import './RightPanel.scss';
import { ProfileMain } from "./ProfilMain.jsx";
import { ProfileSuggested } from "./ProfilSuggested";

export const RightPanel = props => {
   
   return (
   
      <div className="RightPanel">
         <ProfileMain />
         <div className="RightPanel__desc">
            <p className="RightPanel__desc-label">Propozycje dla Ciebie</p>
            <p className="RightPanel__link">Zobacz wszystkich</p>
         </div>
         <ProfileSuggested color='red'>
            lorem 234
         </ProfileSuggested>
         <ProfileSuggested color='green'>
            szybki23
         </ProfileSuggested>
         <ProfileSuggested color='blue'>
            olafSz_
         </ProfileSuggested>
         <ProfileSuggested color='orange'>
            okasia1
         </ProfileSuggested>
         <ProfileSuggested color='purple'>
            kubusP
         </ProfileSuggested>
      </div>
   
   )
}