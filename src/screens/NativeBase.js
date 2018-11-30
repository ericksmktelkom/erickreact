import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Fab, button, Spinner } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';//lib untuk get data


export default class NativeBase extends React.Component {

  state = {
    data: [],
    isLoading: false
  }

  componentDidMount() {
    this.setState({
      isLoading:true
    })
    //get data online dari api
    axios({
      url: 'https://jsonplaceholder.typicode.com/todos',
      method: 'GET',//enum POST, PUT, GET, DELATE
    }).then((succResult) => {
      console.log(succResult)
      //state data kosong ke data online api
      this.setState({
        data: succResult.data,
        isLoading: false
      })

    }).catch((errResult) => {
      alert(errResult)
    })
  }

  //deklarasi arrai
  // data = [
  //   {
  //     name: 'Budi',
  //     age: 21
  //   },
  //   {
  //     name: 'Andi',
  //     age: 24
  //   },
  //   {
  //     name: 'Ana',
  //     age: 21
  //   },
  //   {
  //     name: 'Heru',
  //     age: 20
  //   },
  // ]

  handleNavForm = () => {
    // alert('hello')
    this.props.navigation.navigate('Form');
  }

  renderList = (item, index) => {
    return (
      <ListItem key={index}>
        <Text>{item.title}</Text>
      </ListItem>
    )

  }
  render() {
    return (
      <Container>
        {this.state.isLoading === true ? <Spinner/>: null}
        <Content>
          <List>
            {this.state.data.map(this.renderList)}
          </List>
        </Content>
        <Fab
          containerStyle={{}}
          style={{ backgroundColor: '#5067ff' }}
          position="bottomRight"
          onPress={this.handleNavForm}>
          <MaterialIcons name="add" />
        </Fab>
      </Container>
    );
  }
}
// deklarasi styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
}
)