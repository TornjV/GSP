import styled from 'styled-components/native';
import { View } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import _ from 'lodash';

import { actions as departuresActions } from '../modules/departures';
import { ScheduleCard, Text } from '../components';
import { theme } from '../utils';

const Container = styled.ScrollView.attrs({
  contentContainerStyle: props => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
})`
  background-color: ${props => props.theme.colors.lightgray.string()};
  height: 100%;
  padding: 5px;
`;

const Chooser = styled.View`
  background-color: white;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5px;
`;
Chooser.Item = styled.TouchableOpacity`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Schedule extends React.Component {
  state = {
    dayType: 'R',
    dayData: {},
  }

  componentWillMount() {
    this.props.getDepartures();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.departures.length > 1) {
      const dayData = nextProps.departures.find(obj => obj.dayType === this.state.dayType);

      this.setState({ dayData });
    }
  }

  render() {
    const { dayType, dayData } = this.state;

    if (_.isEmpty(dayData))
      return null;

    return (
      <Container>
        <Chooser>
          {
            [
              { dayType: 'R', label: 'RADNI DAN' },
              { dayType: 'S', label: 'SUBOTA' },
              { dayType: 'N', label: 'NEDELJA' }
            ].map(day =>
              <Chooser.Item
                key={day.dayType}
                onPress={() => this.setState({ dayType: day.dayType })}
                style={day.dayType === this.state.dayType && {
                  borderBottomColor: theme.colors.brand.string(),
                  borderBottomWidth: 3,
                }}
              ><View><Text>{day.label}</Text></View></Chooser.Item>
            )
          }
        </Chooser>

        {
          dayData.lines.map((item, i) =>
            <ScheduleCard key={i} {...item} />
          )
        }
      </Container>
    );
  }
}

export default compose(
  connect(
    state => ({ ...state.departures }),
    ({ ...departuresActions }),
  )
)(Schedule);
