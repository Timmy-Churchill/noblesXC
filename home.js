import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image , TextInput, ScrollView, ImageBackground, Linking} from 'react-native';
import styles from './styles'
import { navigate } from './NavigationService';
const belmontHillImage = 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTE2Nzk2NzcvMTgwZWVmZWI3MDA4ZjIwMTAyYjA0MWFhOTE5ZjNiZGMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0='
import {Header} from './header'


const HomeScreen = (props) => {
    return (
    
    <View style={[styles.container]}>
      <Header HeaderText="HOME" menuButtonOn={true}></Header>
      <Button title={"SILLY BUTTON"} onPress={()=>navigate('Login')}>
    
      </Button>
    </View>
    )
  };

export {HomeScreen}