import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StackNavigator } from './StackNavigator';

import CameraScreen2 from '../screens/CameraScreen2'
import Postures from '../screens/Postures';
import Instructions from '../screens/Instructions';
import {ExerciseScreenNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () =>{

  return(
    
    <Tab.Navigator screenOptions={{headerShown:false}}>
    
    
    <Tab.Screen name = "Posture Corrector" component={CameraScreen2}/>
    <Tab.Screen name="Right Postures" component={Postures} />
    <Tab.Screen name = "Exercises" component={ExerciseScreenNavigator} />
    <Tab.Screen name = "Instructions" component={Instructions} />
    
    </Tab.Navigator>
    
  )
}

export default BottomTabNavigator;
