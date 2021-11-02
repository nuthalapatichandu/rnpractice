import React from "react";
import {View,Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";
import Techmnxt from "./screens/Techmnxt";

const Stack = createStackNavigator();

function MyApp(){
  return(
    <NavigationContainer initialRouteName="Home">
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
          title: 'mEasy - Tech Mahindra',
        }}/>
      <Stack.Screen name="Techmnxt" component={Techmnxt} options={{
          title: 'More Options',
        }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default  MyApp;
 


