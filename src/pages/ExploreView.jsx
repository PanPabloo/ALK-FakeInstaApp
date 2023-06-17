import { NavBarMain } from "../components/NavBars/NavBarMain.jsx";
import { PhotoGallery } from "../components/ExploreGallery/PhotoGallery.jsx";
import { TopBar } from "../components/NavBars/TopBar.jsx";
import { styled } from "@mui/material";

export const ExploreView = () => {
    
    return (
        <>
            <div>
                <TopBar />
                <NavBarMain />
            </div>
            <ExploreViewContainer>
                <PhotoGallery />
            </ExploreViewContainer>
        </>
    )
}

const ExploreViewContainer = styled('div')(({ theme }) => ({
    '--gridSize': '320px',
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 220,
    
    [theme.breakpoints.down('xl')]: {
        marginLeft: 50,
    },
    [theme.breakpoints.down('md')]: {
        marginLeft: 0,
    },
    [theme.breakpoints.down(974)]: {
        '--gridSize': 'calc(100vw / 3 - 15px)',
    }
}));