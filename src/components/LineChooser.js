import styled from 'styled-components/native';
import React from 'react';
import { Switch, View } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { Text } from '.';
import { theme } from '../utils';
import { actions as linesActions } from '../modules/lines';

const lines = ['1', '2', '3'];

const Container = styled.View`
  display: flex;
  flex-direction: column;
`;

const Line = styled.View`
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border: 1px solid #696969;
`;

const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const format = str => str > 35 ? `${str.substring(0, 35)}…` : str;

const LineChooser = ({ lines, activeLines, toggleSelectedLine }) =>
  <Container>
    {
      lines.map(line => {
        const label = line.label.slice(0, -1);
        const arrow = line.label.slice(-1) === 'A' ? '←' : '→';
        const title = `${label} ${arrow} ${line.description}`

        const active = !!activeLines.find(activeLine => activeLine.id === line.id && activeLine.active);

        return (
          <Line key={line.id}>
            <Left>
              <Switch
                onTintColor={theme.colors.brand.string()}
                onValueChange={(val, a) => toggleSelectedLine(line.id)}
                value={active}
              />

              <Text style={{ paddingLeft: 10 }}>
                {format(title)}
              </Text>
            </Left>
          </Line>
        );
      })
    }
  </Container>;

export default compose(
  connect(
    state => ({ ...state.lines }),
    ({ ...linesActions })
  )
)(LineChooser);
