import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Translate } from 'react-localize-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import ContributorList from '../components/ContributorList';
import ArchitectOfTheDay from '../components/ArchitectOfTheDay';

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <Paper className={classes.banner}>
          <div className={classes.bannerContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              <Translate id="main.head" />
            </Typography>
            <Typography variant="subtitle2" color="inherit" paragraph gutterRight>
              <Translate id="main.description" />
            </Typography>
            <Link
              to="/architects"
              className={classes.link}
            >
              <Button
                className="playButton"
                variant="contained"
                color="secondary"
                size="large"
              >
                <Translate id="main.learnMore" />
              </Button>
            </Link>
          </div>
        </Paper>

        <Paper className={classes.archOfTheDay}>
          <div className={classes.archOfTheDayContent}>
            <Typography component="h2" variant="h4" color="inherit" gutterBottom>
              <Translate id="main.architectOfDay" />
              <ArchitectOfTheDay />
            </Typography>
          </div>
        </Paper>

        <Paper className={classes.contributors}>
          <div className={classes.contributorsContent}>
            <Typography component="h2" variant="h5" color="inherit" gutterBottom>
              <Translate id="main.team" />
            </Typography>
            <ContributorList />
          </div>
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  link: {
    textDecoration: 'none',
  },
  banner: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  bannerContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  contributors: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  contributorsContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  archOfTheDay: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[800],
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  archOfTheDayContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
});


export default withStyles(styles)(Main);
