import React from 'react';
import { createStackNavigator, createNavigationContainer } from 'react-navigation';
import Home from './src/screens/Home';
import Counter from './src/screens/Counter';
import NativeBase from './src/screens/NativeBase';
import Form from './src/screens/Form';



//deklarasi router
const App = createStackNavigator({
  
  Home: { //route name
    screen: Home,//screen
          navigationOptions: {//styling
            title:'home'
          }
   },
  Counter: { screen: Counter,
              navigationOptions: {
                title:'Counter'
              }
     },
  NativeBase: { screen: NativeBase,
      navigationOptions: {
        title:'Native Base'
      }
  },
  Form: { screen: Form,
    navigationOptions: {
      title:'Form'
    }
},
});

export default createNavigationContainer (App);