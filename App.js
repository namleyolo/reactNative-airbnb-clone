import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Explore from './screens/Explore'
import Inbox from './screens/Inbox'
import Saved from './screens/Saved'
import Trips from './screens/Trips' 
import Profile from './screens/Profile' 



const App = createBottomTabNavigator({
  Explore :  { screen : Explore , navigationOptions : {
    tabBarIcon : ({tintColor }) => (<Ionicons name="ios-information-circle" color={tintColor} size={24}> </Ionicons>)
  }},
  Saved   :  { screen : Saved},
  Trips   :  { screen : Trips},
  Inbox   :  { screen : Inbox},
  Profile   :  { screen : Profile},

},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Explore') {
        // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Saved') {
        iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
      }  else if (routeName === 'Trips') {
        iconName = `ios-analytics${focused ? '' : ''}`;
      } else if (routeName === 'Inbox'){
        iconName = `ios-chatboxes${focused ? '' : ''}`;
      } else {
        iconName = `ios-contact${focused ? '' : ''}`;
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#66b3ff',
    inactiveTintColor: 'gray',
    style : {
      backgroundColor : 'white',
      shadowOffset : {width: 10, height : 10},
      shadowColor : 'yellow',
      shadowOpacity : 0.5,
      elevation : 5, 
    }
  },
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default createAppContainer(App);
