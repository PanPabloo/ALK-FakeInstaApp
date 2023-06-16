import { Fragment, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from "@tanstack/react-query";
import { Box, styled } from "@mui/material";
import { v4 as uuid } from 'uuid';

import BackdropSinglePage from "../BackdropSinglePage.jsx";
import { InfoDialog } from "../InfoDialog.jsx";
import { getPosts } from "../../api/getPosts.js";
import { PostSingle } from "./PostSingle.jsx";

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
        <>
            {status === 'loading' ? (
                <BackdropSinglePage />
            ) : status === 'error' ? (
                <InfoDialog infoTitle="Bład podczas pobierania" message={error.message} />
            ) : (
                <>
                    <PostsBox>
                        {data.pages.map((page) => (
                            <Fragment key={uuid()}>
                                {page.results.map((post) => (
                                    <PostSingle
                                        key={post.id}
                                        imgSrc={post.image}
                                        name={post.name}
                                        locationName={post.location.name}
                                        created={post.created}
                                        species={post.species} />
                                ))}
                            </Fragment>
                        ))}
                    </PostsBox>
                    <span ref={ref} />
                </>
            )}
        </>
    )
}

const PostsBox = styled(Box)(({ theme }) => ({
    width: 670,
    [theme.breakpoints.down("md")]: {
        width: '100vw',
    },
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
}));