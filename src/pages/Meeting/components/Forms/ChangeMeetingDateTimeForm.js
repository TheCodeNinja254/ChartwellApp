import * as React from "react";
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
} from "@material-ui/pickers";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import TimeChangeModal from "../Feedback/TimeChangeModal";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 20,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  cardTitle: {
    color: theme.palette.primary.main,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

const ChangeMeetingDateTimeForm = ({
  open,
  placeHolderDate,
  setPlaceHolderDate,
  placeHolderTime,
  setPlaceHolderTime,
  timeHasChanged,
  dateHasChanged,
  setSelectedDate,
  setSelectedTime,
  setOpen,
  handleTimeChange,
  setDateHasChanged,
  setTimeHasChanged,
}) => {
  const classes = useStyles();

  const buttonDisabledStatus = (_timeHasChanged, _dateHasChanged) => {
    let status = true;

    if (_timeHasChanged || _dateHasChanged) {
      status = false;
    }

    return status;
  };

  return (
    <Card elevation={0} variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="body2" className={classes.cardTitle}>
          Select a new meeting date and time by tapping on any of the fields
          below
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                label="Meeting Date"
                required
                fullWidth
                value={placeHolderDate}
                animateYearScrolling
                format="dd/MM/yyyy"
                onChange={(dateValue) => {
                  setDateHasChanged(true);
                  setSelectedDate(dateValue);
                  setPlaceHolderDate(dateValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    helperText={params?.inputProps?.placeholder}
                  />
                )}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <TimePicker
                label="Meeting Time"
                value={placeHolderTime}
                required
                fullWidth
                onChange={(timeValue) => {
                  setTimeHasChanged(true);
                  setSelectedTime(timeValue);
                  setPlaceHolderTime(timeValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Button
              fullWidth
              size="small"
              disabled={buttonDisabledStatus(timeHasChanged, dateHasChanged)}
              disableElevation
              variant="contained"
              color="primary"
              onClick={() => handleTimeChange()}
            >
              Change
            </Button>
          </Grid>
        </Grid>
        <TimeChangeModal open={open} setOpen={setOpen} />
      </CardContent>
    </Card>
  );
};

export default ChangeMeetingDateTimeForm;
