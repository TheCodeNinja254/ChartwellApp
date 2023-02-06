import React from "react";
import {
  Container,
  Box,
  Grid,
  Card,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { HashLink } from "react-router-hash-link";
import Page from "../../components/Page";
import bgimage from "../../assets/images/Graphics/404.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    height: "100%",
  },
  cardHeader: {
    "& span": {
      fontSize: 20,
      fontWeight: 700,
    },
  },
  cardWithBackground: {
    borderRadius: 10,
    backgroundImage: `url(${bgimage})`,
    height: 300,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.9,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  text: {
    textAlign: "center",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));
const NotFound = () => {
  const classes = useStyles();
  return (
    <Page title="404 - Not Found" className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={4} xl={4} />
            <Grid item lg={4} xl={4} sm={12} xs={12}>
              <Card elevation={0} className={classes.cardWithBackground} />

              <Typography variant="body1" className={classes.text}>
                We are sorry, this page doesn&#39;t exist
              </Typography>
              <Box display="flex" justifyContent="center">
                <HashLink to="/" smooth>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    className={classes.sendMoneyButton}
                  >
                    Go Back
                  </Button>
                </HashLink>
              </Box>
            </Grid>
            <Grid item lg={4} xl={4} />
          </Grid>
        </Container>
      </Box>
    </Page>
  );
};

export default NotFound;
