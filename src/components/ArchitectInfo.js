import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withLocalize } from 'react-localize-redux';

class ArchitectInfo extends Component {
  render() {
    const {
      classes, name, language, description, activeLanguage,
    } = this.props;
    const lan = activeLanguage === undefined ? language : activeLanguage.code;
    return (
      // dummy block; to be replaced
      <div className={classes.archInfo}>
        <Avatar src={name.image} className={classes.archPhoto} />
        <Typography gutterBottom variant="h5" component="h2" className={classes.archName}>
          {`${name[lan].firstName} ${name[lan].thirdName} ${name[lan].secondName}`}
        </Typography>
        <Typography className={classes.archInfo} paragraph>
          {description}
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
    marginBottom: 40,
    width: 200,
    height: 200,
  },
});

export default withLocalize(connect(
  store => ({
    language: store.page.language,
    name: store.architects.currentArchitect.description.name,
    description: store.architects.currentArchitect.biography.description,
  }),
)(withStyles(styles, { withTheme: true })(ArchitectInfo)));
