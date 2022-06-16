import React, {Component, useState} from 'react'
import { Text, View, StyleSheet,Button,Image,TouchableOpacity,StatusBar,FlatList,Dimensions,Alert,TextInput } from 'react-native';
const windownWidth = Dimensions.get('window').width;
const windownHeight= Dimensions.get('window').height;

export default function KetQuaTimKiem({navigation}) {
  return (
    <View style={{flex: 1,backgroundColor:'#EDE3AF'}}>
      <View style= {{position: 'absolute'}}>
        <TouchableOpacity
        onPress={()=> navigation.navigate('TrangChu')}
        >
          <Image source={require('../resources/back.png') } ></Image>
        </TouchableOpacity>
      </View>
        {/* Tim kiem*/}
            <View style = {{height:30, width: "100%", alignItems: 'center', marginTop:0.04*windownHeight, flexDirection: 'row' }}>
                <View style = {{height:40, width: "90%", alignItems: 'center', marginTop:0.07*windownHeight, flexDirection: 'row',backgroundColor:'white',marginHorizontal:15,borderRadius:20}}>  
            <TouchableOpacity style ={{height:"100%", aspectRatio: 1, position: 'absolute', paddingRight: 20, right:0}}>
                    <Image source={require('../resources/research1.png')} style={{width:'60%',height:'60%',paddingRight:30,marginTop:8}}></Image>
            </TouchableOpacity> 
                  <TextInput placeholder='Bạn đang tìm kiếm món nào...' style ={{height: '100%',     textAlign:'left',paddingLeft: 40, marginLeft:20, width: "80%",color:'black'}}></TextInput>      
                </View>
          </View>
          <View style={{flexDirection:'row', marginBottom: 20}}>  
                  <Image source={require('../resources/Icon2.png')} style={{width:'10%',height:'35%',marginLeft:10,marginTop:60}}></Image>
                   <View style={{marginTop: 0.08*windownHeight,justifyContent: "center",alignItems:'center'}}>
                       <Text style={{fontSize:17,fontWeight:'bold',marginLeft:20}}>Món Thịt Kho Tiêu Đã Kiểm Chứng</Text>
                  </View>
          </View>  
          <View>
        <FlatList
          data={
            [ 
              {key:'1',heading:'Thịt kho tiêu đơn giản',img1:'../resources/Icon3.png',namecook:'A Phủ',heading1:'Thịt ba rọi, Gia vị: đường, muối tiêu, hạt nêm, nước màu, nước mắm ',img2:'../resources/ThitHeo1.png'},
              {key:'2',heading:'Thịt kho tiêu đơn giản',img1:'../resources/Icon3.png',namecook:'Mị',heading1:'Thịt ba rọi thật ngon',img2:'../resources/ThitHeo1.png'},
              {key:'3',heading:'Thịt kho tiêu đơn giản',img1:'../resources/Icon3.png',namecook:'Công Chúa Thủy Tề',heading1:'Thịt ba chỉ ít mỡ, Gia vị: đường, muối tiêu, hạt nêm, nước màu, nước mắm ',img2:'../resources/ThitHeo1.png'},
              {key:'4',heading:'Thịt kho tiêu đơn giản',img1:'../resources/Icon3.png',namecook:'Tùng Trọc',heading1:'Thịt ba rọi, Gia vị: đường, muối tiêu, hạt nêm, nước màu, nước mắm ',img2:'../resources/ThitHeo1.png'},
            ]
          }
           renderItem={({item}) =>    
            <View style={{backgroundColor:'white',marginHorizontal:10, height:430,borderRadius:15, marginTop: 10}}>
                    <Text style={{marginTop:10,fontSize:20,fontWeight:'bold',marginLeft:20}}> Thịt kho tiêu đơn giản</Text> 
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('../resources/chef2.png')} style={{marginLeft:10,marginTop:15}}></Image>
                            <Text style={{fontSize:20,marginLeft:30,marginTop:30, fontWeight: 'bold'}}>{item.namecook}</Text>
                        </View>
                        <Text style={{fontSize:20,marginTop:20,marginHorizontal:20}}>{item.heading1}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('ChiTiet')}

                        >
                          <Image source ={require('../resources/ThitKhoTieu.jpg')}  style = {{alignContent: 'center',resizeMode: 'contain',height:200,width: windownWidth,marginTop:20,borderRadius:20}}></Image>
                        </TouchableOpacity>
                        </View>
                    </View> 
            </View>
           }
           />
      </View>
  </View>
  );
}