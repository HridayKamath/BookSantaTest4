import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SignUpModal from '../components/Login/SignUpModal';

import db from '../config';
import firebase from 'firebase';

export default class LoginScreen extends Component {
  constructor(){
    super()
    this.state={
      emailId : '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      isModalVisible: false,
    }
  }

  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{

      Alert.alert("Successfully Login")
      this.props.navigation.navigate('BottomTab')
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (emailId, password) =>{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      return Alert.alert("User Added Successfully")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }

  handleSignUp = () =>{
    this.setState({isModalVisible: true})
  }

  handleSubmit = () =>{
    var {
      emailId ,
      password ,
      confirmPassword,
      firstName,
      lastName,
      address,
      contact
    } = this.state;

    if(password != confirmPassword){
      Alert.alert('Passwords not Matching');
    }
    else{
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
      .then(()=>{
        db.collection("Users").add({
          first_name: firstName,
          last_name: lastName,
          phone: contact,
          username: emailId,
          address: address,
        });
        Alert.alert('User Successfully Added','',[{
          text: 'ok',
          onPress: ()=>this.setState({isModalVisible: false})
        }]);
      })
      .catch(error => {Alert.alert(error.message);})
    }
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Text style={styles.title}>My App</Text>
          <Image
        source = {require("../assets/logo.png")}
        style = {{width: 300, height: 250, marginBottom: 50, marginTop: 5}}
        /> 
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="example@booksanta.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>

        <SignUpModal
        setFirstName = {text => this.setState({firstName: text})}
        setLastName = {text => this.setState({lastName: text})}
        setContact = {text => this.setState({contact: text})}
        setAddress = {text => this.setState({address: text})}
        setEmail = {text => this.setState({emailId: text})}
        setPassword = {text => this.setState({password: text})}
        setConfirmPassword = {text => this.setState({confirmPassword: text})}

        onSubmit = {()=>{this.handleSubmit()}}
        onCancel = {()=>{this.setState({isModalVisible: false});}}
        visible = {this.isModalVisible}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:20,
    color : '#ff3d00',
    marginTop: 22,
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
})
