
import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image , TextInput, ScrollView, ImageBackground, Linking} from 'react-native';
import styles from './styles'
import { faBars, faGear, faMugSaucer, faUser, faHome, faCalendar, faDriversLicense, faMap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


import { navigate } from './NavigationService';
const belmontHillImage = 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTE2Nzk2NzcvMTgwZWVmZWI3MDA4ZjIwMTAyYjA0MWFhOTE5ZjNiZGMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0='


const Row = ({children}) => {
    return(
      <View style = {{flexDirection: 'row', flex: 1, height: '100%'}}>{children}</View>
    )
  }
  
const Header=(props)=>{
  
    let headerSizeMultiplier = 1
    if (props.HeaderText.length > 7) {
      headerSizeMultiplier -= 0.1 * (props.HeaderText.length - 7)
    }
  
    return(
      <View style={[styles.pageHeader,{borderRadius: props.borderRadius}] }>
        {props.menuButtonOn && <Row>
          <View style={{flex:1}}>
            <View style ={[styles.buttonWrapper, {flex: 1}]}>
              <TouchableOpacity onPress={()=>navigate('Menu')}>
                <FontAwesomeIcon color={'white'} size={'40%'} icon={faBars} style={styles.menuIcon} />
              
              </TouchableOpacity>
            </View>
  
            </View>
          <View style={{flex: 2}}></View>
          <View style={{flex: 1}}>
          <TouchableOpacity onPress={()=> Alert.alert('Settings Button Pressed')}>
              <View style={styles.buttonWrapper}>
                <FontAwesomeIcon color={'white'} size={'40%'} icon={faGear} style={styles.menuIcon} />
              </View>
            </TouchableOpacity>
          </View> 
        </Row>}
        <View style={styles.headerTextWrapper}>
              <Text style={[styles.header1, {fontSize: 40*headerSizeMultiplier}]}>
                {props.HeaderText}
              </Text>
        </View>
        </View>
    )
  }

export {Header}