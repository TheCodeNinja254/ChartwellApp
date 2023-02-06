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
import clapImage from "../../../../assets/images/Graphics/opDone.jpg";

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
  opText: {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
}));

const CloseActionModal = ({
  open,
  setOpen,
  complete,
  setComplete,
  correspondingOpportunity,
}) => {
  const classes = useStyles();

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
              Great!
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              This change will be reflected on the Glidepath chart
            </DialogContentText>
          </DialogContent>
        </>
      ) : (
        <>
          <DialogTitle>
            <Typography className={classes.modalTitle} variant="h4">
              Has the Opportunity Status Changed?
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Opportunity related to this action item:{" "}
              <span className={classes.opText}>{correspondingOpportunity}</span>
            </DialogContentText>
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
            Mark as Validated
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CloseActionModal;
