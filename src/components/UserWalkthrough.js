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
                    <Button onClick={handleNext}>
                        Next
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    } else if (currentDialog === 1) {
        return (
        <div position='absolute'>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            hideBackdrop={true}
            aria-describedby="alert-dialog-slide-description"
            sx={{animation: `${hover} 1s infinite ease alternate`}}
        >
            <DialogTitle>{"Class Details"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Here is where you'll see all the details of a certain class including
                it's name, the type of workout you'll be doing, as well as the time and
                date that it starts and more.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Skip</Button>
            <Button onClick={handleNext}>
                Next
            </Button>
            </DialogActions>
        </Dialog>
        </div>
        )
    } else if (currentDialog === 2) {
        return (
        <div position='absolute'>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            hideBackdrop={true}
            aria-describedby="alert-dialog-slide-description"
            sx={{animation: `${hover} 1s infinite ease alternate`}}
        >
            <DialogTitle>{"Reserve a Class"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                If the class looks like something up your alley, click this button
                right here and we'll save a spot just for you.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Skip</Button>
            <Button onClick={handleNext}>
                Next
            </Button>
            </DialogActions>
        </Dialog>
        </div>
        )
    } else if (currentDialog === 3) {
        return (
        <div position='absolute'>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            hideBackdrop={true}
            aria-describedby="alert-dialog-slide-description"
            sx={{animation: `${hover} 1s infinite ease alternate`}}
        >
            <DialogTitle>{"Search For a Class"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Looking for something specific? Maybe something to try next
                Monday morning, or have you maybe been inspired by those Karate
                videos you stayed up late last night watching?
                <br />
                <br />
                Click the dropdown menu here to select the category you'd like to 
                search by, and type into the text box to find exactly what you're looking
                for!
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Skip</Button>
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
