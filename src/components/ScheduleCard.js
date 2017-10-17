import styled from 'styled-components/native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import _ from 'lodash';

import { Text } from '.';
import { theme } from '../utils';

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border: 2px solid #d1d1d1;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.colors.brand.string()};
  height: 50px;
`;

const IconWrapper = styled.View`
  background-color: ${props => props.theme.colors.brand.darken(.5).string()};
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5px;
`;

const Content = styled.View`
  display: flex;
  flex-direction: column;
`;

const DirectionHeader = styled.View`
  background-color: ${props => props.color};
  height: 45px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

const DirectionContent = styled.View`
  display: flex;
  flex-direction: row;
`;
DirectionContent.Item = styled.View`
  background-color: ${props => props.color};
  flex: 1;
  padding: 5px;
`

class ScheduleCard extends React.Component {
  state = {
    isContentCollapsed: true,
  }

  render() {
    const { isContentCollapsed } = this.state;
    const { line, directions } = this.props;

    const timesA = _.groupBy(directions[0].departureTimes
      .map(departure => {
        const times = departure.time.split(':');

        return ({ hour: +times[0], min: +times[1] })
      }), 'hour');

    const timesB = _.groupBy(directions[0].departureTimes
      .map(departure => {
        const times = departure.time.split(':');

        return ({ hour: +times[0], min: +times[1] })
      }), 'hour');

    return (
      <Container>
        <TouchableOpacity onPress={() => this.setState({ isContentCollapsed: !this.state.isContentCollapsed })}>
          <Header>
            <IconWrapper>
              <Ionicons
                name='md-bus'
                color='white'
                size={25}
              />
            </IconWrapper>

            <Title><Text>{`${line}`}</Text></Title>
          </Header>
        </TouchableOpacity>

        <Collapsible collapsed={isContentCollapsed}>
          <Content>
              <DirectionHeader color='white'>
                <Text>Smer A</Text>
              </DirectionHeader>

              <DirectionContent>
                <DirectionContent.Item color='white'>
                    {
                      _.map(timesA, (hours, i) =>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                          {<Text style={{fontSize: 20, lineHeight: 30, paddingRight: 3 }}>{hours[0].hour}</Text>}
                          {
                            hours.map(item =>
                              <Text style={{fontSize: 11, lineHeight: 18, paddingRight: 3 }}>{item.min}</Text>
                            )
                          }
                        </View>
                      )
                    }
                </DirectionContent.Item>

                <DirectionContent.Item color={theme.colors.lightgray.lighten(.15).string()}>
                  {
                    _.map(timesB, (hours, i) =>
                      <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                        {<Text style={{fontSize: 20, lineHeight: 30, paddingRight: 3 }}>{hours[0].hour}</Text>}
                        {
                          hours.map(item =>
                            <Text style={{fontSize: 11, lineHeight: 18, paddingRight: 3 }}>{item.min}</Text>
                          )
                        }
                      </View>
                    )
                  }
                </DirectionContent.Item>
              </DirectionContent>

              <DirectionHeader color={theme.colors.lightgray.lighten(.15).string()}>
                <Text>Smer B</Text>
              </DirectionHeader>
          </Content>
        </Collapsible>
      </Container>
    );
  }
}

export default ScheduleCard;
