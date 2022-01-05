import "./App.css";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import styling from './themes/home'

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

export default withStyles(styling)(App);
