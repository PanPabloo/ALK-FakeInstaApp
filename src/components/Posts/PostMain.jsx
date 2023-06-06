import FaceIcon from '@mui/icons-material/Face';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import './PostMain.scss';

export const PostMain = props => {
   
   const color = props.species === 'Human' ? '#ffc5ac' : '#a6ffa9'
   
   return (
      <div className="PostMain">
         <div className="PostMain__header" style={{backgroundColor: color}}>
            <div className="PostMain__headerAvatar">
               {props.species === 'Human'
                  ? <FaceIcon sx={{fontSize: 40, padding: '5px'}}/>
                  : <RocketLaunchIcon sx={{fontSize: 40, padding: '5px'}}/>
               }
               {props.name}
            </div>
            <div className="PostMain__headerDots">
               <MoreHorizIcon sx={{fontSize: 35, padding: '5px'}}/>
            </div>
         </div>
         <div className="PostMain__imageContainer">
            <img className="PostMain__image" src={props.imgSrc} alt={props.name}/>
         </div>
         <div className="PostMain__footer PostMainFooter">
            <div className="PostMainFooter__icons">
               <div>
                  <FavoriteBorderIcon sx={{fontSize: 35, padding: '5px'}}/>
                  <ChatBubbleOutlineIcon sx={{fontSize: 35, padding: '5px'}}/>
                  <SendIcon sx={{fontSize: 35, padding: '5px'}}/>
               </div>
               <div>
                  <BookmarkIcon sx={{fontSize: 35, padding: '5px'}}/>
               </div>
            </div>
            <div className="PostMainFooter__label">
               <strong>{props.name}</strong><span className="verticalSeparator">|</span>{props.locationName}
            </div>
         </div>
      </div>
   )
}