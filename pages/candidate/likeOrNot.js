import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function likeOrNot() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Candidate Like or Not Page</Text>
      </View>
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
  