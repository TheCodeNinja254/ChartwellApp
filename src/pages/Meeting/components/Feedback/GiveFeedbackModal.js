import React from "react";
import {
  Box,
  Button,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../../../components/Image";
import feedbackImage from "../../../../assets/images/Graphics/feedbackNow.jpg";
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

const GiveFeedbackModal = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState(78);
  const [complete, setComplete] = React.useState(false);

  const handleProgressBarChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
            src={complete ? clapImage : feedbackImage}
            alt="feedback now"
            height={120}
            width={120}
          />
        </Box>
        {complete ? (
          <>
            <DialogTitle>
              <Typography className={classes.modalTitle} variant="h4">
                Feedback Sent
              </Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Feedback added successfully!
              </DialogContentText>
            </DialogContent>
          </>
        ) : (
          <>
            <DialogTitle>
              <Typography className={classes.modalTitle} variant="h4">
                Give Feedback
              </Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Select a member, issue an attitude rating and feedback
                information.
              </DialogContentText>

              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
                fullWidth
                margin="dense"
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Select a user to rate
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="Select a user to rate"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Jane">Jane Doe</MenuItem>
                  <MenuItem value="John">John Doe</MenuItem>
                  <MenuItem value="Sebastian">Sebastian Cricket</MenuItem>
                </Select>
              </FormControl>
              <TextField
                margin="dense"
                id="name"
                label="Feedback"
                type="text"
                multiline
                rowsMax={5}
                fullWidth
                variant="standard"
              />
              <Typography variant="body2" className={classes.ratingLabelText}>
                Enter an attitude rating
              </Typography>
              <Slider
                aria-label="Volume"
                value={value}
                onChange={handleProgressBarChange}
                valueLabelDisplay="on"
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
              Add Feedback
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GiveFeedbackModal;
