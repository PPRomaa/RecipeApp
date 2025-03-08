import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Routes} from '../screens/routes/routes.ts';
import {SavedScreen, HomeScreen, ProfileScreen, SearchScreen} from '../screens';

const Tabs = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tabs.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? '#000' : 'gray',
              }}
              source={{
                uri: 'https://img.icons8.com/?size=100&id=6g6b5Mh-1uJ7&format=png&color=000000',
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#000' : 'gray'}}>
              {Routes.Home}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name={Routes.Search}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? '#000' : 'gray',
              }}
              source={{
                uri: 'https://img.icons8.com/?size=100&id=132&format=png&color=000000',
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#000' : 'gray'}}>
              {Routes.Search}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name={Routes.Saved}
        component={SavedScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? '#000' : 'gray',
              }}
              source={{
                uri: 'https://img.icons8.com/?size=100&id=26087&format=png&color=000000',
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#000' : 'gray'}}>
              {Routes.Saved}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name={Routes.Profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? '#000' : 'gray',
              }}
              source={{
                uri: 'https://img.icons8.com/?size=100&id=7820&format=png&color=000000',
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#000' : 'gray'}}>
              {Routes.Profile}
            </Text>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
