import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withLocalize } from 'react-localize-redux';
import ArchitectInfo from './ArchitectInfo';

class ArchitectOfTheDay extends ArchitectInfo {
  render() {
    const { classes, name, language, activeLanguage } = this.props;
    const lan = activeLanguage === undefined ? language : activeLanguage.code;
    return (
      <div className={classes.archOfTheDay}>
        <Avatar src={name.image} className={classes.archPhoto} />
        <Typography variant="h6" component="h2" className={classes.archOfTheDayName}>
          {`${name[lan].firstName} ${name[lan].thirdName} ${name[lan].secondName}`}
        </Typography>
      </div>
    );
  }
}

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  archPhoto: {
    margin: 10,
    width: 100,
    height: 100,
  },
  archOfTheDayName: {
    paddingTop: 10,
  },
});

export default withLocalize(connect(
  store => ({
    language: store.page.language,
    name: store.architects.architects[Math.floor(Math.random() * store.architects.architects.length)].description.name,
    architects: store.architects.architects,
  }),
)(withStyles(styles, { withTheme: true })(ArchitectOfTheDay)));
