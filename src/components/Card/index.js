import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = ({user: {name, bio, image}}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>
        <View style={styles.cardContent}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.86,
    elevation: 11,
  },
  cardContent: {
    padding: 10,
  },

  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },
});
