import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Grid,
  Typography,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Check } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {},
  submitButton: {
    marginTop: theme.spacing(1),
  },
  formCard: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: 20,
  },
  successBox: {
    marginTop: theme.spacing(2),
  },
}));

const AddActionItemForm = ({
  addActionValue,
  setAddActionValue,
  handleAddActionItem,
  showSuccessBox,
  setShowSuccessBox,
}) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Card className={classes.formCard} elevation={0} variant="outlined">
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={6} md={8} lg={8} xl={8}>
                <TextField
                  id="name"
                  value={addActionValue}
                  label="Add Action Item"
                  type="text"
                  onChange={(e) => {
                    setAddActionValue(e.target.value);
                    setShowSuccessBox(false);
                  }}
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Button
                  disabled={addActionValue === ""}
                  className={classes.submitButton}
                  color="primary"
                  variant="contained"
                  onClick={() => handleAddActionItem()}
                >
                  Add Action
                </Button>
              </Grid>
            </Grid>
            <Collapse in={showSuccessBox}>
              <Box
                display="flex"
                justifyContent="left"
                alignItems="center"
                className={classes.successBox}
              >
                <Check color="primary" />
                <Typography variant="body2" color="primary">
                  Action Item Added.
                </Typography>
              </Box>
            </Collapse>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AddActionItemForm;
