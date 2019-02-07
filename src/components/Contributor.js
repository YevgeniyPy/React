import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

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
    marginBottom: '10px',
    fontSize: '12px',
    textDecoration: 'underline',
  },
};

function Contributor(props) {
  const {
    classes, photo, name, link,
  } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          height="200"
          image={photo}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={link} className={classes.link}>
          {link}
        </Link>
      </CardActions>
    </Card>
  );
}

Contributor.defaultProps = {
  photo: 'https://avatars1.githubusercontent.com/u/1309537?s=460&v=4',
  name: 'unknown contributor',
  link: 'https://github.com',
};

export default withStyles(styles)(Contributor);
