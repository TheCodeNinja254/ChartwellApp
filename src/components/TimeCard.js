import React from "react";
import { Box, Card, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "./Image";
import clockImage from "../assets/images/Graphics/clock.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 20,
    marginTop: theme.spacing(2),
  },
  cardLabel: {
    fontSize: 10,
    color: theme.palette.primary.main,
  },
  timeBox: {
    marginTop: theme.spacing(3),
  },
  cardContentText: {
    marginBottom: theme.spacing(1),
    fontSize: 16,
    fontWeight: 700,
  },
}));

const TimeCard = ({ selectedDate, selectedTime }) => {
  const classes = useStyles();

  return (
    <Card elevation={0} variant="outlined" className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={5} sm={5} md={4} lg={4} xl={4}>
          <Image src={clockImage} height={120} alt="clock" />
        </Grid>
        <Grid item xs={7} sm={7} md={8} lg={8} xl={8}>
          <Box className={classes.timeBox}>
            <Typography variant="body2" className={classes.cardLabel}>
              DATE
            </Typography>
            <Typography variant="body1" className={classes.cardContentText}>
              {selectedDate}
            </Typography>
            <Typography variant="body2" className={classes.cardLabel}>
              TIME
            </Typography>
            <Typography variant="body1" className={classes.cardContentText}>
              {selectedTime}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TimeCard;
