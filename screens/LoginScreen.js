import * as React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,KeyboardAvoidingView,Image} from 'react-native'
import db from 'config.js'
import { ImageBackground } from 'react-native-web'
import { Header } from 'react-native/Libraries/NewAppScreen'
import firebase from 'firebase'

export default class LoginScreen extends React.Component{
    constructor(){
        super()


        this.state = {
            email:"",
            password:""
        }
    }

    handleLogin = (email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            this.props.navigation.navigate("bottomTabNavigator")
        }).catch(()=>{
            alert("Login failed. Username or password is incorrect.")
        })
    }


    render(){
        return(
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <ImageBackground source={require("../assets/background2.png")} style={styles.bgImage}>
                        <Image source={require("../assets/appName.png")} style={styles.appName}/>
                        <Image source={require("../assets/appIcon.png")} style={styles.appIcon}/>
                        <TextInput placeholder="Enter email here" onChangeText = {(text)=>{
                            this.setState({email:text})

                        }} style={styles.textinput} />
                        
                        <TextInput placeholder="Enter password here" onChangeText = {(text)=>{
                            this.setState({password:text})
                        }} style={styles.textinput}/>

                        <TouchableOpacity style={styles.loginButton} onPress={
                            this.handleLogin(this.state.email,this.state.password)
                        }>
                            <Text style={styles.scanbuttonText}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </KeyboardAvoidingView>
            
        )
    }
}


const styles = StyleSheet.create({
    loginButton:{
        width:200,
        height:40,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'blue',
        borderRadius:10
    },
	container: {
		flex: 1,
		backgroundColor: '#5653D4',
	},
	upperContainer: {
		flex: 0.2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textinputContainer: {
		borderWidth: 2,
		borderRadius: 10,
		flexDirection: 'row',
		backgroundColor: '#9DFD24',
		borderColor: '#FFFFFF',
	},
	textinput: {
		width: '57%',
		height: 50,
		padding: 10,
		borderColor: '#FFFFFF',
		borderRadius: 10,
		borderWidth: 3,
		fontSize: 18,
		backgroundColor: '#5653D4',
		fontFamily: 'Rajdhani_600SemiBold',
		color: '#FFFFFF',
	},
	scanbutton: {
		width: 100,
		height: 50,
		backgroundColor: '#9DFD24',
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	scanbuttonText: {
		fontSize: 24,
		color: '#0A0101',
		fontFamily: 'Rajdhani_600SemiBold',
	},
	lowerContainer: {
		flex: 0.8,
		backgroundColor: '#FFFFFF',
	},
	title: {
		fontSize: 20,
		fontFamily: 'Rajdhani_600SemiBold',
	},
	subtitle: {
		fontSize: 16,
		fontFamily: 'Rajdhani_600SemiBold',
	},
	lowerLeftContaiiner: {
		alignSelf: 'flex-end',
		marginTop: -40,
	},
	transactionContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	transactionText: {
		fontSize: 20,

		fontFamily: 'Rajdhani_600SemiBold',
	},
	date: {
		fontSize: 12,
		fontFamily: 'Rajdhani_600SemiBold',
		paddingTop: 5,
	},
    bgImage: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
    appIcon: {
		width: 200,
		height: 200,
		resizeMode: 'contain',
		marginTop: 80,
	},
    appIcon: {
		width: 200,
		height: 200,
		resizeMode: 'contain',
		marginTop: 80,
	},
    appName: {
		width: 80,
		height: 80,
		resizeMode: 'contain',
	},
});
