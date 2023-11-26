import * as React from 'react'
import {View,TouchableOpacity,StyleSheet,Text} from 'react-native'
import BottomTabNavigator from './components/BottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import { ToastAndroid } from 'react-native-web'
export default class App extends React.Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}

const SwitchNavigator = createSwitchNavigator({
    loginScreen:LoginScreen,
    bottomTabNavigator:BottomTabNavigator
})

const AppContainer = createAppContainer({SwitchNavigator}) 

