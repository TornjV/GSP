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

class Schedule extends React.Component {
  render() {
    return (
      <Container>
        <Text>Kontakt</Text>
        <Text>Telefon: 021/48-96-600</Text>
        <Text>E-mail: gspns@gspns.rs</Text>
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
