import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Grid,
  Typography,
} from "@material-ui/core";
import { ExpandMore, Info, NavigateNext } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import ProjectMembersList from "../Tables/ProjectMembersList";
import ProjectPhasesSection from "./ProjectPhasesSection";
import ActionListSection from "./ActionListSection";
import ProjectDefinitionForm from "../Forms/ProjectDefinitionForm";
import Image from "../../../components/Image";
import startImage from "../../../assets/images/Graphics/start.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
  },
  cardTitle: {
    marginTop: theme.spacing(2),
    fontWeight: 700,
    fontSize: 20,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
      marginBottom: theme.spacing(2),
    },
  },
  accordion: {
    borderRadius: 10,
  },
  timeText: {
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  card: {
    borderRadius: 20,
    marginTop: theme.spacing(4),
  },
  innerCard: {
    borderRadius: 20,
    marginTop: theme.spacing(1),
  },
  navigationButton: {
    marginTop: theme.spacing(2),
  },
  callToAction: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontWeight: 700,
  },
}));

const ProjectDefinition = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState("panel1");
  const [selectedTemplate, setSelectedTemplate] = React.useState("");
  const [phasesNumber, setPhasesNumber] = React.useState(1);
  const [stageOneCollapse, setStageOneCollapse] = React.useState(true);
  const [stageTwoCollapse, setStageTwoCollapse] = React.useState(false);
  const [nextButtonActive, setNextButtonActive] = React.useState(true);
  const [showSecondNavButton, setShowSecondNavButton] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handlePhaseChange = (event) => {
    setPhasesNumber(Number(event.target.value));
  };

  const handleStageOneCollapse = () => {
    setStageOneCollapse(false);
    setStageTwoCollapse(false);
    setShowSecondNavButton(true);
  };

  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  const tabTitle = stageOneCollapse
    ? "Project Definition"
    : "Opportunity Mapping";

  return (
    <Card elevation={0} className={classes.card}>
      {!stageTwoCollapse ? (
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          elevation={0}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {expanded ? <strong>{tabTitle}</strong> : tabTitle}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Collapse in={stageOneCollapse}>
                  <Card
                    variant="outlined"
                    elevation={0}
                    className={classes.innerCard}
                  >
                    <CardContent>
                      <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                          <Image src={startImage} alt="start" height={150} />
                          <Typography variant="body2" color="primary">
                            First things first,
                          </Typography>
                          <Typography
                            variant="h3"
                            className={classes.callToAction}
                          >
                            Let&apos;s set up the project
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                          <Typography variant="body2" color="primary">
                            Define a project by selecting a project type and
                            template from the template list, the number of
                            phases, members involved in the project and setting
                            completion dates on each of the phases
                          </Typography>
                          <ProjectDefinitionForm
                            selectedTemplate={selectedTemplate}
                            handleTemplateChange={handleTemplateChange}
                            phasesNumber={phasesNumber}
                            handlePhaseChange={handlePhaseChange}
                            className={classes.innerCard}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Collapse>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Collapse in={stageOneCollapse}>
                  <ProjectMembersList />
                </Collapse>
                <ProjectPhasesSection
                  selectedTemplate={selectedTemplate}
                  phasesNumber={phasesNumber}
                  stageOneCollapse={stageOneCollapse}
                  setNextButtonActive={setNextButtonActive}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box display="flex" justifyContent="right" alignItems="right">
                  <Grid container direction="column">
                    {nextButtonActive && (
                      <Typography color="secondary" variant="body2">
                        Select a project template and add a target(s) before
                        proceeding to the next step
                      </Typography>
                    )}
                    {selectedTemplate === "" && (
                      <Box display="flex" justifyContent="left">
                        <Info />
                        <Typography color="textSecondary" variant="body2">
                          Select a project template before proceeding to the
                          next step
                        </Typography>
                      </Box>
                    )}
                    {stageOneCollapse && selectedTemplate && (
                      <Button
                        variant="contained"
                        disabled={nextButtonActive}
                        disableElevation
                        color="primary"
                        onClick={() => handleStageOneCollapse()}
                        className={classes.navigationButton}
                      >
                        NEXT <NavigateNext />
                      </Button>
                    )}
                    {showSecondNavButton && (
                      <Button
                        variant="contained"
                        disableElevation
                        color="primary"
                        onClick={() => setStageTwoCollapse(true)}
                        className={classes.navigationButton}
                      >
                        NEXT <NavigateNext />
                      </Button>
                    )}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ) : (
        <ActionListSection selectedTemplate={selectedTemplate} />
      )}
    </Card>
  );
};

export default ProjectDefinition;
