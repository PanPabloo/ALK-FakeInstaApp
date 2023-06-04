import Backdrop from "@mui/material/Backdrop";
import './PhotoFullScreen.scss';

export const PhotoFullScreen = props => {
   
   return (
      <Backdrop
         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
         open={true}
      >
         <div className="PhotoFullScreen">
            <img src={props.url} alt={props.alt} className="PhotoFullScreen__img"/>
            <h2 className="PhotoFullScreen__desc">
              {props.alt}
            </h2>
            <button className="PhotoFullScreen__close" onClick={props.close}>
               <i className="far fa-times-circle PhotoFullScreen__close-fontAwsome"></i><p className="PhotoFullScreen__close-text">Zamknij</p>
            </button>
         </div>
      </Backdrop>
   )
}
