import { Link } from "react-router-dom";
import { Button, styled } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { green } from '@mui/material/colors';
import './ErrorView.scss';
import errorSvg from '../assets/computer_With_Error.svg';

export const ErrorView = () => {
   
   return <>
      <div className="ErrorView">
         <img src={errorSvg} alt="Error" className="ErrorView__image"/>
         <Link to={'/'}>
            <ColorButton
               size="large"
               variant="outlined"
               endIcon={<ExitToAppIcon/>}
            >
               powrót do strony głównej
            </ColorButton>
         </Link>
      </div>
   </>
}

const ColorButton = styled(Button)(({ theme }) => ({
   color: 'white',
   backgroundColor: green[500],
   border: 'none',
   fontSize: '2rem',
   textTransform: 'uppercase',
   '&:hover': {
      backgroundColor: green[700],
      border: 'none'
   },
}));




