import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image , TextInput, ScrollView, ImageBackground, Linking} from 'react-native';
import styles from './styles'
import { faBars, faGear, faMugSaucer, faUser, faHome, faCalendar, faDriversLicense, faMap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import { Link, NavigationContainer } from '@react-navigation/native';
import { navigate } from './NavigationService';
const belmontHillImage = 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTE2Nzk2NzcvMTgwZWVmZWI3MDA4ZjIwMTAyYjA0MWFhOTE5ZjNiZGMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0='
import { Calendar } from 'react-native-calendars';
import MultiSelect from 'react-native-sectioned-multi-select'
import { LinearGradient } from 'expo-linear-gradient';
import db from './firebaseconfig'
import { LoginScreen } from './login';
import {DirectoryScreen, AthleteScreen} from './directory'
import { CalendarScreen } from './Calendar';
import {Header} from './header'
import { HomeScreen } from './home';
import {CourseScreen, CourseDirectoryScreen} from './courses'
const Stack = createStackNavigator();


const noblesBlue = "#103c7b";






const MenuScreen =(props) =>{
  return(
        <View style={{width: 220}}>
            <LinearGradient colors={[noblesBlue, noblesBlue]} style={{flexDirection: 'column', height: '100%'}} start={[0,0]} end={[1,0]}>

              <View style={{flex: 2, }}></View>
              <View style={{flex: 1, width: '95%', borderColor: 'white', borderWidth: 3 }}>
                <FontAwesomeIcon color={'white'} size={'40%'} icon={faUser} style={{height: 100, width: 20}} />
              </View>
              <TouchableOpacity onPress={()=>navigate('Home')} style={styles.menuCatagoriesButtons}><FontAwesomeIcon color={'white'} size={'40%'} style={styles.FAIcon} icon={faHome} /><Text style={styles.name4}>Home</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>navigate('Calendar')} style={styles.menuCatagoriesButtons}><FontAwesomeIcon color={'white'} size={'40%'} style={styles.FAIcon} icon={faCalendar} /><Text style={styles.name4}>Calendar</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>navigate('CourseDirectory')} style={styles.menuCatagoriesButtons}><FontAwesomeIcon color={'white'} size={'40%'} style={styles.FAIcon} icon={faMap} /><Text style={styles.name4}>Courses</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>navigate('Directory')} style={styles.menuCatagoriesButtons}><FontAwesomeIcon color={'white'} size={'40%'} style={styles.FAIcon} icon={faDriversLicense} /><Text style={styles.name4}>Directory</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>navigate('Directory')} style={styles.menuCatagoriesButtons}><Text style={styles.name4}>Home</Text></TouchableOpacity>
              {/* <TouchableOpacity onPress={goToPage(props.navigation, 'Home')} style={{flex: 1, backgroundColor: 'green'}}></TouchableOpacity>
              <TouchableOpacity onPress={goToPage(props.navigation, 'Home')} style={{flex: 1, backgroundColor: 'red'}}></TouchableOpacity> */}
              <View style={{flex: 2}}></View>
            </LinearGradient>
            
          </View>
  )
}

<View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 300}}>
            <TouchableOpacity style={{position: 'absolute', height: '100%', width: '100%'}} onPress={()=>navigate('Login')}>{'Login' == 'Login' && <LoginScreen menuActive = {true} ></LoginScreen>}</TouchableOpacity>
          </View>
      </View>
    </View>



const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Directory" component={DirectoryScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Athlete" component={AthleteScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CourseDirectory" component={CourseDirectoryScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Course" component={CourseScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;