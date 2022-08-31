import * as React from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native';

const NestedScreenExercises = ({route}) =>{

return(

  <View>
  <Text>{route.params.msg}</Text>
  </View>
)
}

export default NestedScreenExercises