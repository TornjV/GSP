import styled from 'styled-components/native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import WebView from 'react-native-webview-autoheight';

import { Text } from '../components';
import { theme } from '../utils';

const Container = styled.View`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 5px;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
`;
Header.Left = styled.View`
  background-color: ${props => props.theme.colors.brand.string()};
  height: 65px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
Header.Right = styled.View`
  padding-left: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TitleCSS = `
  color: ${props => props.theme.colors.gray.string()};
  font-size: 17px;
  line-height: 22px;
`;

const DateCSS = `
  color: ${props => props.theme.colors.brand.string()};
  font-size: 12px;
`;

const NewsItem = ({ news }) =>
  <Container>
    <Header>
      <Header.Left
        style={{
          borderBottomColor: theme.colors.brand.darken(.5).string(),
          borderBottomWidth: 10,
        }}
      >
        <Ionicons
          name='md-paper'
          color='white'
          size={35}
        />
      </Header.Left>

      <Header.Right>
        <Text css={TitleCSS}>{news.title.toUpperCase()}</Text>

        <Text css={DateCSS}>{news.date}</Text>
      </Header.Right>
    </Header>

    <WebView
      source={{
        html: news.text,
      }}
    />
  </Container>;

export default NewsItem;
