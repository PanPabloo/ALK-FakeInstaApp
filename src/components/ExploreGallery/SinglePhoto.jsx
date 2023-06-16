import { memo, useState } from "react";
import { SkeletonPhoto } from "../Skeleton/SkeletonPhoto.jsx";
import './SinglePhoto.scss';

import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { styled } from "@mui/material";

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
    
    return (<div className={"SinglePhoto " + getRandomGridSpanSize(photo.id, photo.width, photo.height)}>
        {!isLoaded ? <SkeletonPhoto /> : null}
        <div className="">
            <img
                alt={'Autor zdjęcia: ' + photo.author}
                src={photo['download_url']}
                className="SinglePhoto__img"
                onLoad={handleIsLoaded}
                onClick={props.fullScreen}
            />
            <p className='SinglePhoto__fullSizeIcon'><FullScreenIcon /></p>
        </div>
    </div>)
})

const FullScreenIcon = styled(OpenInFullIcon)(({ theme }) => ({
    color: 'rgba(255,255,255,0.7)', fontSize: '6rem', margin: 5,
}));