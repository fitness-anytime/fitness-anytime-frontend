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

export default function InstructorWalkthrough() {
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
                    <DialogContentText id="instructor-welcome-dialog">
                        If this is your first time using Anywhere Fitness, you can go
                        ahead and click Next for a quick tour of our app! 
                        <br />
                        <br />
                        If this isn't your
                        first time or you'd just like to go straight into planning out
                        your next class, click Skip!
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
            <DialogTitle>{"Create a Class"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="classform-button-dialog">
                Click this button right here and we'll take you to our create-a-class
                form so you can plan and publish your classes to all Anywhere Fitness users.
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
            <DialogTitle>{"Class Details"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="instructor-details-dialog">
                All your published classes can be viewed here formatted into these
                class cards. All your general class information including its name, start time,
                number of members registered, and the rest of its details will be listed here.
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
            <DialogTitle>{"Class Edit Buttons"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="instructor-edit-button-dialog">
                If at any time you'd like to reschedule, cancel, or modify any other
                details of one of your classes, click one of these buttons here.
                <br />
                <br />
                Be careful though. Once you delete a class, we can't bring it back!
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
    } else if (currentDialog === 4) {
        return (
        <div position='absolute'>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            hideBackdrop={true}
            aria-describedby="alert-dialog-slide-description"
            sx={{animation: `${hover} 1s infinite ease alternate`}}
        >
            <DialogTitle>{"Class Attendance"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="instructor-attendance-dialog">
                Right under your edit buttons will be a list of every user
                that has currently reserved a spot in your class.
                <br />
                <br />
                Once your class starts, just check the box next to their name
                to mark them as attending.
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
