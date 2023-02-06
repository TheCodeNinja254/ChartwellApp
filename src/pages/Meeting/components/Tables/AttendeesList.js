import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import _membersList from "../../../../_mockData/_membersList";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    borderRadius: 20,
  },
  heading: {
    fontWeight: 700,
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  nameText: {
    color: theme.palette.primary.main,
  },
  subText: {
    fontSize: 10,
  },
  tableHeader: {
    color: theme.palette.primary.main,
  },
}));

const AttendeesList = () => {
  const classes = useStyles();

  const [checked, setChecked] = React.useState([]);

  const handleChange = (id) => {
    checked.push(id);
    setChecked(checked);
  };

  return (
    <Paper variant="outlined" elevation={0} className={classes.root}>
      <Typography variant="body1" className={classes.heading}>
        Meeting Attendance
      </Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className={classes.tableHeader}>
                NAME
              </TableCell>
              <TableCell align="left" className={classes.tableHeader}>
                ATTENDANCE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_membersList?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  <Typography variant="body1" className={classes.nameText}>
                    <strong>{row.name}</strong>
                  </Typography>
                  <Typography variant="body2" className={classes.subText}>
                    Dept: {row.department}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <FormGroup>
                    <FormControlLabel
                      value={row.id}
                      control={
                        <Checkbox
                          checked={checked.find((userId) => userId === row.id)}
                          onChange={() => handleChange(row.id)}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      }
                      label={<Typography variant="body2">Present</Typography>}
                    />
                  </FormGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AttendeesList;
