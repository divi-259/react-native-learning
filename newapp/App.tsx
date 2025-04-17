import React from 'react';
// View is just like div in web apps
import {View, Text, SafeAreaView, TouchableOpacity, Button} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <Text>Hello Andrioid World!!</Text>
      <View>
        <Text>Hello Andrioid World!!</Text>
        <Text>Finally it is working!!</Text>
        <Button
          onPress={() => console.log('Pressed')}
          title="Learn More"
          color="#941580"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );
}
export default App;
