import Backdrop from "@mui/material/Backdrop";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './PhotoFullScreen.scss';

export const PhotoFullScreen = props => {
   
   return (
      <Backdrop
         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backdropFilter: 'blur(5px)' }}
         open={true}
         onClick={props.close}
      >
         <div className="PhotoFullScreen">
            <img src={props.url} alt={props.alt} className="PhotoFullScreen__img"/>
            <h2 className="PhotoFullScreen__desc">
               {props.alt}
            </h2>
            <button className="PhotoFullScreen__close" onClick={props.close}>
               <HighlightOffIcon sx={{ fontSize: '8rem' }}/><p className="PhotoFullScreen__close-text">Zamknij</p>
            </button>
         </div>
      </Backdrop>
   )
}
