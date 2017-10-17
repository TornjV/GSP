import React, { Component } from 'react';
import { MapView } from 'expo';
import { View, Text } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Ionicons } from '@expo/vector-icons';

import { getMapContent } from '../utils';
import { StationCard } from '.';

const parsePath = (path) => path
    .split(';')
    .map(item => {
      const coords = item.split(',');
      return ({ latitude: Number(coords[0]), longitude: Number(coords[1]) });
    });

const parseStops = stops => stops
  .map(stop => ({
    latitude: Number(stop.latitude),
    longitude: Number(stop.longitude),
    title: stop.description,
    image: stop.image,
    lines: stop.routes.split(',').map(stop => stop.slice(0, -1)),
  }))

class RoutesMap extends Component {

  render() {
    const { activeLines, lines } = this.props;

    const selectedLines = activeLines.filter(line => line.active);
    const newLines = lines.map(line => {
      const found = selectedLines.find(selected => selected.id === line.id);

      if (!!found)
        return line;
    }).filter(line => !!line);

    return (
      <MapView
        style={{
          height: '100%',
          width: '100%',
          flex: 1,
        }}
        initialRegion={{
          latitude: 45.255083741,
          longitude: 19.8416138869,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {
          newLines.map(line =>
            <MapView.Polyline
              key={line.id}
              coordinates={parsePath(line.path)}
              strokeWidth={5}
              strokeColor={line.color}
            />
          )
        }
        {
          newLines.map(line =>
            parseStops(line.busStops).map((stop, i) =>
              <MapView.Marker
                key={i}
                coordinate={stop}
                pinColor={line.color}
                onPress={this.show}
              >
                <MapView.Callout>
                  <StationCard
                    title={stop.title}
                    image={stop.image}
                    lines={stop.lines}
                  />
                </MapView.Callout>
              </MapView.Marker>
            )
          )
        }
      </MapView>
    );
  }
}

export default compose(
  connect(
    state => ({ ...state.lines }),
  )
)(RoutesMap);
