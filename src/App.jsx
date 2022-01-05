import "./App.css";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

const buttonstyling = theme => ({
  button1: {
      background: theme.palette.primary.main,
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
  }
});
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Button variant="contained" className={classes.button1}>
          Submit
        </Button>
      </>
    );
  }
}

export default withStyles(buttonstyling)(App);
