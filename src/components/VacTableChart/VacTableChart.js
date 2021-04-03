import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import VacChart from "../VacChart";
import VacTable from "../VacTable";

const useStyles = makeStyles(() => ({
  vacTableChart: {
    width: "100%",
  },
  radioGroup: {
    flexDirection: "row",
  },
  tableChartContainer: {
    height: "calc(100vh - 142px",
  },
}));

const VacTableChart = ({ handleEditClicked, vacData }) => {
  const classes = useStyles();

  const tableView = "tableView";
  const graphView = "graphView";

  const [selectedOption, setSelectedOption] = useState(tableView);

  const isTableView = selectedOption === tableView;
  const isGraphView = selectedOption === graphView;

  const onValueChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className={classes.vacTableChart}>
      <RadioGroup
        className={classes.radioGroup}
        value={selectedOption}
        onChange={onValueChange}
      >
        <FormControlLabel control={<Radio />} label="Table" value={tableView} />
        <FormControlLabel control={<Radio />} label="Chart" value={graphView} />
      </RadioGroup>
      <div className={classes.tableChartContainer}>
        {isTableView && (
          <VacTable vacData={vacData} handleEditClicked={handleEditClicked} />
        )}
        {isGraphView && <VacChart vacData={vacData} />}
      </div>
    </div>
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

export default VacTableChart;
