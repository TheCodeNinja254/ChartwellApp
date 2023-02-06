import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import Image from "./Image";
import feedback from "../assets/images/Graphics/feedback.jpg";
import GiveFeedbackModal from "../pages/Meeting/components/Feedback/GiveFeedbackModal";

const useStyles = makeStyles((theme) => ({
  root: {},
  introContainer: {
    paddingTop: theme.spacing(5),
  },
  userFeedbackCard: {
    borderRadius: 10,
    marginTop: theme.spacing(1),
  },
  actionButton: {
    marginTop: theme.spacing(2),
  },
  heading: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const GiveFeedbackCard = ({ feedbackData, setFeedbackData }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <Card elevation={0} className={classes.userFeedbackCard} variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image src={feedback} alt="feedback image" height={200} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="h3" className={classes.heading}>
              Give Feedback
            </Typography>
            <Typography variant="body2">
              Criticism may not be agreeable, but it is necessary. It fulfils
              the same function as pain in the human body. It calls attention to
              an unhealthy state of things.
            </Typography>
            <Button
              disableElevation
              variant="contained"
              color="primary"
              className={classes.actionButton}
              onClick={() => setOpen(true)}
            >
              Give Feedback Now
            </Button>
          </Grid>
        </Grid>
        <GiveFeedbackModal
          open={open}
          setOpen={setOpen}
          feedbackData={feedbackData}
          setFeedbackData={setFeedbackData}
        />
      </CardContent>
    </Card>
  );
};

export default GiveFeedbackCard;
