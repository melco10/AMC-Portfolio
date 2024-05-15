import { SafeAreaView, StyleSheet, ScrollView, Animated, View } from 'react-native';
import * as Font from 'expo-font';

import { useState } from 'react';
import { Card } from 'react-native-paper';
import { fontStyles } from './styles/font'; // Import the font styles

// screens 
import Intro from './screens/intro';
import Project from './screens/project';
import AboutMe from './screens/about-me';
import Contact from './screens/contact';
import Footer from './screens/footer'

export default function App() {
  // font load
  const [fontsLoaded] = Font.useFonts({
    'Quantico-Regular': require('./assets/font/Quantico-Regular.ttf'),
    'Quantico-Bold': require('./assets/font/Quantico-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  // animations
   const fadeAnim = new Animated.Value(0);


  Animated.timing(fadeAnim, {

    toValue: 1,

    duration: 3000, // 1 second

    useNativeDriver: true,

  }).start();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >

        <Animated.View style={{ opacity: fadeAnim }}>

          <Intro regularFont={fontStyles.regularFont} boldFont={fontStyles.boldFont} />
          <Project regularFont={fontStyles.regularFont} boldFont={fontStyles.boldFont} />
          <AboutMe regularFont={fontStyles.regularFont} boldFont={fontStyles.boldFont} />

          <Contact regularFont={fontStyles.regularFont} boldFont={fontStyles.boldFont} />
          <Footer regularFont={fontStyles.regularFont} boldFont={fontStyles.boldFont}  />
        </Animated.View>

     </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F2F0FC',
    padding: 8,
  }
});