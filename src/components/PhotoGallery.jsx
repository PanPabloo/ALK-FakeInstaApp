import { useEffect, Fragment } from 'react'
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from "@tanstack/react-query";

import { SinglePhoto } from "./SinglePhoto.jsx";
import BackdropSinglePage from "./BackdropSinglePage.jsx";
import { InfoDialog } from "./InfoDialog";
import { getPhotos } from "../api/images.js";


export const PhotoGallery = props => {
   
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
   
   return (
      <div>
         {status === 'loading' ? (
            <BackdropSinglePage/>
         ) : status === 'error' ? (
            <InfoDialog infoTitle="Bład podczas pobierania" message={error.message} />
         ) : (
            <>
               <div className="gallery">
                  {data.pages.map((page, pageIndex) => (
                     <Fragment key={page.id}>
                        {page.data.map((photo, photoIndex) => (
                           <SinglePhoto key={photo.id} source={photo} index={[pageIndex, photoIndex]}/>
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