import { useState } from "react";
import { SkeletonPhoto } from "./SkeletonPhoto";
import './SinglePhoto.scss';

export const SinglePhoto = props => {
   
   const [isLoaded, setIsLoaded] = useState(false);
   const photoUrl = props.source['download_url'];
   
   const handleIsLoaded = () => {
      setIsLoaded(true);
   }
   
   const gridSpanSize = (url) => {
      const regExp = /\/id\/(?<id>\d+)\/(?<xSize>\d+)\/(?<ySize>\d+)/g;
      const { id, xSize, ySize } = url.matchAll(regExp).next().value.groups;
      const random = ((xSize + ySize) / id + "").charAt(1);
      console.log(random)
      if (random > 5) return xSize < ySize ? 'row-span-2' : 'col-span-2';
   }
   
   return (
      <div className={"SinglePhoto " + gridSpanSize(photoUrl)}>
         {!isLoaded
            ? <SkeletonPhoto />
            : null}
         <img
            alt={'Autor zdjęcia: ' + props.source.author}
            src={photoUrl}
            className="SinglePhoto__img"
            onLoad={handleIsLoaded}
         />
      </div>
   )
}