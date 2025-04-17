import React, {JSX} from 'react';

import {Text, View, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.lightText}>
        Hello Andrioid World!!
      </Text>
      <Text>Finally it is working!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkText: {
    color: 'white',
  },
  lightText: {
    color: 'black',
  },
});

export default AppPro;
