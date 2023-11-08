import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { gStyle } from '../styles/style';
import ArithmeticQuiz from './ArithmeticQuiz';

export default function HomePage() {

  return (
      <SafeAreaView style={styles.container}>
        <Text style={ gStyle.title}>Главная страница</Text>
        <Text style={gStyle.text}>Quiz</Text>
        <StatusBar style="auto" />
         <ArithmeticQuiz />
         <Entypo name="rocket" size={60} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
