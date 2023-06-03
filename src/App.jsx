import React from 'react'
import { useInView } from 'react-intersection-observer'
import {
   useInfiniteQuery,
   QueryClient,
   QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { SinglePhoto } from "./components/SinglePhoto";
import './App.css';


const queryClient = new QueryClient()

export default function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <Example />
         <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
   )
}




function Example() {
   const { ref, inView } = useInView({
      rootMargin: '1000px'
   });
   
   const MAX_PHOTO_AMOUNT = 100; // zmienić na 1080!
   const photosLimit = 10;
   
   const fetchPhotosFromApi = async ({ pageParam = 1 }) => {
      const res = await fetch(`https://picsum.photos/v2/list?limit=${photosLimit}&page=${pageParam}`)
      return res.json()
   }
   
   const {
      data,
      error,
      fetchNextPage,
      hasNextPage,
      isFetching,
      isFetchingNextPage,
      status,
   } = useInfiniteQuery({
         queryKey: ['photos'],
         queryFn: fetchPhotosFromApi,
         getNextPageParam: (lastPage, pages) => {
            if (pages.length < MAX_PHOTO_AMOUNT / photosLimit) return pages.length + 1;
         },
      }
    )
   
   React.useEffect(() => {
      if (inView) {
         fetchNextPage()
      }
   }, [inView])
   
   return (
      <div>
         <h1>Infinite Loading</h1>
         {status === 'loading' ? (
            <p>Loading...</p>
         ) : status === 'error' ? (
            <span>Error: {error.message}</span>
         ) : (
            <div className="gallery">
               {data.pages.map((page, pageIndex) => (
                  <React.Fragment key={page[0].id}>
                     {page.map((photo, photoIndex) => (
                        
                           <SinglePhoto key={photo.id} source={photo} index={[pageIndex, photoIndex]}/>
                        
                           // <img src={photo['download_url']} alt="" key={photo.id} style={{height: 500}} />
                        
                     ))}
                  </React.Fragment>
               ))}
               
               <div>
                  <button
                     ref={ref}
                     onClick={() => fetchNextPage()}
                     disabled={!hasNextPage || isFetchingNextPage}
                  >
                     {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                           ? 'Load Newer'
                           : 'Nothing more to load'}
                  </button>
               </div>
               <div>
                  {isFetching && !isFetchingNextPage
                     ? 'Background Updating...'
                     : null}
               </div>
            </div>
         )}

      </div>
   )
}
