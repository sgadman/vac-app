import React from "react";
import PropTypes from "prop-types";

const VacTable = ({ handleEditClicked, vacData }) => {
  const onEditClicked = (data) => () => {
    handleEditClicked(data);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>City</th>
          <th>Total Population</th>
          <th>Vaccinated</th>
          <th>Doses</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {vacData.map((data) => (
          <tr>
            <td>{data.city}</td>
            <td>{data.population}</td>
            <td>{data.vaccinated}</td>
            <td>{data.doses}</td>
            <td>
              <button type="button" onClick={onEditClicked(data)}>
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

VacTable.propTypes = {
  handleEditClicked: PropTypes.func.isRequired,
  vacData: PropTypes.arrayOf(
    PropTypes.exact({
      city: PropTypes.string,
      population: PropTypes.number,
      vaccinated: PropTypes.number,
      doses: PropTypes.number,
    })
  ).isRequired,
};

export default VacTable;
