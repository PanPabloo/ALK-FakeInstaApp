import { useEffect, Fragment, useCallback, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from "@tanstack/react-query";

import { SinglePhoto } from "./SinglePhoto.jsx";
import BackdropSinglePage from "../BackdropSinglePage.jsx";
import { InfoDialog } from "../InfoDialog.jsx";
import { getPhotos } from "../../api/getPhotos.js";
import { PhotoFullScreen } from "./PhotoFullScreen.jsx";
import './PhotoGallery.scss'


export const PhotoGallery = props => {
   
   const [isFullScreen, setIsFullScreen] = useState(false);
   const fullPhotoUrl = useRef(null);
   
   const {
      data,
      error,
      fetchNextPage,
      status,
   } = useInfiniteQuery({
         queryKey: ['photos'],
         queryFn: getPhotos,
         getNextPageParam: (lastPage) => lastPage.isNextPage,
      }
   );

   const { ref, inView } = useInView({
      rootMargin: '100px'
   });
   
   useEffect(() => {
      if (inView) {
         fetchNextPage()
      }
   }, [inView]);
   
   const handleFullScreen = useCallback(((e) => {
      fullPhotoUrl.current = {
         url: e.target.src,
         alt: e.target.alt
      };
      setIsFullScreen(true)
   }), []);
   
   return (
      <div>
         {status === 'loading' ? (
            <BackdropSinglePage/>
         ) : status === 'error' ? (
            <InfoDialog infoTitle="Bład podczas pobierania" message={error.message} />
         ) : (
            <>
               {isFullScreen && <PhotoFullScreen url={fullPhotoUrl.current.url} alt={fullPhotoUrl.current.alt} close={() => setIsFullScreen(false)} />}
               <div className="PhotoGallery">
                  {data.pages.map((page) => (
                     <Fragment key={page.id}>
                        {page.data.map((photo) => (
                           <SinglePhoto key={photo.id} source={photo} fullScreen={handleFullScreen} />
                        ))}
                     </Fragment>
                  ))}
               </div>
               <span ref={ref} />
            </>
         )}
      </div>
   )
}