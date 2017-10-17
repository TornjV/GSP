import styled from 'styled-components/native';
import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { Location, Permissions } from 'expo';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { RoutesMap } from '../components';
import { actions as drawerActions } from '../modules/drawer';
import { actions as linesActions } from '../modules/lines';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

class Home extends Component {
  state = {
    lines: [],
    selectedLine: null,
  }

  componentWillMount = async () => {
    this.props.getLinesList();
  }

  render() {
    const { toggleBottomDrawer } = this.props;

    return (
      <Container>
        <RoutesMap />

        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => toggleBottomDrawer(true)}
        />
      </Container>
    );
  }
}

export default compose(
  connect(
    state => ({ ...state.drawer }),
    ({ ...drawerActions, ...linesActions }),
  )
)(Home);
