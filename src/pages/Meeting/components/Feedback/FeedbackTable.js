import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import _feedbackAttitudes from "../../../../_mockData/_feedbackAttitudes";
import TableRowWithCheckbox from "../../../../components/TableRowWithCheckbox";

const FeedbackTable = ({
  setImprovementPosAttitude,
  improvementPosAttitude,
  setImprovementNegAttitude,
  improvementNegAttitude,
}) => {
  return (
    <TableContainer>
      <Table size="small" aria-label="dense table">
        <TableHead>
          <TableRow>
            <TableCell>Improvement Attitudes</TableCell>
            <TableCell>Negative Attitudes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {_feedbackAttitudes.map((row) => (
            <TableRowWithCheckbox
              id={row.id}
              key={row.id}
              positiveAttitude={row.pos}
              negativeAttitude={row.neg}
              setImprovementNegAttitude={setImprovementNegAttitude}
              improvementNegAttitude={improvementNegAttitude}
              setImprovementPosAttitude={setImprovementPosAttitude}
              improvementPosAttitude={improvementPosAttitude}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FeedbackTable;
