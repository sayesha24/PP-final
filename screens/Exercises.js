import * as React from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native';


const Exercises = ({navigation}) =>{

    return(

    

      <ScrollView>
        <View style={styles.introTextContainer}>
        <Text style={styles.introText}>Exercises can play an important role in improving one's posture. The following are some exercises that can help you improve your posture: </Text>
        </View>

        <Text style={styles.creditText}> (Please click the images to know more information on the exercises) </Text>
    
        <View style= {{marginLeft:'10%'}}>
        <Text style={styles.posture_1Text}>Chin Tuckings </Text>
        
        <TouchableOpacity onPress={()=>navigation.navigate("NestedScreenExercises", 
        
        {msg:
        <Text style={styles.infoText}>How to do it: {'\n'}{'\n'}
        
        - Sit upright and look straight ahead with the ears directly over the shoulders.{'\n'}
- Place a finger on the chin.{'\n'}
- Without moving the finger, pull the chin and head straight back until a good stretch is felt at the base of the head and top of the neck. (There should now be some separation between the chin and finger.){'\n'}
- Hold for 5 seconds if possible.{'\n'}
- Bring the chin forward again to the finger.{'\n'}
- Repeat for a total of 10 times{'\n'}{'\n'}

How is it beneficial:{'\n'}{'\n'}
It helps our head remain in the right position with ears above the shoulders which avoids having a camel neck. 
        
        </Text>
        
      
        })}>
        <Image source={require('../Images/exercise1.jpg')} style={styles.posture_1}/>
        </TouchableOpacity>
        </View>

        <View>
        <Text style={styles.posture_1Text}>Straightening your back </Text>
         <TouchableOpacity onPress={()=>navigation.navigate("NestedScreenExercises", {msg:
         
         <Text style={styles.infoText}> 
         How to do it: {'\n'}{'\n'}
         - Stand tall against a wall, ensure that your back is fulling touching the wall.{'\n'}
         - The back of your feet should be about 2-4 inches away from the wall. {'\n'}
         - Keep your palms rested on the wall. {'\n'}
         - With the support of the wall, straighten your back as much as possible. {'\n'}
         - Hold for 30 seconds. {'\n'}{'\n'}

         As you keep practicing this exercise, slowly start to increase the time, perhaps after a week try doing it for a minute. {'\n'}{'\n'}

         How is it beneficial: {'\n'}
         It can help one correct the posture of their back and prevent them from slouching their back while they are standing/walking.

         </Text>
         })}>
        <Image source={require('../Images/exercise2.jpg')} style={styles.posture_1}/>
        </TouchableOpacity>
        </View>
      
        <View>
        <Text style={styles.posture_1Text}>Back Crossover arm stretch </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("NestedScreenExercises", 
        {msg:
        
        <Text style={styles.infoText}>
        How to do it:{'\n'}{'\n'}
        - Stand with the feet hip-width apart.{'\n'}
- Stretch the right arm out straight.{'\n'}
- Bring the right arm across the body, so that the right arm points to the left direction.{'\n'}
- Bend the left arm at the elbow.{'\n'}
- Hook the left forearm under the right arm, supporting the right arm above the elbow.{'\n'}
- Use the left forearm to pull the right arm further in and across the body, stretching {'\n'}the back of the right shoulder.{'\n'}
- Hold this for 20 seconds, then repeat the stretch on the other side.{'\n'}
- After a week, you can perhaps try repeating this exercise twice.{'\n'}{'\n'}
        
        How does it help: {'\n'}{'\n'}
        It loosens stiff shoulders and relaxes the back too.
        
        </Text>
        
        }
        
        )}>
        <Image source={require('../Images/exercise3.jpg')} style={styles.posture_1}/>
        </TouchableOpacity>
        </View>


        <View>
        <Text style={styles.posture_1Text}>Tricep stretch </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("NestedScreenExercises", 
        
        {msg:
        <Text style={styles.infoText}>
        How to do it: {'\n'}{'\n'}

- Stand straight with your feet hip-width apart. {'\n'}
- Lift and bend one arm until your hand is in the middle of the upper back.{'\n'}
- Grasp the elbow with the other hand and gently pull.{'\n'}
- Hold for 20 seconds and repeat on the other side.{'\n'}
- After a week, you can perhaps try repeating this exercise twice.{'\n'}{'\n'}

 How does it help: {'\n'}{'\n'}
 It prevents soarness and the tightening of the muscles in the arms.
        </Text>
        
        })}>
        <Image source={require('../Images/exercise4.png')} style={styles.posture_1}/>
        </TouchableOpacity>
        </View>

        <View>
        <Text style={styles.posture_1Text}> Back stretching </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("NestedScreenExercises",{msg:
        
        <Text style={styles.infoText}>
       <View style={styles.howText}> How to do it: {'\n'}{'\n'}</View>
        - Open your legs wide, a little more than the hip-width.{'\n'}
        - Keep your right hand on the left shoulder.{'\n'}
        - Keep your left hand on your lower back.{'\n'}
        - Twist your back to the left side.{'\n'}
        - Hold for 20 seconds. {'\n'}
        - Do the same for the other side. {'\n'}
        - After a week, you can perhaps try repeating this exercise twice.{'\n'}{'\n'}

How does it help: {'\n'}{'\n'}
It relaxes your back and relieves you from any back pain you are facing.
        </Text>
        
   
        
        })}>
        <Image source={require('../Images/exercise5.svg')} style={styles.posture_1}/>
        </TouchableOpacity>
        </View>

        <View>
        <Text style={styles.posture_1Text}>Neck exercises </Text>
        
        </View>

        <View>
        <Text style={styles.posture_1Text}>Up and Down </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("NestedScreenExercises", 
        {msg:
        <Text style={styles.infoText}>
        How to do it: {'\n'}{'\n'}
        - Keep your legs shoulder-width apart.{'\n'}
        - Keep your arms straight facing the ground.{'\n'}
        - Keep your head straight and look ahead.{'\n'}
        - Your back should be straight.{'\n'}
        - Gently tilt your head upwards, dropping your head back. {'\n'}
        - Hold in that position for 20 seconds. {'\n'}
        - Return to your initial position. {'\n'}
        - Now tilt your head downwards. {'\n'}
        - Hold there for 20 seconds again.{'\n'}
        - After a week, you can perhaps try repeating this exercise twice.{'\n'}{'\n'}

        How is it beneficial:{'\n'}{'\n'}
        It relaxes your neck.
        </Text>
        
        })}>
        <Image source={require('../Images/exercise6.jpg')} style={styles.posture_1}/>
         </TouchableOpacity>
        </View>

        <View>
        <Text style={styles.posture_1Text}>Side to side </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("NestedScreenExercises",     {msg:
        <Text style={styles.infoText}>
        How to do it: {'\n'}{'\n'}
        - Keep your legs shoulder-width apart.{'\n'}
        - Keep your arms straight facing the ground.{'\n'}
        - Keep your head straight and look ahead.{'\n'}
        - Your back should be straight.{'\n'}
        - Gently rotate your head to the right. {'\n'}
        - Hold in that position for 20 seconds. {'\n'}
        - Return to your initial position. {'\n'}
        - Now rotate your head to the left. {'\n'}
        - Hold there for 20 seconds again.{'\n'}
        - After a week, you can perhaps try repeating this exercise twice.{'\n'}{'\n'}

        How is it beneficial:{'\n'}{'\n'}
        It again relaxes your neck.
        </Text>
        
        })}>
         <Image source={require('../Images/exercise7.jpg')} style={styles.posture_1}/>
        </TouchableOpacity>
        </View>

        <View>

        <Text style={styles.posture_1Text}>Ear to shoulder </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("NestedScreenExercises", {msg:
        <Text style={styles.infoText}>
        How to do it: {'\n'}{'\n'}
        - Keep your legs shoulder-width apart.{'\n'}
        - Keep your head straight and look ahead.{'\n'}
        - Your back should be straight.{'\n'}
        - With the help of your right hand, gently put a force on the neck to make it touch the right shoulder.
        - Hold in that position for 20 seconds. {'\n'}
        - Return to your initial position. {'\n'}
        - Now with the help of your left hand, gently put a force on the neck to make it touch the left shoulder.
        - Hold there for 20 seconds again.{'\n'}
        - After a week, you can perhaps try repeating this exercise twice.{'\n'}{'\n'}

        How is it beneficial:{'\n'}{'\n'}
        It again relaxes your neck.
        </Text>
        
        })}>
     <Image source={require('../Images/exercise8.jpg')} style={styles.posture_1}/>
         </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.posture_1Text}>Rotation - clock and anticlock </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("NestedScreenExercises",
              {msg:
        <Text style={styles.infoText}>
        <View style={styles.howText}>How to do it: </View>
        - Keep your legs shoulder-width apart.{'\n'}
        - Keep your head straight and look ahead.{'\n'}
        - Your back should be straight.{'\n'}
        - Tilt your head backwards. 
        - Touch your head to the left shoulder.
        - Tilt your neck to the front now. {'\n'}
        - Touch your head to the right shoulder. {'\n'}
        - Tilt your neck backward again.
        - Now go anticlockwise.
        - Ensure that one round you are taking of clockwise and then anticlockwise, then clockwise again. (Don't do only one side at one time)
        - Do 5 such rotations.

        How is it beneficial:{'\n'}{'\n'}
        It helps improve neck strength and release neck pain.
        </Text>
        
        })}>
      
        <Image source={require('../Images/exercise9.jpg')} style={styles.posture_1}/>
        </TouchableOpacity>
        </View>

         <View>
         
        <Text style={styles.creditText}>(Exercises suggested by Dr. Manisha Sachdeva)</Text>
        
        </View>


        

        

      
      </ScrollView>
    )
  }

export default Exercises

const styles = StyleSheet.create({

  creditText:{

    color:"red",
    margin:'2%'

  },


  posture_1Text:{

   margin:'5%', 
   alignSelf:'center', 

  },

  posture_1:{

    alignSelf:'center', 
    resizeMode:'contain', 
    width:200, 
    height:200, 
    borderColor:'black', 
    borderWidth: 5, 
    marginBottom:'5%',

  },

  introTextContainer:{

    margin:'5%', 
    backgroundColor:'lightblue', 
    borderRadius:5,
    padding:'3%',

  },

  introText:{

    alignSelf:'center', 
    alignContent:'center', 
    justifyContent:'center', 
    alignItems:'center'
  },

  howText:{

    margin:"5%"
  }
})