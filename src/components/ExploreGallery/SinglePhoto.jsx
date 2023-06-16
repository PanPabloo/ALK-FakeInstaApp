import { memo, useState } from "react";
import { Box, styled } from "@mui/material";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

import { SkeletonPhoto } from "../Skeleton/SkeletonPhoto.jsx";

const getRandomGridSpanSize = (id, xSize, ySize) => {
    if (xSize < ySize) {
        return 'row-span-2';
    }
    const random = ((xSize + ySize) / id + "").at(-1);
    return random > 7 ? 'col-span-2' : '';
}

export const SinglePhoto = memo(function SinglePhoto(props) {
    
    const [isLoaded, setIsLoaded] = useState(false);
    const photo = props.source;
    
    const handleIsLoaded = () => {
        setIsLoaded(true);
    }
    
    return (
        <SinglePhotoBox className={"SinglePhoto " + getRandomGridSpanSize(photo.id, photo.width, photo.height)}>
            {!isLoaded ? <SkeletonPhoto /> : null}
            <div>
                <SinglePhotoImage
                    alt={'Autor zdjęcia: ' + photo.author}
                    src={photo['download_url']}
                    onLoad={handleIsLoaded}
                    onClick={props.fullScreen}
                />
                <FullSizeButton>
                    <OpenInFullIcon
                        sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '5rem' }}
                    />
                </FullSizeButton>
            </div>
        </SinglePhotoBox>)
})

const SinglePhotoBox = styled(Box)({
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&.col-span-2': {
        gridColumn: 'span 2'
    },
    '&.row-span-2 ': {
        gridRow: 'span 2'
    },
});

const SinglePhotoImage = styled('img')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'block',
    height: '100%',
    transform: 'translate(-50%,-50%)',
    transition: '250ms linear',
    '.col-span-2 &': {
        height: 'auto',
        width: '100%',
    },
    '.SinglePhoto:hover &': {
        transform: 'translate(-50%,-50%) scale(1.02)'
    }
});

const FullSizeButton = styled('div')({
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',
    borderRadius: '50%',
    textAlign: 'center',
    opacity: 0,
    transition: '250ms linear',
    '.SinglePhoto:hover &': {
        opacity: 1
    }
});
