import { View, FlatList, StyleSheet} from 'react-native';
import  {Text} from 'react-native-paper';
import school from '../data/school.js';
import techStack from '../data/techstack';

const AboutMe = ({ regularFont, boldFont }) => {
  return(
     <View style={styles.container}>

        <Text variant="headlineLarge" style={[regularFont, boldFont, styles.introText]}>
          About Me
        </Text> 
        <View style={styles.hrText} />

        <View  style={styles.abountContent} >

          <Text  style={[boldFont, styles.secondP,  { fontSize: 15,  fontWeight: 'bold'}]}>
              Melco Maniel M. Gulbe
          </Text> 
          <Text style={[regularFont, styles.secondP,  { fontSize: 13, fontWeight: 'thin'}]}>
              Full Stack Web Developer
          </Text> 

           <Text style={[regularFont, styles.secondP,  { fontSize: 20, fontWeight: 'bold', marginTop: 30}]}>
              Tech Stack
          </Text> 
           <Text style={[regularFont, styles.secondP,  { fontSize: 13, fontWeight: 'thin', marginTop: 5}]}>
              React, Node/Express, Svelte, Sass, Tailwind, Boostrap
          </Text> 


          <Text style={[regularFont, styles.secondP,  { fontSize: 20, fontWeight: 'bold', marginTop: 30}]}>
              Educations
          </Text> 

          

          <FlatList
            data={school.educations}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={[styles.text, boldFont]}>{item.level}</Text>
                <Text style={[styles.text, regularFont]}>{item.schoolYear}</Text>
                <Text style={[styles.text, regularFont]}>{item.schoolName}</Text>
              </View>
            )}
          />

      </View>

      

     </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    padding: 13,
    justifyContent: 'center', 
    position: 'relative', 
  },
   introText: {
    fontSize: 24,
    marginTop: -20,
    marginBottom: 5
  },
 hrText: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 16,

  },
  secondP:{
    textAlign: 'center'
  },
  itemContainer: {
    margin: 10,
    alignItems: 'center', // This will center the Text components horizontally
  },
  text: {
    textAlign: 'center', // This will center the text within each Text component
  },
  
});

export default AboutMe;