import React, { useState } from "react";
import VacTable from "../VacTable";
import VacChart from "../VacChart";
import PropTypes from "prop-types";

const VacTableChart = ({ handleEditClicked, vacData }) => {
  const tableView = "tableView";
  const graphView = "graphView";

  const [selectedOption, setSelectedOption] = useState(tableView);

  const isTableView = selectedOption === tableView;
  const isGraphView = selectedOption === graphView;

  const onValueChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return vacData ? (
    <div>
      <label>
        <input
          type="radio"
          name="viewMode"
          value={tableView}
          checked={isTableView}
          onChange={onValueChange}
        />
        Table
      </label>
      <label>
        <input
          type="radio"
          name="viewMode"
          value={graphView}
          checked={isGraphView}
          onChange={onValueChange}
        />
        Graph
      </label>
      {isTableView && (
        <VacTable vacData={vacData} handleEditClicked={handleEditClicked} />
      )}
      {isGraphView && <VacChart vacData={vacData} />}
    </div>
  ) : null;
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

export default VacTableChart;
