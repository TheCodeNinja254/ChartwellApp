import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Collapse,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import { Adjust, Flare } from "@material-ui/icons";
import nothingToSee from "../assets/images/Graphics/nothingToSee.jpg";
import clapImage from "../assets/images/Graphics/clap.png";
import Image from "./Image";
import _opportunities from "../_mockData/_opportunities";
import _projectKPIs from "../_mockData/_projectKPIs";
import _projectTemplates from "../_mockData/_projectTemplates";

const useStyles = makeStyles((theme) => ({
  root: {},
  actionItemsCard: {
    borderRadius: 20,
    marginTop: theme.spacing(2),
  },
  dueText: {
    marginTop: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  datePickerField: {
    marginTop: theme.spacing(2),
  },
  inlineCard: {
    marginTop: theme.spacing(2),
    borderRadius: 20,
  },
  actionText: {
    marginTop: theme.spacing(3),
    color: theme.palette.primary.main,
  },
  actionButton: {
    marginTop: theme.spacing(2),
  },
  heading: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
  subHeading: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: theme.palette.secondary.main,
    fontWeight: 700,
    fontSize: 12,
  },
  opportunitiesSection: {
    marginTop: theme.spacing(2),
  },
  opportunitiesHeader: {
    marginTop: theme.spacing(4),
  },
  helperText: {
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  projectTitle: {
    fontSize: 10,
  },
}));

const not = (a, b) => {
  return a.filter((value) => b.indexOf(value) === -1);
};

const intersection = (a, b) => {
  return a.filter((value) => b.indexOf(value) !== -1);
};

const ProjectPhaseCard = ({
  phaseNo,
  stageOneCollapse,
  setNextButtonActive,
  selectedTemplate,
}) => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState();

  // Project KPIs Specific
  const [kpiTarget, setKPITarget] = React.useState("");
  const [improvementKPI, setImprovementKPI] = React.useState("");
  const [unitOfMeasure, setUnitOfMeasure] = React.useState("");
  const [kpiAndTargets, setKPIAndTargets] = React.useState([]);
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState(_opportunities);
  const [right, setRight] = React.useState([]);

  const handleKPIsChange = () => {
    // Add @KPI items to the array
    setKPIAndTargets([
      ...kpiAndTargets,
      { kpiTarget, improvementKPI, unitOfMeasure },
    ]);

    // Allow for the Next button to be clickable
    setNextButtonActive(false);

    // Reset  field values
    setImprovementKPI("");
    setKPITarget("");
  };

  const handleTargetChange = (e, uom) => {
    setKPITarget(e.target.value);
    setUnitOfMeasure(uom);
  };

  const leftChecked = intersection(checked, left);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    // check if it an addition or a deletion from the array set
    if (currentIndex === -1) {
      newChecked.unshift(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const opportunitiesLibrary = (items) => (
    <List dense component="div" role="list">
      {items.map((value) => {
        const labelId = `transfer-list-item-${value}-label`;

        return (
          <ListItem
            key={value}
            role="listitem"
            button
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{
                  "aria-labelledby": labelId,
                }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value} />
          </ListItem>
        );
      })}
    </List>
  );

  const selectedPhaseOpportunities = (items) => (
    <List dense component="div" role="list">
      {items.map((value) => {
        const labelId = `transfer-list-item-${value}-label`;

        return (
          <ListItem key={value} role="listitem">
            <ListItemIcon>
              <Flare />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value} />
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <Card elevation={0} className={classes.actionItemsCard} variant="outlined">
      <CardContent>
        <Typography variant="body2" color="primary">
          <strong>Phase {phaseNo}</strong>
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Collapse in={stageOneCollapse}>
              <Typography variant="body2" className={classes.dueText}>
                Project Due Date
              </Typography>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  label="Select a due date"
                  required
                  className={classes.datePickerField}
                  value={selectedDate}
                  animateYearScrolling
                  format="dd/MM/yyyy"
                  onChange={(dateValue) => {
                    setSelectedDate(dateValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      helperText={params?.inputProps?.placeholder}
                    />
                  )}
                />
              </MuiPickersUtilsProvider>
              <Typography variant="body2" className={classes.actionText}>
                <strong>ADD Improvement KPIs & Targets</strong>
              </Typography>
              {selectedTemplate !== "" && (
                <Typography variant="body2" className={classes.projectTitle}>
                  Project Type: <strong>{selectedTemplate}</strong>
                </Typography>
              )}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <FormControl
                    variant="standard"
                    sx={{ m: 1 }}
                    fullWidth
                    margin="dense"
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Select Improvement KPI
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={improvementKPI}
                      onChange={(e) => {
                        setImprovementKPI(e.target.value);
                      }}
                      label="Assign action item to"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {_projectKPIs
                        .filter((k) => k.defaultFor === selectedTemplate)
                        .map((k) => (
                          <MenuItem value={k.name} key={k.id}>
                            {k.name}
                          </MenuItem>
                        ))}
                    </Select>
                    {selectedTemplate === "" && (
                      <FormHelperText>
                        Select a Project template to get a list of KPIs
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  {_projectTemplates
                    .filter((t) => t.name === selectedTemplate)
                    ?.map((t) => (
                      <>
                        <TextField
                          margin="dense"
                          id="name"
                          label="Target for the KPI (Enter Number)"
                          type="number"
                          onChange={(e) => handleTargetChange(e, t.uom)}
                          value={kpiTarget}
                          fullWidth
                          variant="standard"
                        />
                        <FormHelperText>
                          Enter {t.metric} in{" "}
                          <span className={classes.helperText}>
                            {t.unitOfMeasure}
                          </span>
                        </FormHelperText>
                      </>
                    ))}
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                size="small"
                disabled={improvementKPI === "" || kpiTarget === ""}
                className={classes.actionButton}
                onClick={() => handleKPIsChange()}
              >
                Save
              </Button>
            </Collapse>
            <Collapse in={!stageOneCollapse}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.opportunitiesHeader}
                >
                  <Typography className={classes.heading}>
                    Target Opportunities for this Phase
                  </Typography>
                  <Typography variant="body2">
                    Move opportunities targeted for the phase into the right box
                    under Opportunities
                  </Typography>
                </Grid>

                {left?.length < 1 ? (
                  <>
                    <Grid item className={classes.opportunitiesSection}>
                      <Image
                        src={clapImage}
                        height={100}
                        alt="congratulations"
                      />
                      <Typography variant="body2">
                        All Opportunities have been added to the phase.
                      </Typography>
                    </Grid>
                  </>
                ) : (
                  <>
                    {opportunitiesLibrary(left)}
                    <Grid item>
                      <Grid container direction="column" alignItems="center">
                        <Button
                          sx={{ mt: 0.5 }}
                          variant="outlined"
                          size="small"
                          onClick={handleAllRight}
                          disabled={left.length === 0}
                          aria-label="move all right"
                        >
                          Add All ≫
                        </Button>
                        <Button
                          sx={{ mt: 0.5 }}
                          variant="outlined"
                          size="small"
                          onClick={handleCheckedRight}
                          disabled={leftChecked.length === 0}
                          aria-label="move selected right"
                        >
                          Add Selected &gt;
                        </Button>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Grid>
            </Collapse>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card
              elevation={0}
              variant="outlined"
              className={classes.inlineCard}
            >
              <CardContent>
                {kpiAndTargets?.length > 0 ? (
                  <>
                    <Typography variant="body1" className={classes.heading}>
                      Phase Improvement Targets
                    </Typography>
                    <Grid container>
                      <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Typography
                          variant="body1"
                          className={classes.subHeading}
                        >
                          Phase Improvement KPI
                        </Typography>
                      </Grid>
                      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Typography
                          variant="body1"
                          className={classes.subHeading}
                        >
                          Improvement KPI Target
                        </Typography>
                      </Grid>
                    </Grid>
                    {kpiAndTargets?.map((target) => (
                      <>
                        <Grid container>
                          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                            <Grid container>
                              <Grid item xs={3} sm={3} md={2} lg={2} xl={2}>
                                <Adjust />
                              </Grid>
                              <Grid item xs={9} sm={9} md={10} lg={10} xl={10}>
                                <Typography variant="body2">
                                  {target.improvementKPI}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Typography variant="body2">
                              {target.kpiTarget}
                              {target.unitOfMeasure}
                            </Typography>
                          </Grid>
                        </Grid>
                      </>
                    ))}
                    <Collapse in={!stageOneCollapse}>
                      <Grid container className={classes.opportunitiesSection}>
                        <Typography variant="body1" className={classes.heading}>
                          Selected Opportunities
                        </Typography>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                          {right?.length < 1 ? (
                            <>
                              <Image
                                src={nothingToSee}
                                alt="Nothing to show"
                                height={100}
                              />
                              <Typography>
                                Selected opportunities will appear here
                              </Typography>
                            </>
                          ) : (
                            <>
                              {selectedPhaseOpportunities(right)}
                              <Button
                                sx={{ my: 0.5 }}
                                variant="outlined"
                                size="small"
                                onClick={handleAllLeft}
                                disabled={right.length === 0}
                                aria-label="move all left"
                              >
                                UNDO
                              </Button>
                            </>
                          )}
                        </Grid>
                      </Grid>
                    </Collapse>
                  </>
                ) : (
                  <>
                    <Box
                      alignItems="center"
                      justifyContent="center"
                      display="flex"
                    >
                      <Image
                        src={nothingToSee}
                        alt="Targetted_KPIs"
                        height={150}
                      />
                    </Box>
                    <Typography variant="body2" color="primary" align="center">
                      Improvement KPIs and targets will be shown here. Use the
                      add KPI options to add more
                    </Typography>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProjectPhaseCard;
