import React from "react";
import PropTypes from "prop-types";

import EditForm from "../../components/EditForm";

const EditView = ({ formData, handleOnSubmit }) => {
  return <EditForm formData={formData} formSubmitted={handleOnSubmit} />;
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
