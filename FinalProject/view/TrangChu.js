import React, {Component, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View, Button, Image, SafeAreaView, Alert,TouchableOpacity,StatusBar, Dimensions} from 'react-native'
const windownWidth = Dimensions.get('window').width;
const windownHeight= Dimensions.get('window').height;

const Home = () => {
  return (
    <View style ={{height: '100%', width: '100%', backgroundColor: '#EDE3AF'}}> 
            <StatusBar barStyle = 'dark-content'/>
        <SafeAreaView style = {{flex: 1}}>
            {/* Tim kiem*/}
            <View style = {{height:30, width: "100%", alignItems: 'center', marginTop:0.02*windownHeight , flexDirection: 'row', borderWidth:1}}>
                <TouchableOpacity style ={{height:"100%", aspectRatio: 1, position: 'absolute', paddingRight: 5}}>
                    <Image source={require('../resources/research.png') } resizeMode= 'contain' style = {{height:'100%', width: '100%'}}></Image>
                </TouchableOpacity>
                <TextInput placeholder='Bạn đang tìm kiếm món nào...' style ={{height: '100%', textAlign:'left',paddingLeft: 40, width: "85%",borderWidth: 1}}></TextInput>      
                
            </View>
        </SafeAreaView>
        </View>
  );
}

export default Home;
