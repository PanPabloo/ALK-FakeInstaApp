import { Box, styled } from "@mui/material";

import { NavBarMain } from "../components/NavBars/NavBarMain.jsx";
import { RightPanel } from "../components/RigthPanel/RightPanel.jsx";
import { TopBar } from "../components/NavBars/TopBar.jsx";
import { Posts } from "../components/Posts/Posts.jsx";

export const MainView = () => {
    
    return (
        <>
            <TopBar />
            <NavBarMain />
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <MainContainer>
                    <MainContainerPosts>
                        <Posts />
                    </MainContainerPosts>
                    <MainContainerAside>
                        <RightPanel />
                    </MainContainerAside>
                </MainContainer>
            </Box>
        </>
    )
};

const MainContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: 1050,
    marginLeft: 220,
    
    [theme.breakpoints.down('xl')]: {
        marginLeft: 50,
        width: 'auto',
    },
    [theme.breakpoints.down('md')]: {
        marginLeft: 0,
        marginTop: 60,
    }
}));

const MainContainerPosts = styled(Box)(({ theme }) => ({
    width: 670,
    [theme.breakpoints.down('md')]: {
        width: '100vw'
    }
}));

const MainContainerAside = styled(Box)(({ theme }) => ({
    margin: 30,
    [theme.breakpoints.down('xl')]: {
        display: 'none'
    }
}));