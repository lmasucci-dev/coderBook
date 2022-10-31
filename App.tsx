import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { darkPurple, marigold, raisinBlack } from './src/colors/colors';

const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <Text style={styles.headerText}>Lucas Masucciss</Text>
        <Text style={styles.subHeaderText}>React Native & Node JS Developer</Text>
      </View >
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkPurple,
    flex: 1,
    padding: 16
  },
  containerBody: {
    padding: 16,
    flex: 1,
    borderRadius: 25,
    backgroundColor: raisinBlack
  },
  headerText: {
    fontSize: 42,
    color: marigold,
    textAlign: 'center'
  },
  subHeaderText: {
    paddingBottom: 16
  }
});

export default App;
