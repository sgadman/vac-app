import React, { useState } from "react";
import PropTypes from "prop-types";

const EditForm = ({ formData }) => {
  const [editData, setEditData] = useState(formData);

  const onFormChange = (key) => (e) => {
    const updatedEditData = { ...editData };
    updatedEditData[key] = e.target.value;
    setEditData(updatedEditData);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
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
      <button>Save</button>
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
};

export default EditForm;
