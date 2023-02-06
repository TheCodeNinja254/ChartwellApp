import React from "react";
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectPhaseCard from "../../../components/ProjectPhaseCard";

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

// eslint-disable-next-line no-unused-vars
const ProjectPhasesSection = ({
  selectedTemplate,
  phasesNumber,
  stageOneCollapse,
  setNextButtonActive,
}) => {
  const classes = useStyles();

  const noOfPhases = Array.from(
    Array(Number(phasesNumber)).keys(),
    (x) => x + 1
  );

  return (
    <Card elevation={0}>
      <Typography variant="h4" className={classes.heading}>
        {stageOneCollapse ? "Project Phases" : "Opportunity Mapping"}
      </Typography>
      {Number(phasesNumber) > 1 && Number(phasesNumber) < 10 ? (
        noOfPhases.map((i) => (
          <ProjectPhaseCard
            key={i}
            phaseNo={i}
            stageOneCollapse={stageOneCollapse}
            setNextButtonActive={setNextButtonActive}
            selectedTemplate={selectedTemplate}
          />
        ))
      ) : (
        <ProjectPhaseCard
          phaseNo={1}
          stageOneCollapse={stageOneCollapse}
          setNextButtonActive={setNextButtonActive}
          selectedTemplate={selectedTemplate}
        />
      )}
    </Card>
  );
};

export default ProjectPhasesSection;
