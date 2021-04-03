import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";

import EditForm from "../../components/EditForm";

const useStyles = makeStyles(() => ({
  editView: {
    display: "flex",
    justifyContent: "center",
  },
}));

const EditView = ({ formData, handleOnSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.editView}>
      <EditForm formData={formData} formSubmitted={handleOnSubmit} />
    </div>
  );
};

EditView.propTypes = {
  formData: PropTypes.shape({
    city: PropTypes.string,
    population: PropTypes.number,
    vaccinated: PropTypes.number,
    doses: PropTypes.number,
  }).isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};

export default EditView;
