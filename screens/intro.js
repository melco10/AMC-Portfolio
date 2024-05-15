import React from 'react';
import { View,  StyleSheet, Image } from 'react-native';
import { Text, Avatar } from 'react-native-paper';

const Intro = ({ regularFont, boldFont }) => {
  return (
    <View style={styles.container}>
      
      <Avatar.Image 
        size={140} 
        source={require('../assets/1697430928014.JPG')}  
        style={styles.avatarImage} 
      />

    


      <Text variant="headlineLarge" style={[regularFont, boldFont, styles.introText]}>
        Hello {'\n'}I'm, {'\n'}Melco Maniel
      </Text>
      

      <Text variant="headlineLarge" style={[regularFont, styles.paragraph]}>
        An{' '}
        <Text variant="headlineLarge" style={[boldFont, styles.highight]}>
          Aspiring Web Developer
        </Text>
        {' '}In the Tech Stack of{' '}
        <Text variant="headlineLarge" style={[boldFont, styles.highight]}>
          React and Node. {' '}
        </Text> 
         While Delivering{' '}

        <Text variant="headlineLarge" style={[boldFont, styles.highight]}>
           Ambitious Website Design
        </Text>
        {' '}
        and
        {' '}
        <Text variant="headlineLarge" style={[boldFont, styles.highight]}>
          maintaining quality with performance.
        </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  introText: {
    fontSize: 45,
    marginTop: 100
  },
  paragraph: {
    fontSize: 17,
    marginTop: -30,
    padding: 40,  
    textAlign: 'left',
    lineHeight: 30
  },
  highight:{
    color: '#208320'
  },

  container: {
    marginTop: 50,
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    position: 'relative', // Make sure the container is positioned relatively
  },
   avatarImage: {
    
    marginRight: -140,
    marginBottom: -240
  }
});

export default Intro;