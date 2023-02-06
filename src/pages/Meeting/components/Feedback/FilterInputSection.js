import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Search } from "@material-ui/icons";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment/moment";
import _opportunities from "../../../../_mockData/_opportunities";
import _actionStatus from "../../../../_mockData/_actionStatus";
import _membersList from "../../../../_mockData/_membersList";

const useStyles = makeStyles((theme) => ({
  root: {},
  filterInput: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 250,
  },
  filterItemInput: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 300,
    [theme.breakpoints.down("sm")]: {
      minWidth: 250,
      maxWidth: 250,
    },
  },
  filterItemTextField: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    minWidth: 250,
    [theme.breakpoints.down("sm")]: {
      minWidth: 250,
      maxWidth: 250,
    },
  },
  titleText: {
    fontSize: 10,
  },
}));

const FilterInputSection = ({
  filterItemSelection,
  filterValue,
  handleChange,
  setFilterValue,
}) => {
  const classes = useStyles();

  const [dateValue, setDateValue] = useState();

  const handleDateChange = (date) => {
    const _date = moment(date).format("Do MMM Y");
    setFilterValue(_date);
  };

  return (
    <Box>
      {filterItemSelection === "correspondingOpportunity" && (
        <FormControl size="small" className={classes.filterItemInput}>
          <Typography
            variant="body2"
            color="primary"
            className={classes.titleText}
          >
            Select opportunity to filter by
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue="Select Opportunity"
            value={filterValue}
            variant="outlined"
            onChange={handleChange}
          >
            <MenuItem value="Select Opportunity">
              <em>Select Opportunity</em>
            </MenuItem>
            {_opportunities?.map((o) => (
              <MenuItem value={o} key={o}>
                {o}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {filterItemSelection === "status" && (
        <FormControl size="small" className={classes.filterInput}>
          <Typography
            variant="body2"
            color="primary"
            className={classes.titleText}
          >
            Select status to filter by
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue="Select Status"
            value={filterValue}
            variant="outlined"
            onChange={handleChange}
          >
            <MenuItem value="Select Status">
              <em>Select Status</em>
            </MenuItem>
            {_actionStatus?.map((o) => (
              <MenuItem value={o.name} key={o.name}>
                {o.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {filterItemSelection === "assignee" && (
        <FormControl size="small" className={classes.filterInput}>
          <Typography
            variant="body2"
            color="primary"
            className={classes.titleText}
          >
            Select responsible person
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue="Select responsible person"
            value={filterValue}
            variant="outlined"
            onChange={handleChange}
          >
            <MenuItem value="Select responsible person">
              <em>Select responsible person</em>
            </MenuItem>
            {_membersList?.map((o) => (
              <MenuItem value={o.name} key={o.name}>
                {o.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {filterItemSelection === "title" && (
        <>
          <TextField
            className={classes.filterItemTextField}
            id="name"
            size="small"
            value={filterValue}
            onChange={handleChange}
            label="Search Action Item"
            type="text"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </>
      )}

      {filterItemSelection === "dueDate" && (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            className={classes.filterItemTextField}
            label="Due Date"
            inputVariant="outlined"
            required
            size="small"
            value={dateValue}
            animateYearScrolling
            format="dd/MM/yyyy"
            onChange={(_dateValue) => {
              handleDateChange(_dateValue);
              setDateValue(_dateValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                helperText={params?.inputProps?.placeholder}
              />
            )}
          />
        </MuiPickersUtilsProvider>
      )}
    </Box>
  );
};

export default FilterInputSection;
