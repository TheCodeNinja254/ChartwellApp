import React from "react";
import { Button, Card, CardContent, Container, Grid } from "@material-ui/core";
import { HashLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import introImage from "../../../../assets/images/Graphics/intro.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
  introContainer: {
    paddingTop: theme.spacing(5),
  },
  textInitial: {
    fontSize: 30,
    fontWeight: "lighter",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  textTrailing: {
    color: theme.palette.primary.main,
    fontSize: 30,
    fontWeight: "bolder",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  IntroText: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(3),
    overflowX: "inherit",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(0),
    },
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: 200,
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      fontWeight: 200,
    },
  },
  descriptionTextTrailing: {
    fontSize: 15,
    fontWeight: 200,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      fontWeight: 200,
    },
  },
  sendMoneyButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.white.main,
    fontWeight: "lighter",
  },
  createAccount: {
    color: theme.palette.primary.main,
    fontWeight: "lighter",
    borderColor: theme.palette.primary.main,
  },
  actionButtons: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      // marginTop: theme.spacing(2),
    },
  },
  actionButtonTrailing: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      // marginTop: theme.spacing(2),
    },
  },
  introCard: {
    backgroundImage: `url(${introImage})`,
    height: 250,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.9,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  inCardTextMinor: {
    fontSize: 20,
    fontWeight: 200,
  },
  inlineText: {
    fontSize: 20,
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  inCardText: {
    fontSize: 25,
    fontWeight: 700,
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
              <Card className={classes.introCard} elevation={0}>
                <CardContent>
                  {/* <Typography className={classes.inlineText}> */}
                  {/*  <span className={classes.inCardText}> */}
                  {/*    Monitor & Improve the team and project performance */}
                  {/*  </span> */}
                  {/* </Typography> */}
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
              <span className={classes.IntroText}>
                <span>
                  <Typography className={classes.textInitial}>
                    Improvement Steering by{" "}
                  </Typography>
                  <Typography className={classes.textTrailing}>
                    Chartwell Digital
                  </Typography>
                </span>
              </span>
              <Grid container spacing={6}>
                <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                  <Typography className={classes.descriptionText}>
                    Conduct fruitful weekly meetings with actions and relevant
                    updates. Keep everyone updated, always!
                  </Typography>
                </Grid>
                <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                  <Typography className={classes.descriptionText}>
                    Monitor & Improve the project performance by measuring and
                    tracking relevant metrics.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                  <div className={classes.actionButtons}>
                    <HashLink to="/meetings" smooth>
                      <Button
                        disableElevation
                        variant="contained"
                        size="small"
                        color="primary"
                        className={classes.sendMoneyButton}
                      >
                        Conduct Meeting
                      </Button>
                    </HashLink>
                  </div>
                </Grid>
                <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                  <div className={classes.actionButtonTrailing}>
                    <HashLink to="/projects" smooth>
                      <Button
                        size="small"
                        variant="outlined"
                        className={classes.createAccount}
                      >
                        Manage Project
                      </Button>
                    </HashLink>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
};

export default IntroductionScreen;
