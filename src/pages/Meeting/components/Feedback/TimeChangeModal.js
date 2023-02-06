import React from "react";
import {
  Box,
  Button,
  DialogContentText,
  DialogTitle,
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
  modalTitle: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textAlign: "center",
  },
}));

const TimeChangeModal = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image src={clapImage} alt="feedback now" height={120} width={120} />
      </Box>
      <DialogTitle>
        <Typography className={classes.modalTitle} variant="h4">
          Meeting time set successfully
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          The change in meeting time has been recorded successfully!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          color="secondary"
          size="small"
          variant="outlined"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TimeChangeModal;
