import React from "react";
import PropTypes from "prop-types";

const DropDown = ({
  defaultOption,
  label,
  onChange,
  options,
  selectedValue,
}) => {
  return (
    <>
      {label && <label>{label}:</label>}
      <select value={selectedValue} onChange={onChange}>
        {defaultOption && (
          <option value="none" selected disabled hidden>
            {defaultOption}
          </option>
        )}
        {options.map((value, index) => (
          <option key={`value-${index}`} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

DropDown.defaultProps = {
  defaultOption: null,
  label: null,
  selectedValue: null,
};

DropDown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  defaultOption: PropTypes.string,
  label: PropTypes.string,
  selectedValue: PropTypes.string,
};

export default DropDown;
