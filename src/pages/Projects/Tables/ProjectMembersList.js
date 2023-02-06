import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import _membersList from "../../../_mockData/_membersList";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    marginTop: theme.spacing(3),
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
  switchText: {
    fontSize: 10,
  },
  tableHeader: {
    color: theme.palette.primary.main,
  },
  teamLeadSwitch: {
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&:after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  },
}));

const ProjectMembersList = () => {
  const classes = useStyles();

  const [checked, setChecked] = React.useState([]);
  const [teamLeadChecked, setTeamLeadChecked] = React.useState(1);

  const handleChange = (id) => {
    checked.push(id);
    setChecked(checked);
  };

  const handleTeamLeadChange = (id) => {
    setTeamLeadChecked(id);
  };

  return (
    <Paper variant="outlined" elevation={0} className={classes.root}>
      <Typography variant="body1" className={classes.heading}>
        Project Members
      </Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className={classes.tableHeader}>
                NAME
              </TableCell>
              <TableCell align="left" className={classes.tableHeader}>
                PROJECT MEMBER
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
                  <FormControlLabel
                    className={classes.teamLeadSwitch}
                    control={
                      <Switch
                        checked={teamLeadChecked === row.id}
                        onChange={() => handleTeamLeadChange(row.id)}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                    label={
                      <Typography
                        variant="body2"
                        className={classes.switchText}
                      >
                        Team Lead
                      </Typography>
                    }
                    labelPlacement="end"
                  />
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
                      label={
                        <Typography variant="body2">Project Member</Typography>
                      }
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

export default ProjectMembersList;
