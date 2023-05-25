
import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image , TextInput, ScrollView, ImageBackground, Linking} from 'react-native';
import styles from './styles'
const belmontHillImage = 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTE2Nzk2NzcvMTgwZWVmZWI3MDA4ZjIwMTAyYjA0MWFhOTE5ZjNiZGMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0='
import { Calendar } from 'react-native-calendars';
const noblesBlue = "#103c7b";
import {Header} from './header'

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
    
export {CalendarScreen}  