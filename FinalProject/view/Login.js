// Login.js
import React, {Component, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View, Button, Image, SafeAreaView, Alert,TouchableOpacity,StatusBar, Dimensions} from 'react-native'
const windownWidth = Dimensions.get('window').width;
const windownHeight= Dimensions.get('window').height;
export default Login =({navigation}) =>{
    const [getPasswordVisible, setPasswordVisible] = useState(false)
    return (
        <View style ={{height: '100%', width: '100%', backgroundColor: '#EDE3AF'}}> 
            <StatusBar barStyle = 'dark-content'/>
        <SafeAreaView style = {{flex: 1}}>
            <View style ={{height:'100%', width: '100%'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
                    <View style = {{alignItems: 'flex-end', paddingRight: 15}}>
                        <Text style={{fontSize:16,color: '#646464'}}>Skip</Text>
                    </View>
                </TouchableOpacity>
                <View style= {{marginTop: 0.15*windownHeight, alignItems: 'center'}}>
                    <Image source={require('../resources/bake.png')}></Image>
                </View>
                {/* Username && Password*/}
                <View style ={{width:'100%', height: '20%', marginTop: 0.1*windownHeight, alignItems: 'center'}}>
                    {/* Usename*/}
                    <View style ={{height: 40, width: windownWidth*0.6, marginTop: 10}}>
                        <TextInput autoCapitalize = 'none' placeholder='Username' style = {{backgroundColor:'white', height: "100%", width: "100%", borderColor: '#646464', borderWidth: 1, textAlign: 'center'}}></TextInput>
                    </View>
                    {/* Password*/}
                    <View style ={{flexDirection: 'row', height: 40, width: windownWidth*0.6, marginTop: 10, justifyContent: 'space-between', alignItems: 'center'}}>
                        <TextInput autoCapitalize = 'none' placeholder='Password'
                        secureTextEntry = {getPasswordVisible? false:true}  
                        style = {{backgroundColor:'white', height: "100%", width: "100%", borderColor: '#646464', borderWidth: 1, textAlign: 'center'}}></TextInput>
                        <TouchableOpacity style ={{height:"60%", aspectRatio: 1, position: 'absolute', right: 0, paddingRight: 5}}
                        onPress ={()=>{
                            setPasswordVisible(!getPasswordVisible)
                        }}
                        >
                            <Image source={require('../resources/visible.png')} resizeMode= 'contain' style = {{height:'100%', width: '100%'}}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*Login and Signin*/}
                <View style ={{width:'100%', height: '20%', marginTop: 0.2*windownHeight, alignItems: 'center'}}>
                    {/* Login*/}
                    <View style ={{height: 40, width: windownWidth*0.6, marginTop: 10}}>
                        <Button title='Login'></Button>
                    </View>
                    {/* Password*/}
                    <View style ={{height: 40, width: windownWidth*0.6, marginTop: 10}}>
                        <Button title='Sign in'></Button>                    
                    </View>
                </View>
            </View>
        </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    height: 40,
    width: '75%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    alignSelf: 'center',
    marginBottom: 10
  }

})