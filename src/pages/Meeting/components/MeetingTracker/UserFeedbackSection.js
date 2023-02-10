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

const UserFeedbackSection = ({ feedbackData }) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h3" className={classes.heading}>
        Given Feedback
      </Typography>
      {feedbackData?.map((userFeedback) => (
        <UserFeedbackCard userFeedback={userFeedback} key={userFeedback.id} />
      ))}
    </Box>
  );
};

export default UserFeedbackSection;
