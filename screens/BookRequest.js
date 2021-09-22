import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, KeyboardAvoidingView } from 'react-native';
import db from '../config.js';
import firebase from 'firebase';
import AppHeader from '../components/AppHeader';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default class BookRequest extends Component {

  constructor(){
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      bookName: ' ',
      reasonToRequest: '',
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  addRequest =(bookName,reasonToRequest)=>{
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('requested_books').add({
        "user_id": userId,
        "book_name":bookName,
        "reason_to_request":reasonToRequest,
        "request_id"  : randomRequestId,
    })

    this.setState({
        bookName :'',
        reasonToRequest : ''
    })

    return (alert("Book Requested Successfully"));
  }


  render(){
    var {bookName, reasonToRequest} = this.state;

    return (
      <SafeAreaProvider>
      <View>
        <AppHeader title= {'Request Books'}/>
        <KeyboardAvoidingView>
          <CustomInput
          label = {'Book Name'}
          placeholder = {'Book Name'}
          onChangeText = {(text)=>{this.setState({bookName: text})}}
          value = {bookName}
          />

         <CustomInput
          label = {'Reason'}
          placeholder = {'Reason'}
          multiline = {true}
          onChangeText = {(text)=>{this.setState({reasonToRequest: text})}}
          value = {reasonToRequest}
          />

        </KeyboardAvoidingView>

          <CustomButton
           title = {'Request Book'}
           onPress = {()=>{this.addRequest(this.state.bookName, this.state.reasonToRequest)}}
          />

          
      <Text>
      Book Request Screen
      </Text>
      </View>
      </SafeAreaProvider>
    )
  }
}
