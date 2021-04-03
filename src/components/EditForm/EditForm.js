import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Input,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  editForm: {
    display: "inline-block",
    padding: "20px",
  },
  header: {
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const EditForm = ({ formData, formSubmitted }) => {
  const classes = useStyles();

  const [editData, setEditData] = useState(formData);

  const onFormChange = (key) => (e) => {
    const updatedEditData = { ...editData };
    updatedEditData[key] = e.target.value;
    setEditData(updatedEditData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmitted(editData);
  };

  const validateField = (field) => isNaN(field);

  return (
    <Paper className={classes.editForm}>
      <Typography variant="h5" className={classes.header}>
        {formData.city}
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label="Population"
          value={editData.population}
          error={validateField(editData.population)}
          onChange={onFormChange("population")}
        />
        <TextField
          label="Vaccinated"
          value={editData.vaccinated}
          error={validateField(editData.vaccinated)}
          onChange={onFormChange("vaccinated")}
        />
        <TextField
          label="Doses"
          value={editData.doses}
          error={validateField(editData.doses)}
          onChange={onFormChange("doses")}
        />
        <Input
          type="submit"
          value="Save"
          disabled={
            validateField(editData.population) ||
            validateField(editData.vaccinated) ||
            validateField(editData.doses)
          }
        />
      </form>
    </Paper>
  );
};

EditForm.propTypes = {
  formData: PropTypes.shape({
    city: PropTypes.string,
    population: PropTypes.number,
    vaccinated: PropTypes.number,
    doses: PropTypes.number,
  }).isRequired,
  formSubmitted: PropTypes.func.isRequired,
};

export default EditForm;
