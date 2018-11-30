import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
// baris diatas sebagai tempat mengenalkan komponen seperti view button

import Header from '../components/Header';
import BodyCounting from '../components/BodyCounting';

export default class Counter extends React.Component {

  // contrucor muncul pertama
  constructor() {
    super();
    //alert('kostraktor muncul pertama kali')
  }

  componentWillMount() {
    console.log('ini render')
  }

  // membuat button 
  onPressButton1 = () => {
    alert('tekan aku 1')

  }

  onPressButton2 = () => {
    alert('tekan aku 2')

  }
  //tempat untuk mengkoding setelah komponen dideklarasikan
  render() {
    console.log('ini render')
    return (
      <View style={styles.container}>
        {/* pemanggilan komponen header */}
        {/* <Header title="NUMBER COUNTER" /> */}
        {/* pemanggilan komponen body */}
        <BodyCounting/>
        {/* //<Body></Body> */}
        

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
    paddingTop: 20,
    //justifyContent: 'center',
    //borderWidth:20,
    //borderColor:'lime'

  },
  
  Body: {
    backgroundColor: 'red',
    flex:10,
    justifyContent:'center',
    alignItems:'center'
  },

  Img : {
    alignSelf:'center'
  }
});
