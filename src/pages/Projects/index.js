import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Page from "../../components/Page";
import IntroductionScreen from "./components/IntroductionScreen";
import ProjectDefinition from "./components/ProjectDefinition";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3),
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <Page title="Projects" className={classes.root}>
      <IntroductionScreen />
      <Container>
        <ProjectDefinition />
      </Container>
    </Page>
  );
};

export default Projects;
