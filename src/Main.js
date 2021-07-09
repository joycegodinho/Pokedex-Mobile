import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import styled from 'styled-components/native';

import Feed from './screens/feed';
import Details from './screens/details'
import First from './screens/firstgen'

const FeedStack = createStackNavigator({
  Feed: Feed,
  Details: Details,
  First: First
},{
  initialRouteName: 'Feed'
});



export default createAppContainer(FeedStack)