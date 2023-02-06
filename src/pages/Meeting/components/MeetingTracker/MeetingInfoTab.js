import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Collapse,
  Grid,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import ChangeMeetingDateTimeForm from "../Forms";
import AttendeesList from "../Tables";
import TimeCard from "../../../../components/TimeCard";

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
  calloutText: {
    marginTop: theme.spacing(1),
  },
}));

const MeetingInfoTab = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState("panel1");
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  // Date & Time
  const [placeHolderDate, setPlaceHolderDate] = React.useState();
  const [placeHolderTime, setPlaceHolderTime] = React.useState();
  const [selectedDate, setSelectedDate] = React.useState(
    moment().format("dddd, MMMM Do YYYY")
  );
  const [selectedTime, setSelectedTime] = React.useState(
    moment().format("hh:mm a")
  );
  const [open, setOpen] = React.useState(false);
  const [parsedDate, setParsedDate] = React.useState(selectedDate);
  const [parsedTime, setParsedTime] = React.useState(selectedTime);
  const [dateHasChanged, setDateHasChanged] = React.useState(false);
  const [timeHasChanged, setTimeHasChanged] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleTimeChange = () => {
    setOpen(true);
    setIsCollapsed(!isCollapsed);
    if (dateHasChanged) {
      setParsedDate(moment(selectedDate).format("dddd, MMMM Do YYYY"));
    }

    if (timeHasChanged) {
      setParsedTime(moment(selectedTime).format("hh:mm a"));
    }
  };

  return (
    <div>
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
            {expanded ? (
              <strong>Meeting Information</strong>
            ) : (
              "Meeting Information"
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Grid container>
                <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                  <Typography variant="body2" className={classes.calloutText}>
                    Meeting Time & Date:
                  </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <Box display="flex" justifyContent="right">
                    <Button
                      size="small"
                      disableElevation
                      variant="outlined"
                      color="primary"
                      onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                      {isCollapsed ? "Hide" : "Change"}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <TimeCard selectedDate={parsedDate} selectedTime={parsedTime} />
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3} />
            <Collapse in={isCollapsed}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <ChangeMeetingDateTimeForm
                  setPlaceHolderDate={setPlaceHolderDate}
                  setPlaceHolderTime={setPlaceHolderTime}
                  placeHolderTime={placeHolderTime}
                  placeHolderDate={placeHolderDate}
                  setSelectedDate={setSelectedDate}
                  setSelectedTime={setSelectedTime}
                  open={open}
                  setOpen={setOpen}
                  handleTimeChange={handleTimeChange}
                  dateHasChanged={dateHasChanged}
                  timeHasChanged={timeHasChanged}
                  setDateHasChanged={setDateHasChanged}
                  setTimeHasChanged={setTimeHasChanged}
                />
              </Grid>
            </Collapse>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <AttendeesList />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MeetingInfoTab;
