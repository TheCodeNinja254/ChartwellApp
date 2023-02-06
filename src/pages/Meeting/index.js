import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../../components/Page";
import IntroductionScreen from "./components/IntroductionScreen";
import MeetingTracker from "./components/MeetingTracker";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Page title="Meeting" className={classes.root}>
      <IntroductionScreen />
      <MeetingTracker />
    </Page>
  );
};

export default Home;
