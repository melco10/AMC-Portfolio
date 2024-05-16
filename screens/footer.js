import React, {useState} from 'react';

import { View, Text, StyleSheet, FlatList, Linking, TouchableOpacity, Image } from 'react-native';

import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';

import qrCodeImage from '../assets/qr-code.png'; // Import the image
const socialMediaItems = [
  { label: 'Facebook', key: 'fb', link: 'https://www.facebook.com/profile.php?id=100072104047848' },
  { label: 'Instagram', key: 'ig', link: 'https://www.instagram.com' },
  { label: 'Twitter', key: 'twt', link: 'https://www.twitter.com' },
  { label: 'LinkedIn', key: 'linkEnd', link: 'https://www.linkedin.com' },
  { label: 'GitHub', key: 'github', link: 'https://github.com/melco10' },
  { label: 'Frontend Mentor', key: 'frontendMentor', link: 'https://www.frontendmentor.io/profile/melco10' },


];

const Footer = ({ regularFont, boldFont }) => {


  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

 



  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.socialMediaLabelContainer}
      onPress={() => Linking.openURL(item.link)}
    >
      <Text style={[regularFont, styles.socialMediaLabel]}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.socialMediaContainer}>
        <Text style={[boldFont, styles.heading]}>Social Media</Text>
        <FlatList
          data={socialMediaItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      </View>
      <View style={styles.qrCodeContainer}>
        <Text style={[boldFont, styles.heading]}>QR Code</Text>
         <Image source={qrCodeImage} style={styles.qrCodeImage} resizeMode="contain" />
        <View style={styles.qrCodeImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'black',
  },
  socialMediaContainer: {
    flex: 1,
  },
  qrCodeContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  socialMediaLabelContainer: {
    paddingVertical: 5,
  },
  socialMediaLabel: {
    color: 'white',
  },
  qrCodeImage: {
    width: 100,
    height: 100,
    backgroundColor: 'gray', // Replace with your QR code image
  },
   qrCodeImage: {
    width: 100,
    height: 100,
  },
});

export default Footer;
