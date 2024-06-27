// pages/index.js

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import likeOrNot from './candidate/likeOrNot';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const goToCandidatePage = () => {
    navigation.navigate('likeOrNot');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Button title="Go to Candidate Page" onPress={goToCandidatePage} />
    </View>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="likeOrNot" component={likeOrNot} options={{ title: 'Candidate Page' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default App;
