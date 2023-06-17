import { Box, styled } from "@mui/material";
import { FakeInstaLogoButton } from "./common/FakeInstaLogoButton";

export const TopBar = () => {
    
    return (
        <TopBarBox>
            <FakeInstaLogoButton topBar/>
        </TopBarBox>
    )
};

const TopBarBox = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    display: 'none',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.text.primary}`,
    
    [theme.breakpoints.down("md")]: {
        display: 'flex',
    }
}));
