import { memo, useState } from "react";
import { SkeletonPhoto } from "./SkeletonPhoto";
import './SinglePhoto.scss';
import { getRandomGridSpanSize } from "../utils";

import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { styled } from "@mui/material";

export const SinglePhoto = memo(function SinglePhoto(props) {
   
   const [isLoaded, setIsLoaded] = useState(false);
   const photo = props.source;
   
   const handleIsLoaded = () => {
      setIsLoaded(true);
   }
   
   console.log('render')
   
   return (
      <div className={"SinglePhoto " + getRandomGridSpanSize(photo.id, photo.width, photo.height)}>
         {!isLoaded
            ? <SkeletonPhoto />
            : null}
         <div className="">
            <img
               alt={'Autor zdjęcia: ' + props.source.author}
               src={photo['download_url']}
               className="SinglePhoto__img"
               onLoad={handleIsLoaded}
               onClick={props.fullScreen}
            />
            <p className='SinglePhoto__fullSizeIcon'><FullScreenIcon/></p>
         </div>
      </div>
   )
})

const FullScreenIcon = styled(OpenInFullIcon)(({ theme }) => ({
   color: 'rgba(255,255,255,0.7)',
   fontSize: '6rem',
   margin: 5,
}));