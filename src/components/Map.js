import React, { Component } from 'react';
import { YMaps, Map, GeoObject } from 'react-yandex-maps';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Translate } from 'react-localize-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = () => ({
  mapTitle: {
    margin: 30,
    paddingTop: 30,
  }
});


class MapBasics extends Component {
  state = { showMap: true };

  toggleMap() {
    const { showMap } = this.state;
    this.setState({ showMap: !showMap });
  }

  render() {
    const { showMap } = this.state;
    const { classes, coords } = this.props;
    const mapState = { center: [coords.coord1, coords.coord2], zoom: 10 };


    return (
      <Paper>
        <Typography className={classes.mapTitle} variant="h5" component="h2"> 
          <Translate id="profile.map"/>
        </Typography>
        <YMaps>
          <div id="map-basics" className={classes.map}>
            {showMap &&
              <Map width={'100%'} height={300} state={mapState}>
                <GeoObject
                  geometry={{
                    type: 'Point',
                    coordinates: [coords.coord1, coords.coord2],
                  }}
                  properties={{
                    iconContent: coords.title,
                  }}
                  options={{
                    preset: 'islands#blackStretchyIcon',
                    draggable: false,
                  }}
                />
              </Map>
              }
          </div>
        </YMaps>
      </Paper>
    );
  }
}

export default connect(
  store => ({
    language: store.page.language,
    coords: store.architects.currentArchitect.biography.work.Place,
  }),
)(withStyles(styles)(MapBasics));
