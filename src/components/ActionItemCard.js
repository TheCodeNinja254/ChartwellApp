import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Collapse,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { ListSharp, PersonOutline, Watch } from "@material-ui/icons";
import _actionStatus from "../_mockData/_actionStatus";
import CloseActionModal from "../pages/Meeting/components/Feedback/CloseActionModal";

const useStyles = makeStyles((theme) => ({
  root: {},
  introContainer: {
    paddingTop: theme.spacing(5),
  },
  actionItemsCard: {
    borderRadius: 20,
    marginTop: theme.spacing(2),
  },
  avatar: {
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.light,
  },
  nameText: {
    overflowX: "hidden",
    color: theme.palette.primary.main,
    marginTop: theme.spacing(1),
  },
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  textDivider: {
    margin: theme.spacing(2),
  },
  referenceText: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontWeight: 700,
  },
  icon: {
    marginTop: theme.spacing(2),
  },
  actionBox: {
    marginTop: theme.spacing(2),
    borderRadius: 20,
  },
  actionText: {
    fontWeight: 700,
  },
  setStatusBox: {
    marginTop: theme.spacing(2),
  },
}));

const ActionItemCard = ({ item }) => {
  const classes = useStyles();

  const [sectCollapsed, setSectCollapsed] = useState(false);
  const [complete, setComplete] = useState(false);
  const [status, setStatus] = React.useState(item.status);
  const [actionClosureModal, setActionClosureModal] = React.useState(false);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleActionStatusChange = () => {
    setSectCollapsed(!sectCollapsed);
    setComplete(false);

    if (status === "Completed") {
      setActionClosureModal(true);
    }
  };

  return (
    <Card elevation={0} className={classes.actionItemsCard} variant="outlined">
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Grid container spacing={3}>
              <Grid item xs={3} xl={1} lg={1} md={1}>
                <Avatar variant="circular" className={classes.avatar}>
                  <ListSharp />
                </Avatar>
              </Grid>
              <Grid item xs={9} xl={11} lg={11} md={11}>
                <Typography variant="body1" className={classes.nameText}>
                  Action Item: <strong>{item.title}</strong>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  variant="body2"
                  color="secondary"
                  className={classes.referenceText}
                >
                  Ref No.: {item.id}
                </Typography>
                <Divider className={classes.textDivider} />
                <Typography variant="body2">
                  Corresponding Opportunity:{" "}
                  <strong>{item.correspondingOpportunity}</strong>
                </Typography>
                <Typography variant="body2">
                  Due Date: <strong>{item.dueDate}</strong>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Card
              className={classes.actionBox}
              elevation={0}
              variant="outlined"
            >
              <CardContent>
                <Grid container>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <Typography variant="body2">
                      <PersonOutline />
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Typography variant="body2" className={classes.actionText}>
                      {item.assignee}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card
              className={classes.actionBox}
              elevation={0}
              variant="outlined"
            >
              <CardContent>
                <Grid container>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <Typography variant="body2">
                      <Watch />
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Chip
                      label={status}
                      color={status === "Completed" ? "primary" : ""}
                    />
                  </Grid>
                  <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={() => setSectCollapsed(!sectCollapsed)}
                      disabled={status === "Completed"}
                    >
                      {!sectCollapsed ? "Change" : "Hide"}
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Collapse in={sectCollapsed}>
                      <Card
                        className={classes.setStatusBox}
                        elevation={0}
                        variant="outlined"
                      >
                        <CardContent>
                          <Typography variant="body2">Change Status</Typography>
                          <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={status}
                            onChange={handleStatusChange}
                          >
                            {_actionStatus?.map((state) => (
                              <FormControlLabel
                                key={state.id}
                                value={state.name}
                                control={<Radio />}
                                label={
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                  >
                                    {state.name}
                                  </Typography>
                                }
                              />
                            ))}
                          </RadioGroup>
                          <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            onClick={() => handleActionStatusChange()}
                          >
                            Done
                          </Button>
                        </CardContent>
                      </Card>
                    </Collapse>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <CloseActionModal
          setOpen={setActionClosureModal}
          open={actionClosureModal}
          complete={complete}
          setComplete={setComplete}
          correspondingOpportunity={item.correspondingOpportunity}
        />
      </CardContent>
    </Card>
  );
};

export default ActionItemCard;
