import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from "@tanstack/react-query";
import { Box, styled } from "@mui/material";

import { SinglePhoto } from "./SinglePhoto.jsx";
import BackdropSinglePage from "../BackdropSinglePage.jsx";
import { InfoDialog } from "../InfoDialog.jsx";
import { getPhotos } from "../../api/getPhotos.js";
import { PhotoFullScreen } from "./PhotoFullScreen.jsx";

export const PhotoGallery = () => {
    
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
    });
    
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
            url: e.target.src, alt: e.target.alt
        };
        setIsFullScreen(true)
    }), []);
    
    return (
        <>
            {status === 'loading'
                ? <BackdropSinglePage />
                : status === 'error'
                    ? <InfoDialog infoTitle="Bład podczas pobierania" message={error.message} />
                    : <>
                        {isFullScreen
                            && <PhotoFullScreen
                                url={fullPhotoUrl.current.url}
                                alt={fullPhotoUrl.current.alt}
                                close={() => setIsFullScreen(false)}
                            />
                        }
                        <PhotoGalleryBox>
                            {data.pages.map((page) => (<Fragment key={page.id}>
                                {page.data.map((photo) => (
                                    <SinglePhoto key={photo.id} source={photo} fullScreen={handleFullScreen} />))}
                            </Fragment>))}
                        </PhotoGalleryBox>
                        <span ref={ref} />
                    </>}
        </>
    )
};

const PhotoGalleryBox = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'var(--gridSize)',
    gridAutoFlow: 'row dense',
    gap: 5,
    width: 975,
    margin: '10px auto',
    [theme.breakpoints.down("lg")]: {
        width: 'calc(100vw - 50px)',
    },
    [theme.breakpoints.down("md")]: {
        marginTop: 60,
        width: '100vw',
        paddingBottom: 50,
    }
}))

