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
import { useHistory } from "react-router-dom";
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

const CompleteProjectModal = ({ open, setOpen }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
    history.push("/");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image src={clapImage} alt="feedback now" height={120} width={120} />
      </Box>
      <DialogTitle>
        <Typography className={classes.modalTitle} variant="h4">
          Congratulations, your project is ready to begin!
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Would you like to notify the team members about their action items?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            onClick={handleClose}
            color="primary"
            size="small"
            variant="contained"
          >
            Yes
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default CompleteProjectModal;
