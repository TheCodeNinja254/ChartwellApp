import React from "react";
import {
  Box,
  Button,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../../../components/Image";
import clapImage from "../../../../assets/images/Graphics/multiCPeople.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
  ratingLabelText: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  modalTitle: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textAlign: "center",
  },
}));

const EndMeetingModal = ({ open, setOpen, setComplete, complete }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image src={clapImage} alt="feedback now" height={300} />
      </Box>
      {complete ? (
        <>
          <DialogTitle>
            <Typography className={classes.modalTitle} variant="h4">
              Improvement Steering Meeting Ended
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText align="center">
              Team members will be notified to update their actions and enter
              feedback items.
            </DialogContentText>
          </DialogContent>
        </>
      ) : (
        <>
          <DialogTitle>
            <Typography className={classes.modalTitle} variant="h4">
              End Improvement Steering Meeting
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Meeting Summary</DialogContentText>
            <TextField
              margin="dense"
              id="name"
              label="Provide a meeting summary"
              type="text"
              fullWidth
              multiline
              maxRows={4}
              variant="standard"
            />
          </DialogContent>
        </>
      )}
      <DialogActions>
        <Button
          onClick={handleClose}
          color={complete ? "primary" : "secondary"}
          size="small"
          variant="contained"
        >
          {complete ? "End Meeting" : "Cancel"}
        </Button>
        {!complete && (
          <Button
            onClick={() => setComplete(true)}
            variant="contained"
            color="primary"
            size="small"
            disableElevation
          >
            Send Summary
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default EndMeetingModal;
