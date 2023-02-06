import React from "react";
import {
  Box,
  Button,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import Image from "../../../../components/Image";
import taskImage from "../../../../assets/images/Graphics/task.jpg";
import clapImage from "../../../../assets/images/Graphics/clap.png";
import _actionStatus from "../../../../_mockData/_actionStatus";
import _opportunities from "../../../../_mockData/_opportunities";

const assignees = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "Sebastian Cricket",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  ratingLabelText: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  modalTitle: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textAlign: "center",
  },
  statusRadio: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(1),
  },
}));

const AddActionModal = ({
  open,
  setOpen,
  setComplete,
  complete,
  setActionItemsActiveList,
  actionItemsActiveList,
}) => {
  const classes = useStyles();

  const [status, setStatus] = React.useState("To Start");
  const [actionItem, setActionItem] = React.useState("");
  const [assignee, setAssignee] = React.useState("");
  const [dueDate, setDueDate] = React.useState();
  const [correspondingOpportunity, setCorrespondingOpportunity] =
    React.useState("");

  const buttonDisabledState = () => {
    return (
      actionItem === "" || assignee === "" || correspondingOpportunity === ""
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAssigneeChange = (event) => {
    setAssignee(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleActionItemChange = (event) => {
    setActionItem(event.target.value);
  };

  const handleDueDateChange = (_dateValue) => {
    setDueDate(_dateValue);
  };

  const handleOpportunityChange = (event) => {
    setCorrespondingOpportunity(event.target.value);
  };

  const handleCreateAction = () => {
    const _actionToAdd = {
      id: actionItemsActiveList?.length + 1, // create a unique ID
      title: actionItem,
      assignee,
      status,
      correspondingOpportunity,
      dueDate: moment(dueDate).format("Do MMM Y"),
    };
    actionItemsActiveList.unshift(_actionToAdd);
    setActionItemsActiveList(actionItemsActiveList);
    setComplete(true);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
            src={complete ? clapImage : taskImage}
            alt="feedback now"
            height={120}
            width={120}
          />
        </Box>
        {complete ? (
          <>
            <DialogTitle>
              <Typography className={classes.modalTitle} variant="h4">
                Action Item Added
              </Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Action item added successfully!
              </DialogContentText>
            </DialogContent>
          </>
        ) : (
          <>
            <DialogTitle>
              <Typography className={classes.modalTitle} variant="h4">
                Add Action Item
              </Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                To get this performance metric on track, add a new action item
                and assign for completion
              </DialogContentText>
              <TextField
                margin="dense"
                id="actionItem"
                label="Action Item"
                type="text"
                value={actionItem}
                onChange={handleActionItemChange}
                fullWidth
                variant="standard"
              />
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <FormControl
                    variant="standard"
                    sx={{ m: 1 }}
                    fullWidth
                    margin="dense"
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Assign action item to
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={assignee}
                      onChange={handleAssigneeChange}
                      label="Assign action item to"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {assignees.map((a) => (
                        <MenuItem value={a.name} key={a.id}>
                          {a.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      label="Due Date"
                      required
                      fullWidth
                      className={classes.textField}
                      value={dueDate}
                      animateYearScrolling
                      format="dd/MM/yyyy"
                      onChange={(dateValue) => {
                        handleDueDateChange(dateValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          helperText={params?.inputProps?.placeholder}
                        />
                      )}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>

              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
                fullWidth
                margin="dense"
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Corresponding Opportunity
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={correspondingOpportunity}
                  onChange={handleOpportunityChange}
                  label="Assign action item to"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {_opportunities?.map((o) => (
                    <MenuItem value={o} key={o}>
                      {o}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className={classes.statusRadio}>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Current Status
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={status}
                  onChange={handleStatusChange}
                >
                  {_actionStatus?.map((state) => (
                    <FormControlLabel
                      key={state.id}
                      value={state.name}
                      control={<Radio />}
                      label={
                        <Typography variant="body2" color="textSecondary">
                          {state.name}
                        </Typography>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </DialogContent>
          </>
        )}
        <DialogActions>
          <Button
            onClick={handleClose}
            color="secondary"
            size="small"
            variant="outlined"
          >
            {complete ? "Close" : "Cancel"}
          </Button>
          {!complete && (
            <Button
              onClick={() => handleCreateAction()}
              variant="contained"
              disabled={buttonDisabledState()}
              color="primary"
              size="small"
              disableElevation
            >
              Add Action Item
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddActionModal;
