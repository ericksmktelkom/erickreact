import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text , Fab, Button } from 'native-base';
import {MaterialIcons} from '@expo/vector-icons'; 



export default class Form extends React.Component {

    render() {
        return (
            <Container>
            
            <Content>
              <List>
                <ListItem itemDivider>
                  <Text>A</Text>
                </ListItem>                    
                <ListItem>
                  <Text>Aaron Bennet</Text>
                </ListItem>
                <ListItem>
                  <Text>Ali Connors</Text>
                </ListItem>
                <ListItem itemDivider>
                  <Text>B</Text>
                </ListItem>  
                <ListItem>
                  <Text>Bradley Horowitz</Text>
                </ListItem>
                <ListItem>
                  <Text>Bagio</Text>
                </ListItem>
                <ListItem itemDivider>
                  <Text>C</Text>
                </ListItem>                    
                <ListItem>
                  <Text>Cinta</Text>
                </ListItem>
                <ListItem itemDivider>
                  <Text>D</Text>
                </ListItem>                    
                <ListItem>
                  <Text>Dodol</Text>
                </ListItem><ListItem itemDivider>
                  <Text>E</Text>
                </ListItem>                    
                <ListItem>
                  <Text>Eka</Text>
                </ListItem><ListItem itemDivider>
                  <Text>A</Text>
                </ListItem>                    
                <ListItem>
                  <Text>Aaron Bennet</Text>
                </ListItem><ListItem itemDivider>
                  <Text>A</Text>
                </ListItem>                    
                <ListItem>
                  <Text>Aaron Bennet</Text>
                </ListItem><ListItem itemDivider>
                  <Text>A</Text>
                </ListItem>                    
                <ListItem>
                  <Text>Aaron Bennet</Text>
                </ListItem>
              </List>
            
            </Content>
            <Fab 
                containerStyle= {{}}
                style={{backgroundColor:'#5067ff'}}
                position="bottomRight"
                onPress={() =>{}}>
                <MaterialIcons name="add"/>
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