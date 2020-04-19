import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
}));

function About() {
  const classes = useStyles();

  return <div className={classes.root}>About</div>;
}

export default About;
