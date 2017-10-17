import styled from 'styled-components/native';
import Drawer from 'react-native-drawer';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { actions as routerActions } from '../modules/router';
import { actions as drawerActions } from '../modules/drawer';
import { LineChooser } from '../components';

const Container = styled.ScrollView`
  background-color: white;
  height: 100%;
`;

const MenuContent = ({ navigate, toggleDrawer }) =>
  <Container>
    <LineChooser />
  </Container>;

const BottomDrawer = ({ isBottomOpen, side, toggleBottomDrawer, navigate, ...props }) =>
    <Drawer
      onOpen={() => toggleBottomDrawer(true)}
      onClose={() => toggleBottomDrawer(false)}
      open={isBottomOpen}
      type='overlay'
      openDrawerOffset={0.65}
      side='bottom'
      tapToClose
      captureGestures={false}
      content={<MenuContent navigate={navigate} toggleDrawer={toggleBottomDrawer} />}
      {...props}
    />;


export default compose(
  connect(
    state => ({ ...state.drawer }),
    ({ ...routerActions, ...drawerActions }),
  ),
)(BottomDrawer);
