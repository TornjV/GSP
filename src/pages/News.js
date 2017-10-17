import styled from 'styled-components/native';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { Text, NewsItem } from '../components';
import { actions as newsActions } from '../modules/news';

const Container = styled.ScrollView.attrs({
  contentContainerStyle: props => ({
    display: 'flex',
    flexDirection: 'column',
  }),
})`
  background-color: ${props => props.theme.colors.lightgray.string()};
  height: 100%;
  padding: 5px;
`;

class News extends React.Component {

  componentWillMount() {
    this.props.getNews();
  }

  render() {
    const { news } = this.props;

    return (
      <Container>
        {
          news.map((item, i) =>
            <NewsItem key={i} news={item} />
          )
        }
      </Container>
    );
  }
}

export default compose(
  connect(
    state => ({ ...state.news }),
    ({ ...newsActions }),
  )
)(News);
