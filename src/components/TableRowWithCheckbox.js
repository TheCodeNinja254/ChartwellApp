import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";

const TableRowWithCheckbox = ({
  id,
  positiveAttitude,
  negativeAttitude,
  setImprovementPosAttitude,
  improvementPosAttitude,
  setImprovementNegAttitude,
  improvementNegAttitude,
}) => {
  const [value, setValue] = React.useState("");

  // add to the positive attitudes array
  const handleAddImprovementPosAttitude = (event) => {
    const _value = event.target.value;

    // add to states value to keep the checkbox on table updated
    setValue(_value);

    // initialize the current array state
    const newPos = [...improvementPosAttitude];

    // check the current index of the same item in the array
    const currentIndex = improvementPosAttitude.indexOf(positiveAttitude);

    // only add it the item is not in the array already
    if (currentIndex === -1) {
      newPos.push(positiveAttitude);
      setImprovementPosAttitude(newPos);
    }
  };

  // Add to the negative attitudes array
  const handleAddImprovementNegAttitude = (event) => {
    const _value = event.target.value;

    // add to states value to keep the checkbox on table updated
    setValue(_value);

    // initialize the current array state
    const newNeg = [...improvementNegAttitude];

    // check the current index of the same item in the array
    const currentIndex = improvementNegAttitude.indexOf(negativeAttitude);

    // only add it the item is not in the array already
    if (currentIndex === -1) {
      newNeg.push(negativeAttitude);
      setImprovementNegAttitude(newNeg);
    }
  };

  return (
    <TableRow key={id}>
      <TableCell scope="row">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleAddImprovementPosAttitude}
          >
            <FormControlLabel
              value={positiveAttitude}
              control={<Radio />}
              label={
                <Typography variant="body2">{positiveAttitude}</Typography>
              }
            />
          </RadioGroup>
        </FormControl>
      </TableCell>
      <TableCell scope="row">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleAddImprovementNegAttitude}
          >
            <FormControlLabel
              value={negativeAttitude}
              control={<Radio />}
              label={
                <Typography variant="body2">{negativeAttitude}</Typography>
              }
            />
          </RadioGroup>
        </FormControl>
      </TableCell>
    </TableRow>
  );
};

export default TableRowWithCheckbox;
