import React, { useState } from "react";
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
import clapImage from "../../../../assets/images/Graphics/clap.png";

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

const CongratulationsModal = ({ open, setOpen }) => {
  const classes = useStyles();
  const [complete, setComplete] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image src={clapImage} alt="feedback now" height={120} width={120} />
      </Box>
      {complete ? (
        <>
          <DialogTitle>
            <Typography className={classes.modalTitle} variant="h4">
              Congratulations Sent!
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Your congratulations message has been sent successfully!
            </DialogContentText>
          </DialogContent>
        </>
      ) : (
        <>
          <DialogTitle>
            <Typography className={classes.modalTitle} variant="h4">
              Congratulate Team
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Write a congratulations message to the team
            </DialogContentText>
            <TextField
              margin="dense"
              id="name"
              label="Congratulation Message"
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
          color="secondary"
          size="small"
          variant="outlined"
        >
          {complete ? "Close" : "Cancel"}
        </Button>
        {!complete && (
          <Button
            onClick={() => setComplete(true)}
            variant="contained"
            color="primary"
            size="small"
            disableElevation
          >
            Congratulate Team
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CongratulationsModal;
