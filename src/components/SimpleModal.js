import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Translate } from 'react-localize-redux';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Video from './Video';
import Paper from '@material-ui/core/Paper';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = (theme) => ({
  videoBlock: {
    margin: 0,
    marginTop: 70,
    marginBottom: 100,
    // width: '100%', 
    padding: 100,
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  btn: {
    marginTop: 30,
    padding: 30,
    paddingTop: 20,
    paddingBottom: 20,
  }
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.videoBlock}>
        <Typography variant="h4" component="h2" gutterBottom>
          <Translate id="profile.video.callToAction"/>
        </Typography>
        <Button 
        onClick={this.handleOpen} 
        className={classes.btn}
        variant="contained"
        color="secondary"
        size="large"
        >
          <Translate id="profile.video.button"/>
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              <Translate id="profile.video.modalHeadline"/>
              <Video />
            </Typography>
          </div>
        </Modal>
      </Paper>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleModal);
