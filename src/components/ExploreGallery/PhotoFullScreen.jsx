import Backdrop from "@mui/material/Backdrop";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, styled, Typography } from "@mui/material";

export const PhotoFullScreen = props => {
    
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backdropFilter: 'blur(5px)' }}
            open={true}
            onClick={props.close}
        >
            <FullScreenBox>
                <Image src={props.url} alt={props.alt} />
                <ImageLabel variant="h3">
                    {props.alt}
                </ImageLabel>
                <CloseBtn onClick={props.close}>
                    <HighlightOffIcon sx={{ fontSize: '8rem' }} />
                    <Typography
                        sx={{ marginTop: 1, fontSize: '2rem', color: '#fff' }}
                    >
                        Zamknij
                    </Typography>
                </CloseBtn>
            </FullScreenBox>
        </Backdrop>
    )
};


const FullScreenBox = styled(Box)(({ theme }) => ({
    width: '80%',
    height: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'column',
    [theme.breakpoints.down("lg")]: {
        width: '100vw',
        height: 'auto',
        padding: 10,
    }
}));

const Image = styled('img')(({ theme }) => ({
    display: 'block',
    height: '100%',
    outline: '5px solid #fff',
    [theme.breakpoints.down("lg")]: {
        width: '100%',
        height: 'auto',
    }
}));

const ImageLabel = styled(Typography)({
    position: 'absolute',
    bottom: 0,
    padding: '1rem',
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    fontWeight: 'normal',
});

const CloseBtn = styled('button')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    border: 'none',
    transition: '100ms linear',
    backgroundColor: 'transparent',
    color: '#fff',
    cursor: 'pointer',
    [theme.breakpoints.down("lg")]: {
        transform: 'scale(0.7)',
    },
    '&:hover': {
        color: '#dc2525',
    }
}));