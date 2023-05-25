
import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image , TextInput, ScrollView, ImageBackground, Linking} from 'react-native';
import styles from './styles'
import { navigate } from './NavigationService';
const belmontHillImage = 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTE2Nzk2NzcvMTgwZWVmZWI3MDA4ZjIwMTAyYjA0MWFhOTE5ZjNiZGMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0='
import {Header} from './header'


const CourseCard = (props) => {
  
    const schoolAndName = `${props.school} : ${props.name}`
    
    return (
      
      <TouchableOpacity style={styles.cardContainer} onPress={()=>navigate("Course", {courseData: props})}>
        <Image style={styles.image} source={{ uri: props.schoolCrest }}  />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{schoolAndName}</Text>
          <Text style={styles.sport}>{props.details}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  
const CourseDirectoryScreen = (props) => {
  
    const coursesData = [
      { school: 'Nobles', name: "Kern's Course", details: 'Our Home Course', image: 'https://www.developmentguild.com/assets/Nobles-fall-campus_2000x1000_acf_cropped-600x900.jpg', schoolCrest: 'https://upload.wikimedia.org/wikipedia/en/3/31/Noble_and_Greenough_School_Seal.jpg', courseRecord: '16:30', mapsLink: 'https://goo.gl/maps/PawyD7HaUauqgTKe8' },
      { school: 'BB&N', name: 'Fresh Pond', details: 'Speedy, flat, pavement', image: 'https://urbnparks.com/wp-content/uploads/2020/11/Fresh-pond4.jpg', schoolCrest: 'https://static.hudl.com/users/prod/10048778_6b86abd4bcca479ba1a7ec806e4079e0.jpg', courseRecord: '16:30', mapsLink: 'https://goo.gl/maps/PgDZvh1oLxfiK9MfA' },
      { school: 'Belmont Hill', name: 'Rockmeadow', details: 'Rocky and secluded', image: belmontHillImage, schoolCrest: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Belmont_Hill_School_Seal.svg/1200px-Belmont_Hill_School_Seal.svg.png', courseRecord: '16:30', mapsLink: 'https://goo.gl/maps/kmmXDswScgyDnt8r5' },
    ];
  
  
    return (
      <View style={styles.container}>
        <Header HeaderText="DIRECTORY" menuButtonOn={true} />
        <ScrollView>
          {coursesData.map((course, index) => (
            <CourseCard key={index} name={course.name} mapsLink={course.mapsLink} schoolCrest = {course.schoolCrest} school={course.school} details={course.details} image={course.image} courseRecord={course.courseRecord}/>
          ))}
        </ScrollView>
      </View>
    );
  };
  
  const CourseScreen = ({ route }) => {
    const {courseData } = route.params;
  
    const schoolAndName = `${courseData.school}: ${courseData.name}`
  
    return (
      <View style={styles.container}>
        <Header HeaderText="Course" menuButtonOn={true} />
  
        <ImageBackground style={styles.background} source={{ uri: courseData.image }}>
          <View style={styles.infoContainer}>
            <Image style={styles.picture} source={{ uri: courseData.schoolCrest }} />
            <Text onPress={()=>Linking.openURL(courseData.mapsLink)} style={[styles.name1, {textDecorationLine: 'underline'}]}>{schoolAndName}</Text>
            <Text style={styles.otherInfo}>{courseData.details}</Text>
            <Text style={styles.pr}>{`Course Record: ${courseData.courseRecord}`}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  export {CourseScreen, CourseDirectoryScreen}