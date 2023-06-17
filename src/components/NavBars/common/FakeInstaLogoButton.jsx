import { useNavigate } from "react-router-dom";
import { styled, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram.js";

export const FakeInstaLogoButton = props => {
    
    const navigate = useNavigate();
    
    return (
        <MenuButton
            onClick={() => navigate('/')}
            sx={{
            height: '60px',
            '--isVisible': props.topBar || 'none',
            '--isCenter': props.topBar || 'center'
        }}>
            <InstagramIcon sx={{ fontSize: '1em', color: (theme) => theme.palette.fakeInstaColor }} />
            <MenuButtonLabel sx={{ fontWeight: 700, color: (theme) => theme.palette.fakeInstaColor }}>
                FakeInsta
            </MenuButtonLabel>
        </MenuButton>
    )
};


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
        fontSize: 35
    },
    [theme.breakpoints.down("md")]: {
        justifyContent: 'var(--isCenter)',
    }
}));

const MenuButtonLabel = styled(Typography)(({ theme }) => ({
    marginLeft: 12,
    fontSize: '0.5em',
    textTransform: 'none',
    color: theme.palette.text.primary,
    [theme.breakpoints.down("xl")]: {
        display: 'var(--isVisible)'
    }
}));