import React from "react"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native'

// pages
import Home from "./screens/home";
import Splash from "./screens/splash";
import Create from "./screens/create";
import List from "./screens/list";
import Modify from './screens/modify'

const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerLeft: () => (<View/>)}}/>
            <Stack.Screen name="Create" component={Create}/>
            <Stack.Screen name="List" component={List}/>
            <Stack.Screen name="Modify" component={Modify}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default App