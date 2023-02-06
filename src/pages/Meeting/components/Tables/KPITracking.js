import React from "react";
import {
  Button,
  Chip,
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
import { Flare } from "@material-ui/icons";

const performanceMetrics = [
  {
    id: 1,
    kpi: "Container Capacity",
    target: 5500,
    delivered: 6000,
    uom: "",
    status: "On Track",
  },
  {
    id: 2,
    kpi: "Average container cost of sales",
    target: 150,
    delivered: 155,
    uom: "£",
    status: "On Track",
  },
  {
    id: 3,
    kpi: "Material cost per container",
    target: 150,
    delivered: 145,
    uom: "£",
    status: "On Track",
  },
  {
    id: 4,
    kpi: "Distribution cost per container",
    target: 14,
    delivered: 14,
    uom: "£",
    status: "On Track",
  },
  {
    id: 5,
    kpi: "Labour cost per container",
    target: 15.5,
    delivered: 15,
    uom: "£",
    status: "At Risk",
  },
  {
    id: 6,
    kpi: "Productivity: Minutes per container",
    target: 15.5,
    delivered: 15,
    uom: "£",
    status: "On Track",
  },
];

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
  nudgeText: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  actionButton: {
    marginTop: theme.spacing(1),
  },
}));

const KPITracking = ({ open, setOpen, setComplete }) => {
  const classes = useStyles();

  const handleAddActionToggle = () => {
    setOpen(!open);
    setComplete(false);
  };

  return (
    <Paper variant="outlined" elevation={0} className={classes.root}>
      <Typography variant="body2" className={classes.nudgeText}>
        Review performance for the week by comparing the weekly target to actual
        achievement
      </Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Performance Metric</TableCell>
              <TableCell align="left">Target</TableCell>
              <TableCell align="left">Achieved</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {performanceMetrics.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  <Typography variant="body1" className={classes.nameText}>
                    {row.kpi}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1" className={classes.subText}>
                    {row.uom} {row.target}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1" className={classes.subText}>
                    {row.uom} {row.delivered}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1" className={classes.subText}>
                    {row.status === "On Track" ? (
                      <Chip label={row.status} color="primary" />
                    ) : (
                      <Chip label={row.status} color="secondary" />
                    )}
                  </Typography>
                  {row.status !== "On Track" && (
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      onClick={() => handleAddActionToggle()}
                      className={classes.actionButton}
                    >
                      <Flare />
                      Create Action Item
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default KPITracking;
