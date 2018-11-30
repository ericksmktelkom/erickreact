import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



//deklarasi component header expirt defoult biar bisa diakses ke semuanya
export default class Header extends React.Component {
    render() {
      return (
        // deklarasi header
        <View style={styles.header}>
          {/* pemanggilan komponen left */}
          {/* <NavButton text="Back"/> */}
          {/* deklarasi text */}
          <Text style={styles.text}>{this.props.title}</Text>
          {/* pemanggilan komponen right */}
          {/* <NavButton text="Next" /> */}
          {/* deklarasi teks */}
          
        </View>
      )
    }
  }


  //deklarasi komponen left
class NavButton extends React.Component{
render(){
  return (
    <View>
      <Text style={styles.textButton}>{this.props.text}</Text>
    </View>
          )
    }
}


// //deklarasi komponen right koding dibawah tidak dipakai jiika sudah pakai navButton
// class navButton extends React.Component{
//   render(){
//     return (
//       <View>
//         <Text style={styles.textButton}>{this.props.text}</Text>
//       </View>
//             )
//       }
//   }

  
  const styles = StyleSheet.create({
    header: {
        height: 80,
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent:'space-around',
        flexDirection:'row'
    
      },
      text: {
        fontSize: 25,
        color: '#fff'
      },
      txtHeader: {
        color:'#fff',
        fontSize:10
      },
      textButton: {
        color:'#fff',
      
      },
      containerButton: {
        color:'#fff',
        fontSize:10
      },
     
  })

