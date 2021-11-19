import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { keyframes } from '@mui/system';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ClassFormWalkthrough() {
  const [open, setOpen] = React.useState(true);
  const [currentDialog, setCurrentDialog] = React.useState(0);

  const handleNext = () => {
    setCurrentDialog(currentDialog + 1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Going to use this for dialog boxes during the walkthrough to 
  // make them more visible/eye-catching
  // Use this in the sx prop for a mild bouncing effect: 
  // animation: `${hover} 1s infinite ease alternate`,
  const hover = keyframes`
  from {
    transform: translateY(5px);
  }
  to {
    transform: translateY(-5px);
  }
`;

    if (currentDialog === 0) {
        return (
            <div position='absolute'>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    hideBackdrop={false}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Creating a Class"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="classform-intro-dialog">
                        Use this form to set all the details for a class. Just fill out each
                        section according to the information needed, then click the 'Create' button.
                        <br />
                        <br />
                        Make sure to fill out every box, or else you won't be able to post
                        your class!
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleNext}>
                        Close
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    } else {   
        return null;
    }
}
