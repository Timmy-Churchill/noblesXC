import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image , TextInput, ScrollView, ImageBackground, Linking} from 'react-native';
import styles from './styles'
import { faBars, faGear, faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import { Link, NavigationContainer } from '@react-navigation/native';
import { navigate } from './NavigationService';
const belmontHillImage = 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTE2Nzk2NzcvMTgwZWVmZWI3MDA4ZjIwMTAyYjA0MWFhOTE5ZjNiZGMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0='
import { Calendar } from 'react-native-calendars';
import MultiSelect from 'react-native-sectioned-multi-select'
import { LinearGradient } from 'expo-linear-gradient';


const Stack = createStackNavigator();
const randomImage = 'https://picsum.photos/800/1200';
const noblesBlue = "#103c7b";
function formatDate(dateString) {
  const timeZoneOffset = new Date().getTimezoneOffset() * 60 * 1000; // get local time zone offset in milliseconds
  const date = new Date(Date.parse(dateString) + timeZoneOffset); // adjust date string by time zone offset
  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
  const day = date.getDate();
  const daySuffix = getDaySuffix(day);
  const month = monthNames[date.getMonth()];

  return `${month} ${day}${daySuffix}`;
}

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}


const Row = ({children}) => {
  return(
    <View style = {{flexDirection: 'row', flex: 1, height: '100%'}}>{children}</View>
  )
}
const HomeScreen = (props) => {
  return (
  
  <View style={[styles.container]}>
    <Header HeaderText="HOME" menuButtonOn={true}></Header>
    <Button title={"SILLY BUTTON"} onPress={()=>navigate('Login')}>
  
    </Button>
  </View>
  )
};
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


const MenuScreen =(props) =>{
  return(
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 220}}>
            <LinearGradient colors={[noblesBlue, noblesBlue]} style={{flexDirection: 'column', height: '100%'}} start={[1,0]} end={[0,0]}>

              <View style={{flex: 2, }}></View>
              <TouchableOpacity onPress={()=>navigate('Home')} style={styles.menuCatagoriesButtons}><Text style={styles.name4}>Home</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>navigate('Calendar')} style={styles.menuCatagoriesButtons}><Text style={styles.name4}>Calendar</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>navigate('CourseDirectory')} style={styles.menuCatagoriesButtons}><Text style={styles.name4}>Courses</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>navigate('Directory')} style={styles.menuCatagoriesButtons}><Text style={styles.name4}>Directory</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>navigate('Directory')} style={styles.menuCatagoriesButtons}><Text style={styles.name4}>Home</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>navigate('Directory')} style={styles.menuCatagoriesButtons}><Text style={styles.name4}>Home</Text></TouchableOpacity>
              {/* <TouchableOpacity onPress={goToPage(props.navigation, 'Home')} style={{flex: 1, backgroundColor: 'green'}}></TouchableOpacity>
              <TouchableOpacity onPress={goToPage(props.navigation, 'Home')} style={{flex: 1, backgroundColor: 'red'}}></TouchableOpacity> */}
              <View style={{flex: 2, }}></View>
            </LinearGradient>
            
          </View>
          <View style={{width: 400}}>
            {'Login' == 'Login' && <LoginScreen menuActive = {true} ></LoginScreen>}
            {'navigationRef.current' == 'Home' && <HomeScreen menuActive = {true} ></HomeScreen>}
            <TouchableOpacity style={{position: 'absolute', height: '100%', width: '100%'}} onPress={()=>navigate('Login')}></TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

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
    { name: 'Timothy Churchill', role: 'Captain', image: 'https://nobilis.nobles.edu/images_sitewide/Photos/244182.jpeg', PR: '16:30' },
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

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substring(0, 10));

  const markedDates = events.reduce((acc, event) => {
    acc[event.date] = { marked: true };
    return acc;
  }, {});

  const filteredEvents = events.filter((event) => event.date === selectedDate);

  return (

    <View style={[styles.container, {backgroundColor: 'white'}]}>
      <Header HeaderText="Calender" menuButtonOn='True'> </Header>
      <Calendar
        current={selectedDate}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={markedDates}
        calendarStyle={{
          backgroundColor: noblesBlue,
          paddingLeft: 20,
          paddingRight: 20,
          marginBottom: 100,
        }}
        headerStyle={{
          backgroundColor: 'white',
          borderBottomWidth: 0,
        }}
        theme={{
          textMonthFontWeight: 'bold',
          textMonthFontSize: 30,
          textMonthFontFamily: 'Georgia',
          textMonthTextColor: 'red',
          textDayFontSize: 18,
          textDayFontFamily: 'Helvetica',
          textDayFontColor: noblesBlue,
          textDayHeaderFontSize: 16,
          textDayHeaderFontFamily: 'Georgia',
          textSectionTitleColor: noblesBlue,
          arrowColor: noblesBlue,
          dotColor: 'red',
          selectedDotColor: 'orange',
        }}
      />
    <View style={{ alignItems: 'center', paddingTop: 12, marginBottom: 12, borderTopWidth: 2, borderTopColor: noblesBlue}}>
      <Text style={{ fontFamily: 'Georgia', fontSize: 24, fontWeight: 'bold', textDecorationColor: noblesBlue }}>{formatDate(selectedDate)}</Text>
    </View>
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={{ margin: 12, padding: 10, backgroundColor: '#Def5fd', borderColor: noblesBlue, borderWidth: 2, borderRadius: 12, marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text style={{ fontWeight: 'bold' }}>Time: </Text>
              <Text>{item.time}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold' }}>Location: </Text>
              <Text>{item.location}</Text>
            </View>
            <Text style={{ marginTop: 5 }}>{item.description}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={{ padding: 10 }}>
            <Text style={{fontSize: 16, fontFamily: 'Georgia'}}>No events for this date.</Text>
          </View>
        )}
      />
    </View>
  );
};


const events = [
  {
    title: 'Meeting with John',
    date: '2023-04-30',
    time: '13:15',
    location: "Kern's course",
    description: 'Discuss project roadmap',
  },
  {
    title: 'Birthday Party',
    date: '2023-05-05',
    description: 'Celebrate Sarah\'s birthday',
  },
  {
    title: 'Doctor\'s Appointment',
    date: '2023-05-10',
    description: 'Annual checkup',
  },
];

const addEvent = (newEvent) => {
  events.push(newEvent);
};
  


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