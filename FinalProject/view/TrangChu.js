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
            <View style = {{height:30, width: "100%", alignItems: 'center', marginTop:0.02*windownHeight, flexDirection: 'row'}}>
                <TouchableOpacity style ={{height:"100%", aspectRatio: 1, width:'10%', position: 'absolute', paddingRight: 20, right:0}}>
                    <Image source={require('../resources/research.png') } resizeMode= 'contain' style = {{height:'100%', width: '100%'}}></Image>
                </TouchableOpacity>
                <TextInput placeholder='Bạn đang tìm kiếm món nào...' style ={{height: '100%', textAlign:'left',paddingLeft: 40, marginLeft:20, width: "80%",borderWidth: 1}}></TextInput>      
            
            </View>
            <View style ={{flexDirection: 'row', alignItems:'center', paddingTop:10, height: 0.08*windownHeight, width: '100%'}}>
                <Text style = {{width: '65%', fontSize: 20, fontWeight: 'bold', paddingLeft: 10}}>Các món đang hot gần đây</Text>
                <Image source={require('../resources/fire.png') } resizeMode= 'contain' style = {{aspectRatio: 1,height:20, width: 20}}></Image>
                <Image source={require('../resources/fire.png') } resizeMode= 'contain' style = {{aspectRatio: 1,height:20, width:20}}></Image>
                <Image source={require('../resources/fire.png') } resizeMode= 'contain' style = {{aspectRatio: 1,height:20, width: 20}}></Image>
            </View>
            {/* Danh sách món ăn */}
            <View style = {{height: 0.45*windownHeight, width: '100%', flexDirection: 'column', alignItems: 'flex-start'}}>
                <View style = {{height: '100%', backgroundColor: 'white', width: 300, marginLeft: 15,  borderWidth: 1}}>
                    {/* Persional information*/}
                    <View style = {{flexDirection: 'row', marginLeft: 10, marginTop:4}}>
                        <Image source ={require('../resources/man.png')} resizeMode= 'contain' style = {{aspectRatio: 1,height:20, width: 20}}></Image>
                        <Text>Tài Nguyễn</Text>
                    </View>
                    {/* Hình ảnh món ăn*/}
                    <View style={{marginTop: 5,height: '60%', width: '100%'}}>
                        <Image source = {require('../resources/vitnuong.jpg') } resizeMode='cover' style = {{height: '100%', width: '100%'}}></Image>
                    </View>
                    {/*Tên món ăn*/}
                    <Text style = {{marginTop:10, marginLeft: 20, fontSize: 18, fontWeight: 'bold'}}>Vịt nướng</Text>
                    {/*Like và tim*/}
                    <View style = {{flexDirection: 'row',alignItems: 'center', marginLeft: 10, height: '18%'}}>
                        <Text style = {{alignItems: 'center', justifyContent: 'center', marginRight: 5, marginLeft:10, marginTop:13}}>93</Text>
                        <TouchableOpacity style ={{height:5, aspectRatio: 1, width:'10%', right:0}}>
                            <Image source={require('../resources/like.png') } resizeMode= 'contain' style = {{height:'100%', width: '100%'}}></Image>
                        </TouchableOpacity>
                        <Text style = {{alignItems: 'center', justifyContent: 'center', marginRight: 5, marginTop:13, marginLeft:10}}>279</Text>
                        <TouchableOpacity style ={{height:5, aspectRatio: 1, width:'10%',right:0, marginTop:6}}>
                            <Image source={require('../resources/thumbs-up.png') } resizeMode= 'contain' style = {{height:'100%', width: '100%'}}></Image>
                        </TouchableOpacity>
                    </View>
                    </View>                
            </View>
        </SafeAreaView>
        </View>
  );
}

export default Home;
