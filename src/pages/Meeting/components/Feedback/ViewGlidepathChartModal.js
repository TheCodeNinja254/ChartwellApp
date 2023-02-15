import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../../../components/Image";
import chart from "../../../../assets/images/glidepath.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  pageTitle: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    fontWeight: 700,
    textAlign: "center",
  },
  image: {
    marginTop: theme.spacing(3),
  },
}));

const ViewGlidepathChartModal = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <Typography className={classes.pageTitle} variant="h3">
        View Project&apos;s Totalizer Glidepath
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image src={chart} height={400} alt="chart" className={classes.image} />
      </Box>
      <DialogActions>
        <Button
          onClick={handleClose}
          color="primary"
          size="small"
          variant="contained"
        >
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewGlidepathChartModal;
