import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { gStyle } from '../style';

export default function makeUpAWord() {
    return (
      <SafeAreaView >
        <Text style={ gStyle.text}>Make up a word!!!
        </Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});