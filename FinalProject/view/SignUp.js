import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput,Image,TouchableOpacity, Alert} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
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
export default function SignUp({navigation}) {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState('');
  const [name, setName] = useState('');
const handleSignUp = () => {
  if (repass == pass)
  {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, mail, pass)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      Alert.alert('Đăng ký thành công!!!');
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
return (
    <View style={styles.container}>
    <View>
        <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
        >
        <Text>Đăng nhập</Text>
        </TouchableOpacity>
    </View>
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
          <TouchableOpacity 
                    onPress={handleSignUp}>
          <View style={styles.signupview}
          >
              
              <Text style={{fontSize:20,fontWeight:'bold'}}> Sign Up</Text>
          </View>
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
      paddingTop:30,
      fontWeight:'bold'

    },
    TopView:{
        marginTop:20,
        alignItems:'center',
        backgroundColor:'white',
        width:'90%',
        height:'80%',
        marginHorizontal:18,
        borderRadius:20
    },
    UseName:{
      marginTop:30,
      backgroundColor:'#C0C0C0',
      width:'80%',
      height:'5%',
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:20
    },
    Email:{
      marginTop:30,
      backgroundColor:'#C0C0C0',
      width:'80%',
      height:'5%',
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:20
    },  
     Passworld:{
      marginTop:30,
      backgroundColor:'#C0C0C0',
      width:'80%',
      height:'5%',
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:20
    } , 
     Confirmpassworld:{
      marginTop:30,
      backgroundColor:'#C0C0C0',
      width:'80%',
      height:'5%',
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:20
    } ,
    Icon:{
      marginTop:30
    }  ,
    signupview:{
      width:160,
      height:45,
      borderColor:'white',
      borderWidth:1,
      borderRadius:30,
      marginTop:40,
      backgroundColor:'#00FFFF',
      alignItems:'center',
      justifyContent:'center'
    }
});
