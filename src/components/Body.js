import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';


//deklarasi component body
export default class Body extends React.Component {
  //initial state
  state = {
    showContent: 'hidden'
  }


  componentDidMount() {
    setTimeout(this.task, 1000)
  }
  task = () => {
    //change variabel state
    this.setState({
      showContent: 'show'
    })
  }



  renderContent = () => {
    if (this.state.showContent == 'hidden') {
      return null
    } else {
      return (
        <View>
          {/* menampilkan gambar masukkan gambar dalam folder dekat appjs */}
          <Image
            style={styles.Img}
            source={require('../../images2.png')}
          />
          <Text>Open up App.js to start erick!</Text>
          <Text>Maju Terus pantang Mundur</Text>
          <Button
            onPress={this.onPressButton1}
            title="button 1"
            color="#000"
            accessbilitylabel="learn more this purple"

          />
          <Button
            onPress={this.onPressButton2}
            title="button 2"
            color="#00f"
            accessbilitylabel="learn more this purple"
          />
          <AppChild />
        </View>
      )
    }
  }


  render() {
    // deklarasi body
    return (

      <View style={styles.Body}>

        {this.renderContent()}

      </View>
    )
  }
}
// untuk membuat tulisan baru harus di panggil dari dalam vie di atas berupa Appchild
class AppChild extends React.Component {
  render() {//render wajib ada
    return (
      <View>
        <Text> Chhil Up Komponent</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Body: {
    backgroundColor: 'orange',
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  Img: {
    alignSelf: 'center'
  }



})