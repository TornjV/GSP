import { TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import logo from '../assets/logo.png';
import { theme } from '../utils';
import { actions as routerActions } from '../modules/router';
import { actions as drawerActions } from '../modules/drawer';

const Container = styled.View`
  background-color: ${props => props.theme.colors.brand.string()};
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MenuWrapper = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.brand.darken(.5).string()};
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = ({ toggleRightDrawer, navigate }) =>
  <Container>
    <TouchableOpacity onPress={() => navigate('Home')}>
      <Image
        source={logo}
        resizeMode='contain'
        style={{
          height: 35,
          width: 100,
        }}
      />
    </TouchableOpacity>

    <MenuWrapper
      onPress={() => toggleRightDrawer(true)}
    >
      <Ionicons
        name="md-menu"
        color="white"
        size={35}
      />
    </MenuWrapper>
  </Container>;

export default compose(
  connect(
    state => ({ nav: state.nav }),
    ({ ...routerActions, ...drawerActions }),
  ),
)(Header);
