import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableNativeFeedback } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { gStyle } from '../styles/style';
import ArithmeticQuiz from './ArithmeticQuiz';
import MakeUpAWord from './MakeUpAWord';

export default function HomePage({ navigation }) {
  const loadScene1 = () => {
    navigation.navigate('ArithmeticQuiz')
  }
  const loadScene2 = () => {
    navigation.navigate('MakeUpAWord')
  }
  return (
      <SafeAreaView style={styles.container}>
        <Text style={ [gStyle.title, styles.headerText]}>Главная страница</Text>
        <StatusBar style="auto" />
        <TouchableNativeFeedback onPress={loadScene1}>
          <Text style={styles.textButton1}>Arithmetic Quiz </Text>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={loadScene2}>
          <Text style={styles.textButton2}>Make up a word</Text>
        </TouchableNativeFeedback>
         <Entypo name="rocket" size={60} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  headerText: {
    
  },
  textButton1: {
    borderWidth: 1,
    padding: 25,
    fontSize: 32,
    marginTop: '40%'
  },
  textButton2: {
    borderWidth: 1,
    padding: 25,
    fontSize: 32,
    marginTop: '10%',
  }
});
