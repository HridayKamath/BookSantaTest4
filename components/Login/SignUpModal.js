import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
} from 'react-native';
import { Icon } from 'react-native-elements';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const SignUpModal = (props) => (
  <Modal animationType="fade" transparent={false} visible={props.visible}>
    <View styles={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        <KeyboardAvoidingView styles={styles.upperContainer}>
          <View style={{ flexDirection: 'row' }}>
          
          <Text style = {styles.title}>
          Sign Up
          </Text>

          <Icon
          name = {'cross'}
          type = {'entypo'}
          size = {50}
          containerStyles = {styles.icon}
          onPress = {props.onCancel}
          />
          </View>

          <CustomInput 
          style = {styles.input}
          placeholder = {'First Name'}
          maxLength = {12}
          onChangeText = {text => props.setFirstName(text)}
          />

          <CustomInput 
          style = {styles.input}
          placeholder = {'Last Name'}
          maxLength = {12}
          onChangeText = {text => props.setLastName(text)}
          />

          <CustomInput 
          style = {styles.input}
          placeholder = {'Phone Number'}
          maxLength = {12}
          keyboardType = {'numeric'}
          onChangeText = {text => props.setContact(text)}
          />

          <CustomInput 
          style = {styles.input}
          placeholder = {'Address'}
          multiline = {true}
          onChangeText = {text => props.setAddress(text)}
          />

          

          <CustomInput 
          style = {styles.input}
          placeholder = {'Email'}
          keyboardType = {'email-address'}
          onChangeText = {text => props.setEmail(text)}
          />

          <CustomInput 
          style = {styles.input}
          placeholder = {'Password'}
          secureTextEntry = {true}
          onChangeText = {text => props.setPassword(text)}
          />

          <CustomInput 
          style = {styles.input}
          placeholder = {'Confirm Password'}
          secureTextEntry = {true}
          onChangeText = {text => props.setConfirmPassword(text)}
          />

          <CustomButton
            title={'Submit'}
            onPress={props.onSubmit}
            style={styles.button}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  </Modal>
);

export default SignUpModal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginTop: 80,
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '500',
    color: '#6fc0b8',
    marginTop: 30,
  },
  icon: { 
   position: 'absolute', 
   left: 195, 
   top: 8, 
   bottom: 20 },

  input: {
    width: '75%',
    height: 55,
    marginTop: 20,
    borderColor: '#6fc0b8',
    borderWidth: 1.5,
  },
  button: { 
    marginTop: 20 
    },
});
