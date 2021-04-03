import React from "react";
import PropTypes from "prop-types";

import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  dropDown: {
    width: 200,
  },
}));

const DropDown = ({ label, onChange, options, selectedValue }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.dropDown}>
      <InputLabel>{label}</InputLabel>
      <Select value={selectedValue} onChange={onChange}>
        {options.map((value, index) => (
          <MenuItem key={`value-${index}`} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

DropDown.defaultProps = {
  label: null,
  selectedValue: "",
};

DropDown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  selectedValue: PropTypes.string,
};

export default DropDown;
