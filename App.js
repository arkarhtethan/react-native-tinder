import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import users from './assets/data/users';
import Card from './src/components/Card';
const App = () => {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Card user={users[2]} />
        <Card user={users[1]} />
      </View>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
});
export default App;
