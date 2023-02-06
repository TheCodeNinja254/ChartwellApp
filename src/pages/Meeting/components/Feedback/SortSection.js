import React, { useState } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import _sortOptions from "../../../../_mockData/_sortOptions";

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

const SortSection = () => {
  const classes = useStyles();

  const [sortOption, setSortOption] = useState("Sort");
  const handleChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <Box>
      <FormControl size="small" className={classes.filterInput}>
        <Typography
          variant="body2"
          color="primary"
          className={classes.titleText}
        >
          SORT
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortOption}
          variant="outlined"
          onChange={handleChange}
        >
          <MenuItem value="Sort">
            <em>Sort</em>
          </MenuItem>
          {_sortOptions?.map((o) => (
            <MenuItem value={o.name} key={o.id}>
              {o.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSection;
