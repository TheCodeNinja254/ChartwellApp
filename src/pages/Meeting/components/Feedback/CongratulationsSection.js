import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../../../components/Image";
import displayImage from "../../../../assets/images/Graphics/champagne.png";
import CongratulationsModal from "./CongratulationModal";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 30,
    marginTop: theme.spacing(3),
  },
  mainText: {
    color: theme.palette.white.main,
    textAlign: "center",
    fontWeight: 700,
  },
  subText: {
    color: theme.palette.white.main,
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
  actionButton: {
    marginTop: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white.main,
    },
  },
}));

const CongratulationsSection = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Image src={displayImage} alt="congratulations" height={90} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography className={classes.mainText} variant="h3">
                Congratulations! Your Team is on Track!
              </Typography>
            </Box>
            <Typography variant="body2" className={classes.subText}>
              Take a moment to congratulate your team for outstanding
              performance.
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                variant="contained"
                className={classes.actionButton}
                onClick={() => setOpen(true)}
              >
                Congratulate Team
              </Button>
            </Box>
          </Grid>
        </Grid>
        <CongratulationsModal open={open} setOpen={setOpen} />
      </CardContent>
    </Card>
  );
};

export default CongratulationsSection;
