import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { AlignHorizontalLeft } from '@mui/icons-material';
import { keyframes } from '@mui/system';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Going to use this for dialog boxes during the walkthrough to 
  // make them more visible/eye-catching
  const hover = keyframes`
  from {
    transform: translateY(5px);
  }
  to {
    transform: translateY(-5px);
  }
`;

  return (
    <div position='absolute'>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        hideBackdrop={false}
        aria-describedby="alert-dialog-slide-description"
        sx={{
            animation: `${hover} 1s infinite ease alternate`,
        }}
      >
        <DialogTitle>{"Welcome to Anywhere Fitness"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            If this is your first time using Anywhere Fitness, you can go
            ahead and click Next for a quick tour of our app! 
            <br />
            <br />
            If this isn't your
            first time or you'd just like to go straight into finding your new favorite
            workout, click Skip!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Skip</Button>
          <Button onClick={handleClose}>Next</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}