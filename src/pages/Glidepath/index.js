import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import chart from "../../assets/images/glidepath.png";
import Image from "../../components/Image";
import Page from "../../components/Page";

const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    marginTop: theme.spacing(4),
    borderRadius: 20,
    marginBottom: theme.spacing(8),
  },
  image: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(8),
  },
  pageTitle: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
}));

const Glidepath = () => {
  const classes = useStyles();

  return (
    <Page title="Chart" className={classes.root}>
      <Container>
        <Card elevation={0} className={classes.card}>
          <CardContent>
            <Typography
              align="center"
              variant="h2"
              className={classes.pageTitle}
            >
              Project&apos;s Glidepath
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Image
                src={chart}
                height={400}
                alt="chart"
                className={classes.image}
              />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default Glidepath;
