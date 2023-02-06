import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  actionTitle: {
    color: theme.palette.primary.main,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  actionCard: {
    marginTop: theme.spacing(2),
    borderRadius: 20,
  },
  checkBoxSection: {
    marginTop: theme.spacing(1),
  },
}));

const ProjectActionItemCard = ({ checked, handleToggle, value, labelId }) => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState();
  const [assignee, setAssignee] = React.useState("");

  const handleAssigneeChange = (event) => {
    setAssignee(event.target.value);
  };

  return (
    <Card elevation={0} variant="outlined" className={classes.actionCard}>
      <CardContent>
        <Typography variant="body2" className={classes.actionTitle}>
          <strong>Action Item: </strong>
          {value?.actionName}
        </Typography>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  label="Due Date"
                  required
                  fullWidth
                  value={selectedDate}
                  animateYearScrolling
                  format="dd/MM/yyyy"
                  onChange={(dateValue) => {
                    setSelectedDate(dateValue);
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
            <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-standard-label">
                  Assign Task
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={assignee}
                  onChange={handleAssigneeChange}
                  label="Assign Task"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Jane">Jane Doe</MenuItem>
                  <MenuItem value="John">John Doe</MenuItem>
                  <MenuItem value="Sebastian">Sebastian Cricket</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <FormGroup className={classes.checkBoxSection}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.indexOf(value) !== -1}
                      onChange={handleToggle(value)}
                      tabIndex={-1}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2">Select Action Item</Typography>
                  }
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectActionItemCard;
