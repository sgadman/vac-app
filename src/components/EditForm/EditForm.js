import React, { useState } from "react";
import PropTypes from "prop-types";

const EditForm = ({ formData, formSubmitted }) => {
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

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      <label>{formData.city}</label>
      <label>
        Total Population:{" "}
        <input
          value={editData.population}
          onChange={onFormChange("population")}
        />
      </label>
      <label>
        Vaccinated:{" "}
        <input
          value={editData.vaccinated}
          onChange={onFormChange("vaccinated")}
        />
      </label>
      <label>
        Doses: <input value={editData.doses} onChange={onFormChange("doses")} />
      </label>
      <input type="submit" value="Save" />
    </form>
  );
};

EditForm.propTypes = {
  formData: PropTypes.exact({
    city: PropTypes.string,
    population: PropTypes.number,
    vaccinated: PropTypes.number,
    doses: PropTypes.number,
  }).isRequired,
  formSubmitted: PropTypes.func,
};

export default EditForm;
