import { useState } from "react";
import { SkeletonPhoto } from "./SkeletonPhoto";
import './SinglePhoto.scss';
import { getRandomGridSpanSize } from "../utils";

export const SinglePhoto = props => {
   
   const [isLoaded, setIsLoaded] = useState(false);
   const photoUrl = props.source['download_url'];
   
   const handleIsLoaded = () => {
      setIsLoaded(true);
   }
   
   return (
      <div className={"SinglePhoto " + getRandomGridSpanSize(photoUrl)}>
         {/*{!isLoaded*/}
         {/*   ? <SkeletonPhoto />*/}
         {/*   : null}*/}
         <div className="photoContainer">
         <img
            alt={'Autor zdjęcia: ' + props.source.author}
            src={photoUrl}
            className="SinglePhoto__img"
            onLoad={handleIsLoaded}
         />
         
         </div>
      </div>
   )
}