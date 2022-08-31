import * as React from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native';

const Instructions = ()=>{

return(

  <ScrollView>
  <Text style={styles.introText}>HOW TO USE THE APP{'\n'}{'\n'}</Text>
  <Text style={styles.mainText}>
  1. Tilt your phone and ensure it is in landscape mode.{'\n'}{'\n'}
  2. You will see a red button appearing on your screen. That button is for clicking the picture.{'\n'}{'\n'}
  3. Take help from someone else and ask them to stand at least 1 meter away.{'\n'}{'\n'}
  4. While you keep sitting on your sitting in the position you were originally seated in, they would click an image of you sideways using the red button. {'\n'}{'\n'}
  5. When the picture has been clicked, you would see two horizontal lines appearing on your screen and a discard button. {'\n'}{'\n'}
  6. You can press the discard button if you want to retake the image.{'\n'}{'\n'}
  7. If you are fine with the image, you are supposed to drag one line to the top of your screen, and the other one to where your eye is. {'\n'}{'\n'}
  8. You will see two texts, one shows the height of the line position at the screen level and the other one displays the height of the line positioned at the eye level. {'\n'}{'\n'}
  9. This would help you figure out how much gap there is between the eye level and the top of the screen.{'\n'}{'\n'}
  10. The main aim is to align the eye level and the top of the screen/ put these two at the same level.{'\n'}{'\n'}
  11. Hence, if you find that there is a lot of difference between the two, then you can perhaps try to adjust the height of your chair or the table. Furthermore, you can use a laptop stand that is easily available in the market or online to adjust the height of the computer.{'\n'}{'\n'}
  12. Additionally, there are two more screens in the app besides the posture correcting screen. The first screen talks about the right sitting postures while you are working. So by looking at that screen you can get an idea of how your posture must be while you are working. The other screen displays some exercises recommended by Dr. Manisha that could help you improve your posture. When you click on the images put on the screen, then you would be able to see more information on the particular exercise you chose by clicking the image. Details on how to do the exercise, and how is it benefitical will be shown when you click the image.{'\n'}{'\n'}
  
  </Text>
  </ScrollView>
)
}



export default Instructions

const styles = StyleSheet.create({

  introText:{

    fontSize:20,
    margin:'5%',
    alignSelf:'center', 
    backgroundColor:"orange",
    padding:'2%',
    borderRadius:'5%'

  },

  mainText:{

    margin:'5%',
    fontSize:15,
    color:'blue',
    alignSelf:'center'
  }
})