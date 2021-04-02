import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import Chart from "chart.js";

const VacChart = ({ vacData }) => {
  const chartRef = useRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: vacData.map((data) => data.city),
        datasets: [
          {
            label: "Total Population",
            data: vacData.map((data) => data.population),
          },
          {
            label: "Vaccinated",
            data: vacData.map((data) => data.vaccinated),
          },
          {
            label: "Doses",
            data: vacData.map((data) => data.doses),
          },
        ],
      },
    });
  }, [vacData]);

  return <canvas ref={chartRef} />;
};

VacChart.propTypes = {
  vacData: PropTypes.arrayOf(
    PropTypes.exact({
      city: PropTypes.string,
      population: PropTypes.number,
      vaccinated: PropTypes.number,
      doses: PropTypes.number,
    })
  ).isRequired,
};

export default VacChart;
