import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import UserFeedbackCard from "../../../../components/UserFeedbackCard";

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

const UserFeedbackSection = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h3" className={classes.heading}>
        Given Feedback
      </Typography>
      <UserFeedbackCard />
    </Box>
  );
};

export default UserFeedbackSection;
