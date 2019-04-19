import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { Translate } from 'react-localize-redux';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginBottom: '70px',
    marginTop: '70px',
    paddingBottom: '50px',
    paddingTop: '50px',
  },
});

function ImageGridList(props) {
  const { classes, projects } = props;
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h3" component="h2">
        <Translate id="profile.gallery" />
      </Typography>
      <GridList cellHeight={260} className={classes.gridList}>
        {projects.map(project => (
          <GridListTile>
            <img src={project.image} alt={project.title} />
            <GridListTileBar
              title={project.title}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default connect(
  store => ({
    language: store.page.language,
    projects: store.architects.currentArchitect.biography.progects,
  }),
)(withStyles(styles)(ImageGridList));
