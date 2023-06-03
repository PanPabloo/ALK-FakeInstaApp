import React from 'react'
import { useInView } from 'react-intersection-observer'
import {
   useInfiniteQuery,
   QueryClient,
   QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

export default function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <Example />
      </QueryClientProvider>
   )
}



function Example() {
   const { ref, inView } = useInView();
   
   const MAX_PHOTO_AMOUNT = 1080; // zmienić na 1080!
   const photosLimit = 20;
   
   
   const fetchData = async ({ pageParam = 1 }) => {
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
         queryKey: ['projects'],
         queryFn: fetchData,
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
            <>
               {data.pages.map((page) => (
                  <React.Fragment key={page[0].id}>
                     {page.map((photo) => (
                        <>
                           <img src={photo['download_url']} alt="" key={photo.id} style={{height: 500}}/>
                        </>
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
            </>
         )}
         <hr />

         <ReactQueryDevtools initialIsOpen />
      </div>
   )
}
