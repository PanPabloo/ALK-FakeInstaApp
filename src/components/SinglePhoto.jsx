import { memo, useState } from "react";
import { SkeletonPhoto } from "./SkeletonPhoto";
import './SinglePhoto.scss';
import { getRandomGridSpanSize } from "../utils";

export const SinglePhoto = (props) => {
   
   const [isLoaded, setIsLoaded] = useState(false);
   const photo = props.source;
   
   const handleIsLoaded = () => {
      setIsLoaded(true);
   }
   console.log('render single photo');
   return (
      <div className={"SinglePhoto " + getRandomGridSpanSize(photo.id, photo.width, photo.height)}>
         {!isLoaded
            ? <SkeletonPhoto />
            : null}
         <div className="photoContainer">
            <img
               alt={'Autor zdjęcia: ' + props.source.author}
               src={photo['download_url']}
               className="SinglePhoto__img"
               onLoad={handleIsLoaded}
               onClick={props.fullScreen}
            />
         </div>
      </div>
   )
}