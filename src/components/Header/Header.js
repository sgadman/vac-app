import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    textAlign: "center",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Typography variant="h4" className={classes.header}>
      Vaccine App
    </Typography>
  );
};

export default Header;
