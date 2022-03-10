/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
          }}
          style={styles.image}>
          <View style={styles.cardContent}>
            <Text style={styles.name}>Elon Musk</Text>
            <Text style={styles.bio}>
              A dude with a rocket is looking for a gal with fuel.
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
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
export default App;
