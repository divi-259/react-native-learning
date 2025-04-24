import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const Contacts = [
    {
      uid: 0,
      name: 'Safeda',
      status: 'Staring into abyss',
      imageURL:
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      uid: 1,
      name: 'Billu',
      status: 'Staring right at you',
      imageURL:
        'https://images.pexels.com/photos/1643473/pexels-photo-1643473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      uid: 2,
      name: 'Cutie',
      status: 'Chilling in nature',
      imageURL:
        'https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      uid: 3,
      name: 'Gillu',
      status: 'Curious about everything',
      imageURL:
        'https://images.pexels.com/photos/356547/pexels-photo-356547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {
          // looping through contact list
          Contacts.map(({uid, name, status, imageURL}) => (
            <View key={uid} style={styles.userCard}>
              <Image source={{uri: imageURL}} style={styles.userImage} />
              <View>
                <Text style={styles.userName}>{name} </Text>
                <Text style={styles.userStatus}>{status} </Text>
              </View>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#8D3DAF',
    padding: 4,
    borderRadius: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 12,
  },
});
