import React from "react";
import { Card, CardContent, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MeetingInfoTab from "./MeetingInfoTab";
import MeetingAgenda from "./MeetingAgenda";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
  },
  cardTitle: {
    color: theme.palette.black,
    marginTop: theme.spacing(2),
    fontWeight: 700,
    fontSize: 20,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
      marginBottom: theme.spacing(2),
    },
  },
}));

const MeetingTracker = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card elevation={0} className={classes.root}>
        <CardContent>
          <Typography className={classes.cardTitle}>
            Improvement Steering Weekly Meeting
          </Typography>
          <MeetingInfoTab />
          <MeetingAgenda />
        </CardContent>
      </Card>
    </Container>
  );
};

export default MeetingTracker;
