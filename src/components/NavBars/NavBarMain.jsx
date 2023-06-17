import { useNavigate } from 'react-router-dom'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreIcon from '@mui/icons-material/Explore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SendIcon from '@mui/icons-material/Send';
import FaceIcon from '@mui/icons-material/Face';

import { styled, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { FakeInstaLogoButton } from "./common/FakeInstaLogoButton";

export const NavBarMain = () => {
    
    const navigate = useNavigate();
    
    return (
        <MainNav>
            <NavList>
                <NavItem>
                    <FakeInstaLogoButton />
                </NavItem>
                <NavItem>
                    <MenuButton onClick={() => navigate('/')}>
                        <HomeOutlinedIcon sx={{ fontSize: '1em' }} />
                        <MenuButtonLabel>Strona główna</MenuButtonLabel>
                    </MenuButton>
                </NavItem>
                <NavItem>
                    <MenuButton onClick={() => navigate('/explore')}>
                        <ExploreIcon sx={{ fontSize: '1em' }} />
                        <MenuButtonLabel>Odkrywaj</MenuButtonLabel>
                    </MenuButton>
                </NavItem>
                <NavItem>
                    <MenuButton>
                        <VideoLibraryIcon sx={{ fontSize: '1em' }} />
                        <MenuButtonLabel>Rolki</MenuButtonLabel>
                    </MenuButton>
                </NavItem>
                <NavItem>
                    <MenuButton>
                        <AddBoxIcon sx={{ fontSize: '1em' }} />
                        <MenuButtonLabel>Utwórz</MenuButtonLabel>
                    </MenuButton>
                </NavItem>
                <NavItem>
                    <MenuButton>
                        <SendIcon sx={{ fontSize: '1em' }} />
                        <MenuButtonLabel>Wiadomości</MenuButtonLabel>
                    </MenuButton>
                </NavItem>
                <NavItem>
                    <MenuButton>
                        <FaceIcon sx={{ fontSize: '1em' }} />
                        <MenuButtonLabel>Profil</MenuButtonLabel>
                    </MenuButton>
                </NavItem>
            </NavList>
        </MainNav>
    )
};

const MainNav = styled('nav')(({ theme }) => ({
    position: 'fixed',
    bottom: 0,
    top: 0,
    left: 0,
    borderRight: `1px solid ${theme.palette.text.primary}`,
    zIndex: 2,
    
    [theme.breakpoints.down("md")]: {
        right: 0,
        top: 'auto',
        borderRight: 'none',
        borderTop: `1px solid ${theme.palette.text.primary}`,
    }
}));

const NavList = styled('ul')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 220,
    height: 'auto',
    listStyle: 'none',
    backgroundColor: '#fff',
    
    [theme.breakpoints.down("xl")]: {
        width: 50,
    },
    
    [theme.breakpoints.down("md")]: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 50,
        width: '100%'
    }
}));

const NavItem = styled('li')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden',
    '& button': {
        flexGrow: 1,
    }
}));

const MenuButton = styled(Button)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down("xl")]: {
        width: 50,
    },
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 40,
    paddingInline: 5,
    minWidth: 'auto',
    color: theme.palette.text.primary,
    [theme.breakpoints.down(400)]: {
        fontSize: 35,
    },
    [theme.breakpoints.down("md")]: {
        justifyContent: 'center',
    }
}));

const MenuButtonLabel = styled(Typography)(({ theme }) => ({
    marginLeft: 12,
    fontSize: '0.5em',
    textTransform: 'none',
    color: theme.palette.text.primary,
    [theme.breakpoints.down("xl")]: {
        display: 'none'
    }
}));