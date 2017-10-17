import styled from 'styled-components/native';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const StyledText = styled.Text`
  font-family: Titillium;
  ${props => props.css}
`;

const Text = ({ children, isFontLoaded, css, ...props }) => {

  if (isFontLoaded)
    return (
      <StyledText css={css} {...props}>
        {children}
      </StyledText>
    );

  return null;
};

export default compose(
  connect(
    state => ({ ...state.font }),
  )
)(Text);
