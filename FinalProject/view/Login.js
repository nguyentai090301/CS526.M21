import React,  {useState, Component} from "react";
import {View, Alert, Text, Navigator, TouchableOpacity, TextInput,Image, StyleSheet, Dimensions} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
const windownWidth = Dimensions.get('window').width;
const windownHeight= Dimensions.get('window').height;
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

//19522154@gm.uit.edu.vn
//KTCaps09032001
export default function Login({navigation}) {  
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');


  const auth = getAuth();
  const handleLogin = () => {
  signInWithEmailAndPassword(auth, mail, pass)
    .then((userCredential) => {
      // Signed in 
      Alert.alert('Đăng nhập thành công!!!');
      navigation.navigate('TrangChu');
      // ...
    })
    .catch((error) => {
      Alert.alert('Đăng nhập thất bại!!!');
      // ..
    });
  }
  return (
      <View style = {{flex: 1, backgroundColor: '#EDE3AF', irection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../resources/bake.png')}></Image>
          <TextInput
            style = {{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, margin: 10}}
            onChangeText={newText => setMail(newText)}        
          >
          </TextInput>

          <TextInput
            style = {{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, margin: 10}}
            onChangeText={newText => setPass(newText)}
          >
          </TextInput>
          <TouchableOpacity style = {styles.signupview}
          onPress={handleLogin}
          >
            <Text style = {{color: 'black', fontWeight: 'bold'}}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.signupview}
          onPress={() => navigation.navigate('SignUp')}
          >
            <Text style = {{color: 'black', fontWeight: 'bold'}}>
              SignUp
            </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
            onPress={()=>navigation.navigate('TrangChu')
            
          }
          style = {{marginTop: '40%'}}
            >
              <Text style = {{color: 'gray'}}>Bỏ qua</Text>
            </TouchableOpacity>
          </View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#EDE3AF'
  },
    TopText:{
      fontSize:30,
      paddingTop:0,
      fontWeight:'bold'

    },
    TopView:{
        marginTop:0.10*windownWidth,
        alignItems:'center',
        backgroundColor:'white',
        width:0.9*windownWidth,
        marginHorizontal:18,
        borderRadius:20
    },
    UseName:{
      marginTop:30,
      backgroundColor:'#C0C0C0',
      width:'80%',
      height:40,
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:20
    },
    Email:{
      marginTop:30,
      backgroundColor:'#C0C0C0',
      width:'80%',
      height:40,
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:20
    },  
     Passworld:{
      marginTop:30,
      backgroundColor:'#C0C0C0',
      width:'80%',
      height:40,
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:20
    } , 
     Confirmpassworld:{
      marginTop:30,
      backgroundColor:'#C0C0C0',
      width:'80%',
      height:40,
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:20
    } ,
    Icon:{
      marginTop:30,
      resizeMode: 'contain',
      height: '10%',
      width: '10%'
    }  ,
    signupview:{
      width:0.4*windownWidth,
      height:0.08*windownWidth,
      borderColor:'white',
      borderWidth:1,
      borderRadius:30,
      marginTop:10,
      backgroundColor:'#00FFFF',
      alignItems:'center',
      justifyContent:'center'
    }
});