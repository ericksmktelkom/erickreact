import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
// baris diatas sebagai tempat mengenalkan komponen seperti view button

import Header from '../components/Header';
import Body from '../components/Body';

export default class Home extends React.Component {

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

  
  handleNavNativeBase = () => {
    this.props.navigation.navigate('NativeBase')  
   }

  handleNav = () => {
   this.props.navigation.navigate('Counter')  
  }

  nativeBase = () =>{
      this.props.navigate.navigate('Native Base')
  }
  //tempat untuk mengkoding setelah komponen dideklarasikan
  render() {
    console.log('ini render')
    return (
      <View style={styles.container}>
        {/* pemanggilan komponen header */}
        <Header title="HOME" />
        <Button 
            title="Nav to Counter Page"
            color="black"
            onPress={this.handleNav}
        />
        {/* pemanggilan komponen body */}
        
        {/* //<Body></Body> */}
        <Button 
            title="Nav to Native Base"
            color="black"
            onPress={this.handleNavNativeBase}
        />
        {/* pemanggilan komponen body */}
        <Body/>

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
