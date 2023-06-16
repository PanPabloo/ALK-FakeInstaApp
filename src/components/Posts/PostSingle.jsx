import { memo } from "react";
import { Avatar, Box, ButtonGroup, IconButton, Paper, styled, Typography } from "@mui/material";

import FaceIcon from '@mui/icons-material/Face';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const colors = {
    human: {
        mainColor: '#b34444',
        bgColor: '#ffb9b9',
    },
    alien: {
        mainColor: '#079b0a',
        bgColor: '#a6ffa9',
    }
}

export const PostSingle = memo(function PostSingle(props) {
    
    return (
        <>
            <PostSingleBox>
                <PostSingleHeader sx={{ bgcolor: colors[props.species.toLowerCase()]?.bgColor }}>
                    <Avatar sx={{ bgcolor: colors[props.species.toLowerCase()]?.mainColor, width: 50, height: 50 }}>
                        {props.species === 'Human'
                            ? <FaceIcon sx={{ fontSize: 40 }} />
                            : <RocketLaunchIcon sx={{ fontSize: 40 }} />
                        }
                    </Avatar>
                    <Typography
                        variant="h4"
                        sx={{ flexGrow: 1, paddingLeft: 2 }}
                    >
                        {props.name}
                    </Typography>
                    <IconButton>
                        <MoreHorizIcon sx={{ fontSize: 35, padding: '5px', transform: 'rotate(90deg)' }} />
                    </IconButton>
                </PostSingleHeader>
                
                <PostSingleImage>
                    <img className="PostMain__image" src={props.imgSrc} alt={props.name} width='100%' />
                </PostSingleImage>
                
                <div>
                    <Box sx={{ display: 'flex', alignItems: 'center', paddingInline: 2, marginTop: 1 }}>
                        <LocationOnIcon sx={{ fontSize: '1.7rem', marginRight: 1 }} />
                        <Typography variant="h5" fontSize={'1.7rem'}
                                    color="text.secondary" fontStyle="italic">
                            {props.locationName}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', padding: 1, justifyContent: 'space-between' }}>
                        <ButtonGroup variant="text">
                            <IconButton>
                                <FavoriteBorderIcon sx={{ fontSize: 35, padding: '5px' }} />
                            </IconButton>
                            <IconButton>
                                <ChatBubbleOutlineIcon sx={{ fontSize: 35, padding: '5px' }} />
                            </IconButton>
                            <IconButton>
                                <SendIcon sx={{ fontSize: 35, padding: '5px' }} />
                            </IconButton>
                        </ButtonGroup>
                        <IconButton>
                            <BookmarkIcon color="primary" sx={{ fontSize: 35, padding: '5px' }} />
                        </IconButton>
                    </Box>
                
                </div>
            </PostSingleBox>
        </>
    )
});

const PostSingleBox = styled(Paper)(({ theme }) => ({
    width: 470,
    [theme.breakpoints.down("sm")]: {
        width: '100vw',
    },
    isolation: 'isolate',
    marginTop: 30,
    borderRadius: 10
}));

const PostSingleHeader = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    zIndex: -1,
    padding: '8px 8px 28px 8px',
});

const PostSingleImage = styled(Paper)(({ theme }) => ({
    overflow: 'hidden',
    borderRadius: 10,
    border: `1px solid ${theme.palette.text.secondary}`,
    fontSize: 0,
    top: -20,
    position: 'relative',
    marginBottom: -20,
}));


