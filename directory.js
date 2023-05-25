import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image , TextInput, ScrollView, ImageBackground, Linking} from 'react-native';
import styles from './styles'
import { navigate } from './NavigationService';
const belmontHillImage = 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTE2Nzk2NzcvMTgwZWVmZWI3MDA4ZjIwMTAyYjA0MWFhOTE5ZjNiZGMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0='
import { Header } from './header'
const randomImage = 'https://picsum.photos/800/1200';

const AthleteCard = (props) => {
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={()=>navigate("Athlete", {AthleteData: props})}>
        <Image style={styles.image} source={{ uri: props.image }} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.sport}>{props.role}</Text>
        </View>
      </TouchableOpacity>
    );
  };
const DirectoryScreen = (props) => {
  
    const athleteData = [
      { name: 'jimmy stevenson', role: 'Captain', image: 'https://nobilis.nobles.edu/images_sitewide/Photos/244182.jpeg', PR: '16:30' },
      { name: 'Patrick Albers', role: 'Captain', image: 'https://nobilis.nobles.edu/images_sitewide/Photos/16658.jpeg',PR: '14:22'},
      { name: 'Charlie Hall', role: 'Captain', image: 'https://nobilis.nobles.edu/images_sitewide/Photos/13427.jpeg', PR: '16:30'},
      { name: 'Matthew Loose', role: 'Captain', image: 'https://nobilis.nobles.edu/images_sitewide/Photos/15086.jpeg', PR: '16:30' },
      { name: 'Maxwell Huang', role: 'Senior', image: 'https://nobilis.nobles.edu/images_sitewide/Photos/16594.jpeg' , PR: '16:30'},
      {name: 'Angie Feng', role: 'Captain', image: 'https://nobilis.nobles.edu/images_sitewide/Photos/15909.jpeg' , PR: '16:15' }
    ];
  
  
    return (
      <View style={styles.container}>
        <Header HeaderText="DIRECTORY" menuButtonOn={true} />
        <ScrollView>
          {athleteData.map((athlete, index) => (
            <AthleteCard key={index} name={athlete.name} role={athlete.role} image={athlete.image} PR={athlete.PR}/>
          ))}
        </ScrollView>
      </View>
    );
  };
  
const AthleteScreen = ({ route }) => {
    const {AthleteData } = route.params;
  
    return (
      <View style={styles.container}>
        <Header HeaderText="Athlete"menuButtonOn={true} />
  
        <ImageBackground style={styles.background} source={{ uri: randomImage }}>
          <View style={styles.infoContainer}>
            <Image style={styles.picture} source={{ uri: AthleteData.image }} />
            <Text style={styles.name1}>{AthleteData.name}</Text>
            <Text style={styles.otherInfo}>{AthleteData.OtherInfo}</Text>
            <Text style={styles.pr}>{`PR: ${AthleteData.PR}`}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };
  
export {DirectoryScreen, AthleteScreen}