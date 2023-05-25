
import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image , TextInput, ScrollView, ImageBackground, Linking} from 'react-native';
import styles from './styles'
import { navigate } from './NavigationService';
import {Header} from './header'





const LoginScreen =(props)=> {
    return (
      <View style={styles.container}>
        <Header HeaderText="LOGIN" menuButtonOn={true}></Header>
      <View style={styles.mainPageContainer}>
        <View style={styles.mainLoginContainer}>
        <Text style={[styles.header2, {marginBottom: 40}]}>My App</Text>
        <View style={{flexDirection: 'column', backgroundColor: 'white', width: '100%', alignItems: 'center', paddingTop: 40, borderRadius: 16}}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor="#003f5c"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>navigate("Home")}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
      </View>
    );
  };

export { LoginScreen }