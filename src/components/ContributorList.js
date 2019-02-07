import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Contributor from './Contributor';
import contributors from '../store/data/contributors.json';


function ContributorList(props) {
  const { classes } = props;
  const contributorsList = contributors;

  return (
    <div className={classes.contributorsList}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {
          contributorsList.map(item => <Contributor photo={item.photo} name={item.name} link={item.link} />)
        }
      </GridList>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: 350,
    margin: 10,
  },
  cardContent: {
    paddingBottom: 0,
  },
  media: {
    objectFit: 'cover',
  },

  link: {
    marginTop: 0,
    fontSize: '14px',
    textDecoration: 'underline',
  },
};

export default withStyles(styles)(ContributorList);
