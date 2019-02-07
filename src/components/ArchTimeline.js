import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'react-material-timeline';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Translate } from 'react-localize-redux';

const styles = () => ({
  timelineTitle: {
    marginBottom: 30,
  },
});

class ArchTimeline extends Component {
  render() {
    const { classes, timeline } = this.props;
    const events = timeline.map(timelineItem => (
      {
        title: timelineItem.event,
        subheader: timelineItem.date,
      }
    ));
    return (
      <div>
        <Typography variant="h3" component="h2" className={classes.timelineTitle}>
          <Translate id="profile.timeline" />
        </Typography>

        <Timeline events={events} />
      </div>
    );
  }
}

export default connect(
  store => ({
    language: store.page.language,
    timeline: store.architects.currentArchitect.biography.timeline,
  }),
)(withStyles(styles, { withTheme: true })(ArchTimeline));
