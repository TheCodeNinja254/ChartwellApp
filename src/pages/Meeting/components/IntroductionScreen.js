import React from "react";
import { Card, CardContent, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import introImage from "../../../assets/images/Graphics/meetings.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
  introContainer: {
    paddingTop: theme.spacing(5),
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: "lighter",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  textTrailing: {
    color: theme.palette.primary.main,
    fontSize: 30,
    fontWeight: "bolder",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      marginBottom: theme.spacing(2),
    },
  },
  IntroText: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3),
    overflowX: "inherit",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(0),
    },
  },
  introCard: {
    backgroundImage: `url(${introImage})`,
    height: 150,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.9,
    [theme.breakpoints.down("sm")]: {
      height: 50,
    },
  },
}));

const IntroductionScreen = () => {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.root}>
      <CardContent>
        <Container>
          <Grid container spacing={3} className={classes.introContainer}>
            <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
              <Card className={classes.introCard} elevation={0} />
            </Grid>
            <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
              <span className={classes.IntroText}>
                <span>
                  <Typography className={classes.descriptionText}>
                    Improvement Steering
                  </Typography>
                  <Typography className={classes.textTrailing}>
                    Weekly Meetings
                  </Typography>
                  <Typography className={classes.descriptionText}>
                    Keep track of weekly update meetings, track actions, KPIs,
                    Opportunities realized while providing feedback to team
                    members.
                  </Typography>
                </span>
              </span>
            </Grid>
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
};

export default IntroductionScreen;
