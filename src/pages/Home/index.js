import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../../components/Page";
import IntroductionScreen from "./components/IntroductionScreen/IntroductionScreen";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Page title="Home" className={classes.root}>
      <IntroductionScreen />
    </Page>
  );
};

export default Home;
