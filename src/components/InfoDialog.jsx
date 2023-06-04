import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";

export const InfoDialog = props => {
   const [open, setOpen] = useState(true);
   
   const handleClose = () => {
      setOpen(false);
   };
   
   return (
      <div>
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <DialogTitle id="alert-dialog-title">
               {props.infoTitle}
            </DialogTitle>
            <DialogContent>
               <DialogContentText id="alert-dialog-description">
                  {props.message}
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose}>Zamknij</Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}