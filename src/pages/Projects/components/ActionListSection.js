import React from "react";
import {
  Box,
  Button,
  CardContent,
  Collapse,
  Divider,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  AddCircle,
  CheckCircle,
  SelectAll,
  UnfoldLess,
} from "@material-ui/icons";
import ProjectActionItemCard from "../../../components/ProjectActionItemCard";
import Image from "../../../components/Image";
import nothingToShow from "../../../assets/images/Graphics/nothingToSee.jpg";
import AddActionItemForm from "../Forms/AddActionItemForm";
import CompleteProjectModal from "./Feedback/CompleteProjectModal";
import _projectActionItems from "../../../_mockData/_projectActionItems";

const useStyles = makeStyles((theme) => ({
  root: {},
  actionItemsCard: {
    borderRadius: 20,
    margin: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  sectionSubHeading: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontWeight: 700,
  },
  subHeading: {
    marginTop: theme.spacing(2),
    fontWeight: 700,
  },
  toggleButton: {
    margin: theme.spacing(1),
  },
  reverseToggleButton: {
    margin: theme.spacing(1),
    color: theme.palette.error.main,
    borderColor: theme.palette.error.main,
  },
  navigationButton: {
    marginTop: theme.spacing(3),
  },
}));

const not = (a, b) => {
  return a.filter((value) => b.indexOf(value) === -1);
};

const intersection = (a, b) => {
  return a.filter((value) => b.indexOf(value) !== -1);
};

const ActionListSection = ({ selectedTemplate }) => {
  const classes = useStyles();

  // Modal actions
  const [open, setOpen] = React.useState(false);

  // Add action item section
  const [addActionCollapse, setAddActionCollapse] = React.useState(false);

  // Add action item text box
  const [addActionValue, setAddActionValue] = React.useState("");

  // show result for adding text box
  const [showSuccessBox, setShowSuccessBox] = React.useState(false);

  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState(
    _projectActionItems.filter((chart) => chart.defaultFor === selectedTemplate)
  );
  const [right, setRight] = React.useState([]);

  const leftChecked = intersection(checked, left);

  const handleAddActionItem = () => {
    const newLeft = [...left];

    // Ensure the last added action shows up on top.
    newLeft.unshift({
      key: left?.length + 2,
      actionName: addActionValue,
      defaultFor: selectedTemplate,
    });
    setLeft(newLeft);
    setAddActionValue("");
    setShowSuccessBox(true);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  return (
    <CardContent>
      <Typography variant="body1" color="primary">
        <strong>Action List Creation</strong>
      </Typography>
      <Typography variant="body2" color="primary">
        Select a chart to aid in visualization of key performance metrics for
        this Improvement project
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="body2" className={classes.sectionSubHeading}>
        Project Type: <strong>{selectedTemplate}</strong>
      </Typography>
      <Box>
        <Button
          sx={{ my: 0.5 }}
          variant="outlined"
          size="small"
          onClick={handleCheckedRight}
          disabled={leftChecked.length === 0}
          aria-label="move selected right"
          className={classes.reverseToggleButton}
        >
          Delete Action Item
        </Button>
        <Button
          sx={{ my: 0.5 }}
          variant="outlined"
          size="small"
          onClick={handleAllRight}
          disabled={left.length === 0}
          aria-label="move all right"
          className={classes.reverseToggleButton}
        >
          <SelectAll />
          Delete All
        </Button>
        <Button
          sx={{ my: 0.5 }}
          variant="outlined"
          color="primary"
          size="small"
          aria-label="move all right"
          className={classes.toggleButton}
          onClick={() => setAddActionCollapse(!addActionCollapse)}
        >
          {!addActionCollapse ? <AddCircle /> : <UnfoldLess />}
          {!addActionCollapse ? "Add" : "Hide"}
        </Button>
        <Collapse in={addActionCollapse}>
          <AddActionItemForm
            addActionValue={addActionValue}
            setAddActionValue={setAddActionValue}
            handleAddActionItem={handleAddActionItem}
            showSuccessBox={showSuccessBox}
            setShowSuccessBox={setShowSuccessBox}
          />
        </Collapse>
        {left?.length > 0 ? (
          <>
            <Typography variant="body2" className={classes.subHeading}>
              Action Items
            </Typography>
            {left?.map((_action) => {
              const _labelId = `transfer-list-item-${_action?.id}-label`;

              return (
                <ProjectActionItemCard
                  checked={checked}
                  handleToggle={handleToggle}
                  action={_action}
                  labelId={_labelId}
                />
              );
            })}
            <Box display="flex" justifyContent="right" alignItems="right">
              <Button
                variant="contained"
                disableElevation
                fullWidth
                color="primary"
                onClick={() => setOpen(true)}
                className={classes.navigationButton}
              >
                <CheckCircle /> Done
              </Button>
            </Box>
          </>
        ) : (
          <Box display="flex" justifyContent="left" alignItems="center">
            <Image alt="Nothing to show" src={nothingToShow} height={120} />
            <Typography variant="body2">
              No actions items to see. Use the Add button above to add action
              items. Action items will appear here
            </Typography>
          </Box>
        )}
      </Box>
      <CompleteProjectModal open={open} setOpen={setOpen} />
    </CardContent>
  );
};

export default ActionListSection;
