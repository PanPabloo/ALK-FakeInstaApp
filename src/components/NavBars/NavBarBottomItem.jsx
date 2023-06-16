import { IconButton } from "@mui/material";

export const NavBarBottomItem = props => {
   
   return (
      <li className="NavBarBottom__listItem">
         <a href="/src/pages" className="NavBarBottom__link" onClick={props.handleStopDefaultAnchor}>
            <IconButton aria-label={props.label} sx={{ color: '#222' }}>
               {props.children}
            </IconButton>
            <p className="NavBarBottom__label">{props.label}</p>
         </a>
      </li>
   )
}