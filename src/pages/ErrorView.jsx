import { Link } from "react-router-dom";
import { Box, Button, styled } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { green } from '@mui/material/colors';
import errorSvg from '../assets/computer_With_Error.svg';

export const ErrorView = () => {
    
    return (
        <ErrorViewBox>
            <img src={errorSvg} alt="Error" style="width: 40vh; margin-bottom: 3rem" />
            <Link to={'/'}>
                <ColorButton
                    size="large"
                    variant="outlined"
                    endIcon={<ExitToAppIcon />}
                >
                    powrót do strony głównej
                </ColorButton>
            </Link>
        </ErrorViewBox>
    )
}

const ColorButton = styled(Button)({
    color: 'white',
    backgroundColor: green[500],
    border: 'none',
    fontSize: '2rem',
    textTransform: 'uppercase',
    '&:hover': {
        backgroundColor: green[700],
        border: 'none'
    },
});

const ErrorViewBox = styled(Box)(({ theme }) => ({
    position: 'fixed',
    inset: 0,
    backgroundColor: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}));




