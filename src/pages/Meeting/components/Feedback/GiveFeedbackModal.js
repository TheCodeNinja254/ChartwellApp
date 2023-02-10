import React from "react";
import {
  Box,
  Button,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
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
import _membersList from "../../../../_mockData/_membersList";
import FeedbackTable from "./FeedbackTable";

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
  actionArea: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
}));

const GiveFeedbackModal = ({
  open,
  setOpen,
  feedbackData,
  setFeedbackData,
  complete,
  setComplete,
}) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = React.useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const [improvementPosAttitude, setImprovementPosAttitude] = React.useState(
    []
  );
  const [improvementNegAttitude, setImprovementNegAttitude] = React.useState(
    []
  );

  const [feedbackText, setFeedbackScore] = React.useState("");

  const handleFeedbackTextChange = (event) => {
    setFeedbackScore(event.target.value);
  };

  const handleAddFeedback = () => {
    setFeedbackData([
      { name, feedbackText, improvementNegAttitude, improvementPosAttitude },
      ...feedbackData,
    ]); // clever unshift, right?
    setComplete(true);
  };

  const btnDisabledState = () => {
    let status = true;

    if (
      feedbackText !== "" &&
      improvementPosAttitude.length > 0 &&
      name !== ""
    ) {
      status = false;
    }

    return status;
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
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
              <DialogContentText align="center">
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
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: 120 }}
                    fullWidth
                    margin="dense"
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Select a team member
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={name}
                      onChange={handleNameChange}
                      label="Select a user to rate"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {_membersList?.map((m) => (
                        <MenuItem value={m.name} key={m.id}>
                          {m.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    margin="dense"
                    id="name"
                    label="Feedback"
                    type="text"
                    value={feedbackText}
                    multiline
                    rowsMax={5}
                    onChange={handleFeedbackTextChange}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
              </Grid>
              <Typography variant="body2" className={classes.ratingLabelText}>
                Select Improvement Attitudes
              </Typography>
              <FeedbackTable
                setImprovementPosAttitude={setImprovementPosAttitude}
                improvementPosAttitude={improvementPosAttitude}
                setImprovementNegAttitude={setImprovementNegAttitude}
                improvementNegAttitude={improvementNegAttitude}
              />
            </DialogContent>
          </>
        )}
        <DialogActions className={classes.actionArea}>
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
              onClick={() => handleAddFeedback()}
              variant="contained"
              disabled={btnDisabledState()}
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
