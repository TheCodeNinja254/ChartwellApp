import React from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import _filterOptions from "../../../../_mockData/_filterOptions";

const useStyles = makeStyles((theme) => ({
  root: {},
  filterInput: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 250,
  },
  titleText: {
    fontSize: 10,
  },
}));

const FiltersSection = ({
  filterItemSelection,
  setFilterItemSelection,
  setFilterValue,
}) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setFilterValue();
    setFilterItemSelection(e.target.value);
  };

  return (
    <Box>
      <FormControl size="small" className={classes.filterInput}>
        <Typography
          variant="body2"
          color="primary"
          className={classes.titleText}
        >
          FILTER BY
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue="Select Filter"
          value={filterItemSelection}
          variant="outlined"
          onChange={handleChange}
        >
          <MenuItem value="Select Filter">
            <em>Select Filter</em>
          </MenuItem>
          {_filterOptions?.map((o) => (
            <MenuItem value={o.value} key={o.id}>
              {o.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FiltersSection;
