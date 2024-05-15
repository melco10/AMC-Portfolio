import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Text } from 'react-native-paper';

import Modal from "react-native-modal";

const Contact = ({ regularFont, boldFont }) => {
  const [name, setName] = React.useState('Enter Your Name');
  const [email, setEmail] = React.useState('Enter Your Email');
  const [comment, setComment] = React.useState('Enter Your Comment');


  const handleSubmit = () => {
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>

    


           
           
           
  

    
      <Text variant="headlineLarge" style={[regularFont, boldFont, styles.introText]}>
        Contact Me
      </Text>
      <View style={styles.hrText} />
      <View style={styles.formContainer}>
        <Text style={[regularFont, styles.label]}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder={email}
        />
        <Text style={[regularFont, styles.label]}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder={name}
          keyboardType="email-address"
        />
        <Text style={[regularFont, styles.label]}>Comment</Text>
        <TextInput
          style={[styles.input, styles.commentInput]}
          value={comment}
          onChangeText={setComment}
          placeholder={comment}
          multiline
        />

         <TouchableOpacity style={styles.sendButton} onPress={handleSubmit, toggleModal}>
          <Text style={[boldFont, styles.sendButtonText]}>SEND</Text>
        </TouchableOpacity>

        
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text style={styles.modalMail}>
               Name: {name}
               {'\n'}
               {'\n'}
               Email: {email}
               {'\n'}
               {'\n'}
               Comment: {comment}
            </Text>

            <TouchableOpacity title="Hide modal" style={styles.hideModal} onPress={toggleModal} >
              <Text>Hide</Text>
            </TouchableOpacity>
          </View>
       </Modal>
        
      </View>
   
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  introText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  hrText: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 16,

  },
  formContainer: {
    marginTop: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  commentInput: {
    height: 100,
    textAlignVertical: 'top',
  },
   sendButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  hideModal:{
    backgroundColor: 'white',
    width: '50px',
    padding: '10px',
    marginLeft: '150px',
    marginTop: '10px',
    borderRadius: 5
  },
  modalMail: {
    width: '350px',
    height: '350px',
    marginLeft: '-10px',
    backgroundColor: 'white',
    padding: '20px'
  }
});

export default Contact;