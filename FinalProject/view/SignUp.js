import * as React from 'react';
import { Text, View, StyleSheet, TextInput,Image,TouchableOpacity, Alert} from 'react-native';

export default function SignUp({navigation}) {
return (
    <View style={styles.container}>
      <View style={styles.TopView}>
           <Image style={styles.Icon} source={require('../resources//SignUp.png')}></Image>
          <Text style={styles.TopText}> Create Account</Text>
          <View style={styles.UseName}>
             <TextInput placeholder='UseName...'></TextInput>      
          </View>
          <View style={styles.Email}>
              <TextInput placeholder='Email...'></TextInput>      
          </View>
          <View style={styles.Passworld}>
             <TextInput placeholder='Passworld...'></TextInput>      
          </View>
          <View style={styles.Confirmpassworld}>
             <TextInput placeholder='Confirmpassworld...'></TextInput>     
          </View>
          <TouchableOpacity 
                    onPress={() => navigation.navigate('Login')}>
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