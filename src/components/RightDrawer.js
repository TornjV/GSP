import styled from 'styled-components/native';
import Drawer from 'react-native-drawer';
import React, { Component } from 'react';
import { Switch, Image } from 'react-native';
import { Constants } from 'expo';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Ionicons } from '@expo/vector-icons';

import { Text } from '.';
import logo from '../assets/logo.png';
import { actions as routerActions } from '../modules/router';
import { actions as drawerActions } from '../modules/drawer';
import { theme } from '../utils';

const Container = styled.View`
  background-color: ${props => props.theme.colors.lightgray.string()};
  padding-top: ${Constants.statusBarHeight}px;
  height: 100%;
`;

const ItemContainer = styled.TouchableOpacity`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

const MenuItem = ({ children, ...props }) =>
  <ItemContainer {...props}>
    {children}
  </ItemContainer>;

const Header = styled.View`
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const LogoContainer = styled.View`
  height: 150px;
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextCSS = `
  color: ${props => props.theme.colors.gray.string()};
  font-size: 20px;
  padding: 0 10px;
`;

const MenuContent = ({ navigate, toggleDrawer }) =>
  <Container>
    <Header>
      <Text css={TextCSS}>Glavni meni</Text>

      <Switch />
    </Header>

    <LogoContainer>
      <Image
        source={logo}
        resizeMode='contain'
        style={{
          height: 125,
          width: '75%',
        }}
      />
    </LogoContainer>

    {
      [
        { icon: 'md-home', label: 'Početna strana', to: 'Home' },
        { icon: 'md-bus', label: 'Redovi vožnje', to: 'Schedule' },
        { icon: 'md-paper', label: 'Vesti', to: 'News' },
        { icon: 'md-pin', label: 'Kontakt', to: 'Contact' },
      ].map((item, i) =>
        <MenuItem
          key={i}
          onPress={() => {
            navigate(item.to);
            toggleDrawer(false);
          }}
        >
          <Ionicons
            name={item.icon}
            color={theme.colors.gray.string()}
            size={25}
          />

          <Text css={TextCSS}>{item.label}</Text>
        </MenuItem>
      )
    }
  </Container>;

const RightDrawer = ({ isRightOpen, side, toggleRightDrawer, navigate, ...props }) =>
    <Drawer
      onOpen={() => toggleRightDrawer(true)}
      onClose={() => toggleRightDrawer(false)}
      open={isRightOpen}
      openDrawerOffset={0.25}
      side='right'
      tapToClose
      content={<MenuContent navigate={navigate} toggleDrawer={toggleRightDrawer} />}
      {...props}
    />;


export default compose(
  connect(
    state => ({ ...state.drawer }),
    ({ ...routerActions, ...drawerActions }),
  ),
)(RightDrawer);
