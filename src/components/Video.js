import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
  youtubeVideoBlock: {
    margin: 50,
  },
});

class Video extends Component {
  // eslint-disable-next-line class-methods-use-this
  onReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const { classes, bio } = this.props;

    const opts = {
      height: '380',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <Paper className={classes.youtubeVideoBlock}>
        <YouTube
          videoId={bio.video_id}
          opts={opts}
          onReady={this.onReady}
          className={classes.youtubeVideo}
        />
      </Paper>
    );
  }
}

export default connect(
  store => ({
    language: store.page.language,
    bio: store.architects.currentArchitect.biography,
  }),
)(withStyles(styles)(Video));
