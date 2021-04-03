import React from "react";
import EditForm from "../../components/EditForm";

const EditView = ({ formData, handleOnSubmit }) => {
  return <EditForm formData={formData} formSubmitted={handleOnSubmit} />;
};

export default EditView;
