import React from "react";
import PropTypes from "prop-types";

import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  vacTable: {
    height: "100%",
  },
}));

const VacTable = ({ handleEditClicked, vacData }) => {
  const classes = useStyles();

  const onEditClicked = (data) => () => {
    handleEditClicked(data);
  };

  return (
    <TableContainer className={classes.vacTable}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell>Total Population</TableCell>
            <TableCell>Vaccinated</TableCell>
            <TableCell>Doses</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {vacData.map((data) => (
            <TableRow key={`data-${data.city}`}>
              <TableCell>{data.city}</TableCell>
              <TableCell>{data.population}</TableCell>
              <TableCell>{data.vaccinated}</TableCell>
              <TableCell>{data.doses}</TableCell>
              <TableCell>
                <Button type="button" onClick={onEditClicked(data)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
