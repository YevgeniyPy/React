import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core';
import Header from '../components/Header';
import ArchitectProfile from '../components/ArchitectProfile';

class Architects extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header showDrawer />
        <ArchitectProfile />
      </div>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
  },
};

export default withStyles(styles)(Architects);
