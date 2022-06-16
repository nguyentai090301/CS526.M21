import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput,Image,TouchableOpacity, Alert,Dimensions} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import 'firebase/database';
const windownWidth = Dimensions.get('window').width;
const windownHeight= Dimensions.get('window').height;
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
const firebaseApp = initializeApp(firebaseConfig);

export default function SignUp({navigation}) {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState('');
  const [name, setName] = useState('');
const handleSignUp = () => {
  if (pass == '' || repass == '' ||name == ''||mail == '')
  {
    Alert.alert('Vui lòng điền đầy đủ thông tin');
  }
  else 
  {
    if (repass == pass)
    {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, mail, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Alert.alert('Đăng ký thành công!!!');
        // pushOnDB();
        navigation.navigate('Login')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Đăng ký thất bại!!!');
        
        // ..
      });
    }
    else{
      Alert.alert('Mật khẩu không khớp!!!');
    }
  }
}
// const pushOnDB = () =>{
//   itemRef.set({
//     email: {mail},
//     password: {pass},
//     name: {name}
//   })
// }
return (
    <View style={styles.container}>

      <View style={styles.TopView}>
           <Image style={styles.Icon} source={require('../resources//SignUp.png')}></Image>
          <Text style={styles.TopText}> Create Account</Text>
          <View style={styles.UseName}>
             <TextInput placeholder='UseName...' onChangeText={newText => setName(newText)} ></TextInput>      
          </View>
          <View style={styles.Email}>
              <TextInput placeholder='Email...' onChangeText={newText => setMail(newText)}></TextInput>      
          </View>
          <View style={styles.Passworld}>
             <TextInput placeholder='Passworld...' onChangeText={newText => setPass(newText)}></TextInput>      
          </View>
          <View style={styles.Confirmpassworld}>
             <TextInput placeholder='Confirmpassworld...' onChangeText={newText => setRepass(newText)}></TextInput>     
          </View>
          <View style={styles.signupview}>
          <TouchableOpacity
          onPress={handleSignUp}
          >

              <Text style={{fontSize:20,fontWeight:'bold'}}> Sign Up</Text>

          </TouchableOpacity>
          </View>
          <View style = {styles.signupview}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
            >
              <Text style = {{fontSize:20,fontWeight:'bold'}}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
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