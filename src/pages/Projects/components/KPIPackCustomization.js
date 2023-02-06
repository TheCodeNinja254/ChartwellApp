import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavigateNext, SelectAll } from "@material-ui/icons";
import pieChart from "../../../assets/images/Graphics/pieChart.png";
import nothingToSee from "../../../assets/images/Graphics/nothingToSee.jpg";
import Image from "../../../components/Image";
import ActionListSection from "./ActionListSection";

const useStyles = makeStyles((theme) => ({
  root: {},
  actionItemsCard: {
    borderRadius: 20,
    margin: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  sectionHeader: {
    marginTop: theme.spacing(2),
    fontWeight: 700,
  },
  subHeading: {
    marginTop: theme.spacing(2),
    fontWeight: 700,
  },
  chartsCard: {
    marginTop: theme.spacing(2),
    borderRadius: 20,
  },
  chartCard: {
    margin: theme.spacing(1),
  },
  toggleButton: {
    margin: theme.spacing(1),
  },
  reverseToggleButton: {
    margin: theme.spacing(1),
    color: theme.palette.error.main,
    borderColor: theme.palette.error.main,
  },
  defaultChartText: {
    fontWeight: 700,
    fontSize: 10,
    margin: theme.spacing(1),
  },
  navigationButton: {
    marginTop: theme.spacing(2),
  },
}));

const charts = [
  {
    chartName: "Pie Chart",
    chartPic: pieChart,
    defaultFor: "Throughput Increase",
  },
  {
    chartName: "Glide-path Chart",
    chartPic: pieChart,
    defaultFor: "Productivity Increase",
  },
  {
    chartName: "Hours Chart",
    chartPic: pieChart,
    defaultFor: "Waste Reduction",
  },
  {
    chartName: "Cost Per Container Chart",
    chartPic: pieChart,
    defaultFor: "Waste Reduction",
  },
];

const not = (a, b) => {
  return a.filter((value) => b.indexOf(value) === -1);
};

const intersection = (a, b) => {
  return a.filter((value) => b.indexOf(value) !== -1);
};

const KPIPackCustomization = ({ selectedTemplate }) => {
  const classes = useStyles();

  const [stageThreeCollapse, setStageThreeCollapse] = React.useState(true);
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState(
    charts.filter((chart) => chart.defaultFor !== selectedTemplate)
  );
  const [right, setRight] = React.useState(
    charts.filter((chart) => chart.defaultFor === selectedTemplate)
  );

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
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

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const ChartsLibrary = ({ items, gridSize }) => {
    return items.map((value) => {
      const labelId = `transfer-list-item-${value?.chartName}-label`;

      return (
        <Grid item xs={12} sm={12} md={6} lg={gridSize} xl={gridSize}>
          <Card elevation={0} variant="outlined" className={classes.chartCard}>
            <CardHeader
              title={<Typography variant="body2">{value.chartName}</Typography>}
            />
            <CardMedia
              component="img"
              height="50"
              image={value.chartPic}
              alt="chart"
            />
            <CardActions disableSpacing>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.indexOf(value) !== -1}
                      onChange={handleToggle(value)}
                      tabIndex={-1}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  }
                  label={<Typography variant="body2">Select Chart</Typography>}
                />
              </FormGroup>
            </CardActions>
            {selectedTemplate.toString() === value.defaultFor.toString() && (
              <Typography
                color="primary"
                variant="body2"
                className={classes.defaultChartText}
              >
                Default Chart
              </Typography>
            )}
          </Card>
        </Grid>
      );
    });
  };

  return (
    <Card elevation={0} className={classes.actionItemsCard} variant="outlined">
      {stageThreeCollapse ? (
        <CardContent>
          <Typography variant="body1" color="primary">
            <strong>KPI Pack Customization</strong>
          </Typography>
          <Typography variant="body2" color="primary">
            Select a chart to aid in visualization of key performance metrics
            for this Improvement project
          </Typography>
          <Divider className={classes.divider} />
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card
                elevation={0}
                variant="outlined"
                className={classes.chartsCard}
              >
                <CardContent>
                  <Typography variant="body1" className={classes.sectionHeader}>
                    Select a chart
                  </Typography>
                  <Typography variant="body2">
                    See all available charts below:
                  </Typography>
                  <Divider className={classes.divider} />
                  <Box>
                    <Button
                      sx={{ my: 0.5 }}
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={handleCheckedRight}
                      disabled={leftChecked.length === 0}
                      aria-label="move selected right"
                      className={classes.toggleButton}
                    >
                      Add To Project
                    </Button>
                    <Button
                      sx={{ my: 0.5 }}
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={handleAllRight}
                      disabled={left.length === 0}
                      aria-label="move all right"
                      className={classes.toggleButton}
                    >
                      <SelectAll />
                      Add All
                    </Button>
                    <Typography variant="body2" className={classes.subHeading}>
                      All Charts
                    </Typography>
                  </Box>
                  {left?.length > 0 ? (
                    <Grid container>
                      <ChartsLibrary items={left} gridSize={6} />
                    </Grid>
                  ) : (
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <br />
                      <Image
                        src={nothingToSee}
                        height={100}
                        alt="Nothing to see"
                      />
                      <Typography variant="body2">
                        All charts are already added to the project
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <Card
                elevation={0}
                variant="outlined"
                className={classes.chartsCard}
              >
                <CardContent>
                  <Typography variant="body1" className={classes.sectionHeader}>
                    Project: {selectedTemplate}
                  </Typography>
                  <Typography variant="body2">
                    Charts added to the project.
                  </Typography>
                  <Divider className={classes.divider} />
                  <Button
                    sx={{ my: 0.5 }}
                    variant="outlined"
                    size="small"
                    onClick={handleCheckedLeft}
                    disabled={rightChecked.length === 0}
                    aria-label="move selected left"
                    className={classes.reverseToggleButton}
                  >
                    Remove
                  </Button>
                  <Button
                    sx={{ my: 0.5 }}
                    variant="outlined"
                    size="small"
                    onClick={handleAllLeft}
                    disabled={right.length === 0}
                    aria-label="move all left"
                    className={classes.reverseToggleButton}
                  >
                    <SelectAll /> Remove All
                  </Button>
                  <Typography variant="body2" className={classes.subHeading}>
                    Selected Charts
                  </Typography>
                  {right?.length > 0 ? (
                    <Grid container>
                      <ChartsLibrary items={right} gridSize={3} />
                    </Grid>
                  ) : (
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={nothingToSee}
                        height={100}
                        alt="Nothing to see"
                      />
                      <Typography variant="body2">
                        Select a chart to add to this project. Selected charts
                        will appear here.
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="right" alignItems="right">
            <Button
              variant="contained"
              disableElevation
              fullWidth
              color="primary"
              onClick={() => setStageThreeCollapse(false)}
              className={classes.navigationButton}
            >
              NEXT <NavigateNext />
            </Button>
          </Box>
        </CardContent>
      ) : (
        <ActionListSection selectedTemplate={selectedTemplate} />
      )}
    </Card>
  );
};

export default KPIPackCustomization;
