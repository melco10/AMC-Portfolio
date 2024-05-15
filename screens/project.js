import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Modal from 'react-native-modal';
import { Image } from '@rneui/themed';

const Project = ({ regularFont, boldFont }) => {
  const BASE_URI = 'https://picsum.photos/200/300?random='; // Changed to add random query for unique images

  const [isModalVisible, setModalVisible] = useState(false);
  const [isImg, setImg] = useState('1');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const data = [...new Array(6)].map((_, i) => i.toString());

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={[regularFont, boldFont, styles.introText]}>
        Works
      </Text>
      <View style={styles.hrText} />

      <FlatList
        data={data}
        style={styles.list}
        numColumns={1}
        keyExtractor={(e) => e}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              title="Hide modal"
              onPress={() => {
                setImg(item); // Set the item (or index) here to update the modal image
                toggleModal();
              }}
            >
              <Image
                source={{ uri: BASE_URI + item }}
                style={styles.item}
                PlaceholderContent={<ActivityIndicator />}
              />
            </TouchableOpacity>

            <Text variant="headlineLarge" style={[regularFont, boldFont, styles.projTitle]}>
              Project: {index + 1}
            </Text>
          </View>
        )}
      />

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: BASE_URI + isImg }}
            style={styles.modalImage}
            PlaceholderContent={<ActivityIndicator />}
          />
          <TouchableOpacity title="Hide modal" style={styles.hideModal} onPress={toggleModal}>
            <Text>Hide</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    position: 'relative',
  },
  hrText: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  list: {
    width: '100%',
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
  projTitle: {
    fontSize: 20,
    padding: 10,
    backgroundColor: '#208320',
    color: '#fff',
  },
  introText: {
    fontSize: 24,
    marginTop: -20,
    marginBottom: 5,
  },
  itemContainer: {
    marginBottom: 40,
  },
  hideModal: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  modalImage: {
    aspectRatio: 1,
    width: '100%',
  },
});

export default Project;
