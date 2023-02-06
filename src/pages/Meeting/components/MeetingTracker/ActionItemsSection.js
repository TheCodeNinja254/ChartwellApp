import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import ActionItemCard from "../../../../components/ActionItemCard";
import FiltersSection from "../Feedback/FiltersSection";
import SortSection from "../Feedback/SortSection";
import FilterInputSection from "../Feedback/FilterInputSection";
import Image from "../../../../components/Image";
import nothingToShow from "../../../../assets/images/Graphics/nothingToSee.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

const ActionItemsSection = ({ actionItems }) => {
  const classes = useStyles();

  const [filterItemSelection, setFilterItemSelection] =
    useState("Select Filter");

  const [filterValue, setFilterValue] = useState();

  console.log(filterItemSelection);
  console.log(filterValue);

  const filteredActionItems =
    filterItemSelection !== "Select Filter" && filterValue !== undefined
      ? actionItems.filter((item) =>
          item[filterItemSelection].includes(filterValue)
        )
      : actionItems;

  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography variant="h3" className={classes.heading}>
          Action List
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <FiltersSection
              setFilterItemSelection={setFilterItemSelection}
              setFilterValue={setFilterValue}
            />
          </Grid>
          {filterItemSelection !== "Select Filter" && (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <FilterInputSection
                filterItemSelection={filterItemSelection}
                handleChange={handleChange}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
              />
            </Grid>
          )}
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <SortSection />
          </Grid>
        </Grid>

        {filteredActionItems?.map((item) => (
          <ActionItemCard item={item} key={item.id} />
        ))}

        {filteredActionItems?.length < 1 && (
          <Box>
            <Image src={nothingToShow} alt="Nothing to show" height={120} />
            <Typography variant="body2">
              Nothing matches your filter criteria
            </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default ActionItemsSection;
