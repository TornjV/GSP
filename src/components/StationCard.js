import styled from 'styled-components/native';
import React from 'react';

import { Text } from '.';

const Container = styled.View`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.Image`
  height: 200px;
  width: 100%;
  margin: 10px;
`;

const Lines = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const Line = styled.View`
  height: 37.5px;
  width: 37.5px;
  background-color: ${props => props.theme.colors.brand.string()};
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StationCard = ({ title, image, lines }) =>
  <Container>
    <Text>{title}</Text>

    <ImageContainer source={{ uri: image }} />

    <Lines>
      {
        lines.map(line =>
          <Line>
            <Text
              css={`color: white`}
            >{line}</Text>
          </Line>
        )
      }
    </Lines>
   </Container>

export default StationCard;
