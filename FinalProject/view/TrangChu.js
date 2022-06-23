import React, {Component, useState} from 'react'
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import {FlatList, StyleSheet, Text, TextInput, View, Button, Image, SafeAreaView, Alert,TouchableOpacity,StatusBar, Dimensions} from 'react-native'
const windownWidth = Dimensions.get('window').width;

import { FAB } from 'react-native-elements';
const windownHeight= Dimensions.get('window').height;
import firebaseApp from '../Components/FirebaseConfig.js'

const images = {
    imgthitkhotieu: require('../resources/ThitKhoTieu.jpg'),
    imgvitnuong : require('../resources/vitnuong.jpg'),
    imgganuonglu : require('../resources/UcGa.png'),
    imgcakhoto: require('../resources/Ca.png'),
    imgcatimnuongmohanh : require('../resources/CaTim.png'),
}
const TrangChu = ({navigation}) => {
    const [monan, setmonan] = useState('MonAn');
    
    return (
          <View style ={{height: '100%', width: '100%', backgroundColor: '#EDE3AF'}}> 
        <StatusBar barStyle = 'dark-content'/>            
            {/* Tim kiem*/}
            <View style = {{height:30, width: "100%", alignItems: 'center', marginTop:0.02*windownHeight, flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('KetQuaTimKiem')}} style ={{height:"100%", aspectRatio: 1, width:'10%', position: 'absolute', paddingRight: 20, right:0}}>
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
        <FlatList
            horizontal
            
            data = {
            [
                {key: '1', nameFood: 'Vịt nướng',namePersion: 'A Phủ', imgPersion: '../resources/man.png' ,imgFood : images.imgvitnuong, numLike: 15, numLove: 20},
                {key: '2', nameFood: 'Thịt Kho Tiêu',namePersion: 'Mị Châu', imgPersion: '../resources/man.png' ,imgFood : images.imgthitkhotieu, numLike: 213, numLove: 50 },
                {key: '3', nameFood: 'Gà Nướng Lu',namePersion: 'Vợ A Phủ', imgPersion: '../resources/man.png' ,imgFood : images.imgganuonglu,  numLike: 234, numLove: 232 },
                {key: '4', nameFood: 'Cà Tím nướng mỡ hành',namePersion: 'Mị Nương', imgPersion: '../resources/man.png' ,imgFood : images.imgcatimnuongmohanh,  numLike: 321, numLove: 112 },
                {key: '5', nameFood: 'Cá Kho Tộ',namePersion: 'Chồng Mị Nương', imgPersion: '../resources/man.png' ,imgFood : images.imgcakhoto,  numLike: 23, numLove: 1 },
            ]
        }
          renderItem={({item}) => 
          <View style = {{height: 0.45*windownHeight, width: windownWidth*0.75, flexDirection: 'column'}}>
                    <View style = {{height: '100%', backgroundColor: 'white', width: 300, borderRadius: 15}}>
                        {/* Persional information*/}
                        <View style = {{flexDirection: 'row', marginLeft: 10, marginTop:4}}>
                            <Image source ={require('../resources/man.png')} resizeMode= 'contain' style = {{aspectRatio: 1,height:20, width: 20}}></Image>
                            <Text>{item.namePersion}</Text>
                        </View>
                        {/* Hình ảnh món ăn*/}
                        <View style={{marginTop: 5,height: '60%', width: '100%'}}>
                            <TouchableOpacity
                            onPress={() => navigation.navigate('ChiTiet')}
                            >
                                <Image source = {item.imgFood} resizeMode='cover' style = {{height: '100%', width: '100%'}}></Image>

                            </TouchableOpacity>
                        </View>
                        {/*Tên món ăn*/}
                        <Text style = {{marginTop:10, marginLeft: 20, fontSize: 18, fontWeight: 'bold'}}>{item.nameFood}</Text>
                        {/*Like và tim*/}
                        <View style = {{flexDirection: 'row',alignItems: 'center', marginLeft: 10, height: '18%'}}>
                            <Text style = {{alignItems: 'center', justifyContent: 'center', marginRight: 5, marginLeft:10, marginTop:13}}>{item.numLike}</Text>
                            <TouchableOpacity style ={{height:5, aspectRatio: 1, width:'10%', right:0}}>
                                <Image source={require('../resources/like.png') } resizeMode= 'contain' style = {{height:'100%', width: '100%'}}></Image>
                            </TouchableOpacity>
                            <Text style = {{alignItems: 'center', justifyContent: 'center', marginRight: 5, marginTop:13, marginLeft:10}}>{item.numLove}</Text>
                            <TouchableOpacity style ={{height:5, aspectRatio: 1, width:'10%',right:0, marginTop:6}}>
                                <Image source={require('../resources/thumbs-up.png') } resizeMode= 'contain' style = {{height:'100%', width: '100%'}}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>  
                </View>
                
                    
            }
            
                
        />
    <TouchableOpacity
        style={{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 100,
        }}
        onPress={()=>navigation.navigate('addnewfood')}
    >
        <Image source={require('../resources/plus.png')}></Image>
    </TouchableOpacity>
        </View>
        );

  }
  
  export default TrangChu;
