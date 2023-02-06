import { Box, Divider, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import KPITracking from "../Tables/KPITracking";
import Image from "../../../../components/Image";
import displayImage from "../../../../assets/images/Graphics/measurePerformance.jpg";
import CongratulationsSection from "../Feedback/CongratulationsSection";
import AddActionModal from "../Feedback/AddActionModal";

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2),
  },
}));

const KPITrackingSection = ({
  actionItemsActiveList,
  setActionItemsActiveList,
}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [complete, setComplete] = React.useState(false);

  return (
    <Box>
      <Typography variant="h3" className={classes.heading}>
        Performance Review
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Image src={displayImage} alt="Measure Performance" height={200} />
          <Typography variant="body1">
            <strong>
              If you can&apos;t measure it, you can&apos;t improve it.
            </strong>
          </Typography>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <KPITracking
            open={open}
            setOpen={setOpen}
            setComplete={setComplete}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <CongratulationsSection />
        </Grid>
      </Grid>
      <AddActionModal
        open={open}
        setOpen={setOpen}
        setComplete={setComplete}
        complete={complete}
        actionItemsActiveList={actionItemsActiveList}
        setActionItemsActiveList={setActionItemsActiveList}
      />
    </Box>
  );
};

export default KPITrackingSection;
