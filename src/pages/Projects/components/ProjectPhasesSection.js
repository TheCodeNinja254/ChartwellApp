import React from "react";
import { Box, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectPhaseCard from "../../../components/ProjectPhaseCard";
import Image from "../../../components/Image";
import opportunityMmatrix from "../../../assets/images/opportunityMmatrix.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    marginBottom: theme.spacing(2),
  },
  displayImage: {
    marginTop: theme.spacing(2),
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
        {stageOneCollapse ? "Project Phases" : ""}
      </Typography>
      {!stageOneCollapse && (
        <Box>
          <Typography variant="body2">
            Use the opportunity matrix below to evaluate an opportunities value
            against complexity. This should be a guide as you add opportunities
            into each project Phase.
          </Typography>
          <Image
            src={opportunityMmatrix}
            alt="opportunityMmatrix"
            className={classes.displayImage}
            height={400}
          />
        </Box>
      )}
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
