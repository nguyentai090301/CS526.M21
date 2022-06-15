import React, {Component, useState} from 'react'
import { Text, View, StyleSheet,Button,Image,TouchableOpacity,StatusBar,FlatList,Dimensions,Alert,TextInput } from 'react-native';
import Constants from 'expo-constants';
const windownWidth = Dimensions.get('window').width;
const windownHeight= Dimensions.get('window').height;


import { Card } from 'react-native-paper';

export default function App() {
  return (
       <View style ={{height: '100%', width: '100%', backgroundColor: '#EDE3AF'}}>           
            {/* Tim kiem*/}
            <View style = {{height:40, width: "90%", alignItems: 'center', marginTop:0.07*windownHeight, flexDirection: 'row',backgroundColor:'white',marginHorizontal:15,borderRadius:20}}>  
            <TouchableOpacity style ={{height:"100%", aspectRatio: 1, position: 'absolute', paddingRight: 20, right:0}}>
                    <Image source={require('../resources/research1.png')} style={{width:'60%',height:'60%',paddingRight:30,marginTop:8}}></Image>
            </TouchableOpacity> 
                  <TextInput placeholder='Bạn đang tìm kiếm món nào...' style ={{height: '100%',     textAlign:'left',paddingLeft: 40, marginLeft:20, width: "80%",color:'black'}}></TextInput>      
            </View>
            <View style={{marginTop: 0.02*windownHeight,justifyContent: "center",alignItems:'center'}}>
                  <Text style={{fontSize:17,fontWeight:'bold'}}>MÓN TÌM KIẾM PHỔ BIẾN HÔM NAY</Text>
            </View>
            <FlatList
              numColumns= {2}
              data={
                [
                  {key:'1',namefood: 'Gà 1', source: require('../resources/UcGa.png')},
                  {key:'2',namefood: 'Gà 2', source: require('../resources/UcGa.png')},
                  {key:'3',namefood: 'Gà 3', source: require('../resources/UcGa.png')},
                  {key:'4',namefood: 'Gà 4 ', source: require('../resources/UcGa.png')},
                  {key:'5',namefood: 'Gà 5', source: require('../resources/UcGa.png')},
                  {key:'6',namefood: 'Gà 6', source: require('../resources/UcGa.png')},
                  {key:'7',namefood: 'Gà 7', source: require('../resources/UcGa.png')},
                  {key:'8',namefood: 'Gà 8', source: require('../resources/UcGa.png')},  
                  {key:'9',namefood: 'Gà 9', source: require('../resources/UcGa.png')},   
                  {key:'10',namefood: 'Gà 10', source: require('../resources/UcGa.png')},   

                  {key:'11',namefood: 'Gà 11', source: require('../resources/UcGa.png')},   
                  {key:'12',namefood: 'Gà 12', source: require('../resources/UcGa.png')},   
                  {key:'13',namefood: 'Gà 13', source: require('../resources/UcGa.png')},   
                  {key:'14',namefood: 'Gà 14', source: require('../resources/UcGa.png')},   

                ]
              }
              renderItem={({item}) => 
               <View style={{height: 0.2*windownHeight, width: '50%', flexDirection: 'column', marginTop:20}}>
                  <View style ={{flexDirection: 'row', alignItems:'center', marginTop:50, height: 0.06*windownHeight, width: 0.8*windownWidth, marginHorizontal: '10%'}}>
                    <TouchableOpacity>
                      <View>
                        <Image source={require('../resources/UcGa.png')} resizeMode = 'cover'  style ={{width: windownWidth*0.40, height: windownHeight*0.20, borderRadius:20}}>
                        </Image>
                        <Text style={{marginTop:-25,marginLeft:25,fontSize:18,color:'#FFFFFF'}}> {item.namefood}</Text>
                      </View>
                    </TouchableOpacity>

                  </View>
               </View> 
               }
            />    
        </View>
  );
}