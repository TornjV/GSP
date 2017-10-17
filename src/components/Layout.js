import styled from 'styled-components/native';
import { Constants } from 'expo';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { addNavigationHelpers } from 'react-navigation';
import React from 'react';

import { Header, Router } from '.';

const Container = styled.View`
  min-height: 100%;
  background-color: ${props => props.theme.colors.lightgray.string()};
  display: flex;
  flex-direction: column;
  padding-top: ${Constants.statusBarHeight}px;
`;

const Content = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const Layout = (props) => {
  const { toggleMenu, dispatch, nav } = props;

  return (
    <Container>
      <Header toggleMenu={toggleMenu} />

      <Content>
        <Router
          navigation={addNavigationHelpers({
            dispatch: dispatch,
            state: nav,
          })}
        />
      </Content>
    </Container>
  );
}

export default compose(
  connect(state => ({
    nav: state.nav
  })),
)(Layout);
