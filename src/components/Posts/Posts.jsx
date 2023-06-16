import { Fragment, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from "@tanstack/react-query";

import BackdropSinglePage from "../BackdropSinglePage.jsx";
import { InfoDialog } from "../InfoDialog.jsx";
import './Posts.scss'
import { getPosts } from "../../api/getPosts.js";
import { PostMain } from "./PostMain.jsx";
import { v4 as uuid } from 'uuid';

const handleNextPage = url => {
   const regExp = /\?page=(?<nextPage>\d+)/g;
   const { nextPage } = url.matchAll(regExp).next().value.groups;
   return nextPage
}

export const Posts = () => {
   
   const {
      data,
      error,
      fetchNextPage,
      status,
   } = useInfiniteQuery({
         queryKey: ['posts'],
         queryFn: getPosts,
         getNextPageParam: (lastPage) => {
            if (lastPage.info.next) return handleNextPage(lastPage.info.next);
         },
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
         { status === 'loading' ? (
            <BackdropSinglePage/>
         ) : status === 'error' ? (
            <InfoDialog infoTitle="Bład podczas pobierania" message={ error.message }/>
         ) : (
            <>
               <div className="Posts">
                  { data.pages.map((page) => (
                     <Fragment key={ uuid() }>
                        { page.results.map((post) => (
                           <PostMain
                              key={ post.id }
                              imgSrc={ post.image }
                              name={ post.name }
                              locationName={ post.location.name }
                              created={ post.created }
                              species={ post.species }/>
                        )) }
                     </Fragment>
                  )) }
               </div>
               <span ref={ ref }/>
            </>
         ) }
      </div>
   )
}