import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import GiveFeedbackCard from "../../../../components/GiveFeedbackCard";
import UserFeedbackSection from "./UserFeedbackSection";
import KPITrackingSection from "./KPITrackingSection";
import ActionItemsSection from "./ActionItemsSection";
import _actionItems from "../../../../_mockData/_actionItems";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
  },
  cardTitle: {
    color: theme.palette.black,
    marginTop: theme.spacing(2),
    fontWeight: 700,
    fontSize: 18,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      marginBottom: theme.spacing(2),
    },
  },
  accordion: {
    borderRadius: 10,
    marginTop: theme.spacing(1),
  },
}));

const MeetingInfoTab = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState("panel0");
  const [actionItemsActiveList, setActionItemsActiveList] =
    React.useState(_actionItems);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Typography className={classes.cardTitle}>Meeting Agenda</Typography>
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
            {expanded === "panel1" ? (
              <strong>KPI Pack review</strong>
            ) : (
              "KPI Pack review"
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
              <KPITrackingSection
                setActionItemsActiveList={setActionItemsActiveList}
                actionItemsActiveList={actionItemsActiveList}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        elevation={0}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {expanded === "panel2" ? (
              <strong>Action Items List</strong>
            ) : (
              "Action Items List"
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ActionItemsSection actionItems={actionItemsActiveList} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        elevation={0}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {expanded === "panel3" ? (
              <strong>Improvements Attitude Feedback</strong>
            ) : (
              "Improvements Attitude Feedback"
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item lg={9} xl={9} md={12} sm={12} xs={12}>
              <GiveFeedbackCard />
              <UserFeedbackSection />
            </Grid>
            <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Button disableElevation variant="contained" color="primary">
                  END MEETING
                </Button>
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MeetingInfoTab;
