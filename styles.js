import React from 'react';
import {StyleSheet} from 'react-native';
const noblesBlue = "#103c7b"

export default StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  sport: {
    fontSize: 16,
    color: '#666',
  },
  
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#e6f2ff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#003f5c',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  loginText: {
    color: 'white',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Georgia',
    textAlign: 'center',
    flex: 1,
  },
  buttonWrapper: {
    height: '100%',
    justifyContent: 'center'
  },
  
  container: {
      flex: 1,

      
    },
    pageHeader: {
      position: "top",
      flex: 8, // the number of columns you want to devide the screen into
      marginHorizontal: "auto",
      width: '100%',
      backgroundColor: noblesBlue,
      maxHeight: '15%',
  
    },
    
    headerTextWrapper: {
      marginTop: '1.7%',
      height: '100%',
      width: '100%',
      paddingLeft: '0%',
      position: 'absolute',
      zIndex: -10,
      justifyContent: 'center',
      alignContent: 'center',
      
    },
    header1: {
      fontFamily: "Georgia",
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    header2: {
      fontSize: '32',
      fontFamily: "Georgia",
      color: 'white',
    },
  
    menuIcon: {
        margin: '30%',
        marginTop: '45%'
    } ,
    name4: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 10,
      fontFamily: 'Georgia'
  
    },
    menuCatagoriesButtons: {
      flex: 1, backgroundColor: noblesBlue, borderRadius: 32, margin: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'white'
    },
    mainPageContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5F5F5',

    },
     mainLoginContainer: {
      alignItems: 'center',
      width: '80%',
      backgroundColor: noblesBlue,
      height: '60%',
      padding: '10%',
      borderRadius: 32,
    }, 
    
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      backgroundColor: '#103c7b',
    },
    infoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '30%',
    },
    picture: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
    },
    name1: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 10,
    },
    otherInfo: {
      fontSize: 18,
      color: 'white',
      marginBottom: 10,
    },
    pr: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    }
  });