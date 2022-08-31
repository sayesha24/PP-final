import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Exercises from '../screens/Exercises';
import NestedScreenExercises from '../screens/NestedScreenExercises';


/*const screens = {

  Postures:{

    screen:Postures
  },

  StraightBack:{

    screen:StraightBack
  }
}*/
const Stack = createStackNavigator();

const ExerciseScreenNavigator = () =>{

  return(

    <Stack.Navigator>
    
    <Stack.Screen 
    name = "Exercises"
    component={Exercises}

    />

    <Stack.Screen 
    name = "NestedScreenExercises"
    component={NestedScreenExercises}

    />
    </Stack.Navigator>
  )
}

export {ExerciseScreenNavigator}
