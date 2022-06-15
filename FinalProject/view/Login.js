import React, {Component} from "react";
import {View, Alert, Text, Navigator, TouchableOpacity, TextInput} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcPvGsLVTQwHK_9GV10faSBxdyd1YeMhA",
  authDomain: "cookingeasily-df68d.firebaseapp.com",
  databaseURL: "https://cookingeasily-df68d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cookingeasily-df68d",
  storageBucket: "cookingeasily-df68d.appspot.com",
  messagingSenderId: "332129768284",
  appId: "1:332129768284:web:e75b56eed500cea4346799",
  measurementId: "G-4JZ7DHD2K3"
};
const app = initializeApp(firebaseConfig);


export default function Login({navigation}) {  

        return (
            <View style = {{flex: 1, backgroundColor: '#EDE3AF', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                style = {{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, margin: 10}}
                
                
                >
                </TextInput>
                <TextInput
                style = {{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, margin: 10}}

                >
                </TextInput>
                <TouchableOpacity style = {{ backgroundColor: 'blue', height: 40, width: 60, alignItems: 'center', alignContent: 'center'}}
                onPress={() => navigation.navigate('TrangChu')}
                >
                  <Text style = {{color: 'white'}}>
                    Login
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{ backgroundColor: 'blue', height: 40, width: 60, alignItems: 'center', alignContent: 'center'}}
                onPress={() => navigation.navigate('SignUp')}
                >
                  <Text style = {{color: 'white'}}>
                    SignUp
                  </Text>
                </TouchableOpacity>
            </View>
        );
    }
