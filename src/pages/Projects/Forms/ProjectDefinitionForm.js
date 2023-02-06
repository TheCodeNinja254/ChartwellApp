import React, { useState } from "react";
import {
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import _projectTemplates from "../../../_mockData/_projectTemplates";
import _configurations from "../../../_mockData/_configurations";

const ProjectDefinitionForm = ({
  selectedTemplate,
  handleTemplateChange,
  phasesNumber,
  handlePhaseChange,
  className,
}) => {
  const [config, setConfig] = useState();

  const handleConfigChange = (e) => {
    setConfig(e.target.value);
  };

  return (
    <Card elevation={0} variant="outlined" className={className}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 120 }}
              fullWidth
              margin="dense"
            >
              <InputLabel id="demo-simple-select-standard-label">
                Select a project template
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedTemplate}
                onChange={handleTemplateChange}
                label="Select a project template"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {_projectTemplates.map((template) => (
                  <MenuItem value={template.name} key={template.id}>
                    {template.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 120 }}
              fullWidth
              margin="dense"
            >
              <InputLabel id="demo-simple-select-standard-label">
                Choose Configuration
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                margin="dense"
                id="demo-simple-select-standard"
                value={config}
                onChange={handleConfigChange}
                label="Choose Configuration"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {_configurations?.map((c) => (
                  <MenuItem value={c}>{c}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TextField
              margin="dense"
              id="name"
              value={phasesNumber}
              label="Number of Phases"
              type="number"
              onChange={handlePhaseChange}
              error={phasesNumber < 1 || phasesNumber > 9}
              helperText={
                phasesNumber < 1 || phasesNumber > 9
                  ? "The project must have at least 1 phase and at most 9 phases"
                  : ""
              }
              fullWidth
              variant="standard"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProjectDefinitionForm;
