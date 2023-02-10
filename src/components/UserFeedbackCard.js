import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Person } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {},
  introContainer: {
    paddingTop: theme.spacing(5),
  },
  userFeedbackCard: {
    backgroundColor: theme.palette.primary.lighter,
    borderRadius: 20,
    borderColor: theme.palette.primary.lighter,
    marginTop: theme.spacing(2),
  },
  avatar: {
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.light,
  },
  nameText: {
    overflowX: "hidden",
    color: theme.palette.primary.main,
  },
  cardSlugText: {
    overflowX: "hidden",
    color: theme.palette.primary.main,
    marginTop: theme.spacing(2),
  },
  divider: {
    backgroundColor: theme.palette.primary.light,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  subTitle: {
    fontWeight: 600,
    marginTop: theme.spacing(1),
  },
}));

const UserFeedbackCard = ({ userFeedback, key }) => {
  const classes = useStyles();

  return (
    <Card
      elevation={0}
      className={classes.userFeedbackCard}
      variant="outlined"
      key={key}
    >
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={3} xl={1} lg={1} md={1}>
            <Avatar variant="circular" className={classes.avatar}>
              <Person />
            </Avatar>
          </Grid>
          <Grid item xs={5} sm={5} xl={3} lg={3} md={3}>
            <Typography variant="body1" className={classes.nameText}>
              <strong>{userFeedback.name}</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Typography variant="body2" className={classes.nameText}>
              IMPROVEMENT ATTITUDES
            </Typography>
            <Divider />
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} xl={6} lg={6} md={6}>
                <Typography variant="body2" className={classes.subTitle}>
                  Improvement Attitudes
                </Typography>
                <List dense>
                  {userFeedback.improvementPosAttitude?.map((att) => (
                    <ListItem>
                      <ListItemText primary={att} key={att} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} sm={12} xl={6} lg={6} md={6}>
                <Typography variant="body2" className={classes.subTitle}>
                  Negative Attitudes
                </Typography>
                <List dense>
                  {userFeedback.improvementNegAttitude?.map((att) => (
                    <ListItem>
                      <ListItemText primary={att} key={att} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2" className={classes.nameText}>
              FEEDBACK
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="body2">{userFeedback.feedbackText}</Typography>
            <Typography variant="body2" className={classes.cardSlugText}>
              Feedback Given by: <strong>Jackson Doe</strong>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserFeedbackCard;
