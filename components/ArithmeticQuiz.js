import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { gStyle } from '../styles/style';

export default function ArithmeticQuiz() {
    return (
      <SafeAreaView style={ gStyle.main }>
        <View style={ styles.box1 }><Text>LogicQuizzes!!!</Text></View>
        <View style={ styles.box2 }><Text>LogicQuizzes!!!</Text></View>
        <View style={ styles.box3 }><Text>LogicQuizzes!!!</Text></View>
        <View style={ styles.box4 }><Text>LogicQuizzes!!!</Text></View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  box1: {
    flex: 0.25,
    backgroundColor: 'red',
  },
  box2: {
    flex: 0.25,
    backgroundColor: 'green',
  },
  box3: {
    flex: 0.25,
    backgroundColor: 'red',
  },
  box4: {
    flex: 0.25,
    backgroundColor: 'black',
  }
});