import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageGridList from './ImageGridList';
import ArchitectInfo from './ArchitectInfo';
import ArchTimeline from './ArchTimeline';
import SimpleModal from './SimpleModal';
import MapBasics from './Map';


class ArchitectProfile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* Paste profile components below */}
        <ArchitectInfo />
        <ImageGridList />
        <ArchTimeline />
        <SimpleModal />
        <MapBasics />
      </main>
    );
  }
}

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    maxWidth: '100%',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

export default withStyles(styles, { withTheme: true })(ArchitectProfile);
