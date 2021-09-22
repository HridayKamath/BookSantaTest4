import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import AppHeader from '../components/AppHeader';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class BookDonate extends Component {

  constructor(){
    super();
    this.state = {
      requestedBooksList: [],
    },
    this.requestedRef = null;
  }

  

getRequestedBookList = () => {
  this.requestedRef = db.collection('requested_books').onSnapshot(
    snapshot => {
      var requestedBooksList = snapshot.docs.map(
      (document) => document.data()
      );
      console.log(document)
      this.setState({
        requestedBooksList: requestedBooksList
      });
    }
    );
  error => {this.requestedRef}

}

componentDidMount(){
  this.getRequestedBookList()
}

componentWillUnmount(){
  this.requestRef;
}



keyExtractor = (item, index) => index.toString();

renderItem = ({item, index}) => {
    return (
        <ListItem
        key = {index}
        title={item.bookName}
        subtitle={item.reasonToRequest}
        leftElement = {
          <Image style={{ height: 50, width: 50, }} source={{ uri: item.imageLink, }} /> 
      }
        rightElement={ 
        <TouchableOpacity style = {{backgroundColor: 'blue'}}>
        
          <Text style={{ color: '#000', fontFamily: 'Georgia' }}>
            View

            </Text> 
            </TouchableOpacity> }
        
        bottomDivider
        />
    )
}

  render(){
      var {requestedBookList} = this.state;

    return (
        <SafeAreaProvider>
      <View style = {{margin: 200}}>
          <AppHeader title = {'Donate Books'}/>
          {this.state.requestedBooksList.length === 0?
          (
          <View style = {{marginTop: 100}}>
              <Text>
                  List of all Requested Books
                  </Text>
              </View>
              ):
          (
              <FlatList
              keyExtractor = {this.keyExtractor}
              data = {this.state.requestedBooksList}
              renderItem = {this.renderItem}
              />
          )}
      <Text>
      Book Donate Screen
      </Text>
      </View>
      </SafeAreaProvider>
    )
  }
}
