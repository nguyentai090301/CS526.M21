import React, {Component, useState} from 'react'
import { Text, View, StyleSheet,Button,Image,TouchableOpacity,StatusBar,FlatList,Dimensions,Alert,TextInput,ImageBackground,ScrollView,SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
const windownWidth = Dimensions.get('window').width;
const windownHeight= Dimensions.get('window').height;


import { Card } from 'react-native-paper';
export default function ChiTiet({navigation}) {
  return(
    <View style={{flex:1, backgroundColor: '#EDE3AF'}}>
      <View>
        <TouchableOpacity
        onPress={() => navigation.pop()}
        >
          <Text>Quay lại</Text>
        </TouchableOpacity>
      </View>
        <View style={{height:'30%',backgroundColor:'#EDE3AF',flexDirection:'row'}}>
            <Image style={{height:'100%',width:'100%'}} source={require('../resources//ThitKhoTieu.jpg')}></Image>
        </View>
        <ScrollView>
        <View style={{backgroundColor:'#EDE3AF'}} >
                <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                      <Text style={{fontWeight:'bold',fontSize:20}}>THỊT KHO TIÊU ĐƠN GIẢN</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../resources//DauBep1.jpg')} style={{marginLeft:10,marginTop:10}}></Image>
                    <View>
                        <Text style={{paddingLeft:40,paddingTop:30,fontSize:20,fontWeight:'bold'}}> Lâm Võ </Text>
                        <Text  style={{paddingLeft:40,fontSize:20}}>@cook_24683579 </Text>
                    </View>
                </View>
                <View>
                    <Image source={require('../resources//Line.png')} style={{marginTop:20}}></Image>
                </View>
        </View>
        <View style={{backgroundColor:'#EDE3AF'}}>
                <View style={{flexDirection:'row'}}>
                  <Image source={require('../resources//clock.png')} style={{marginTop:10,marginLeft:95}}></Image>
                  <View style={{marginTop:25}}>
                    <Text style={{fontSize:25}}> 30p</Text>
                  </View>
                </View>
                <View >
                    <Text style={{fontSize:25,marginTop:20,fontWeight:'bold'}}> Nguyên Liệu</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../resources//Icon1.png')} style={{marginTop:10,marginLeft:10}}></Image>
                        <Text style={{fontSize:20,marginTop:20,marginLeft:50}}> 2 - 3 người</Text>
                    </View> 
                    <View>
                        <Text style={{fontSize:20,marginTop:20}}> Thit ba rọi (ai không lấy nạc cũng được)</Text>
                        <Text style={{fontSize:20,marginTop:20}}> Gia vị: Đường, Muối, Nước Mắm, Tiêu, Nước Lọc,Bột Ngọt, Hạt Nêm</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{fontSize:25,fontWeight:'bold'}}> Cách Làm</ Text>
                        <FlatList
                          data={
                            [
                              {key:'1',img1:'../resources//1.png',makefood:'Cắt thịt theo miếng vừa ăn và đem ướp với các gia vị ( 1 ít tiêu, hạt nêm, đường, nước, mắm, tỏi, ớt) trong 15p ',img2:'../resources//ThitUop.png'},
                              {key:'2',img1:'../resources//2.png',makefood:'Cắt tàu hũ ra miếng nhỏ vừa ăn nhé ',img2:'../resources//DauHu.png'},
                              {key:'3',img1:'../resources//3.png',makefood:'Bắt nồi lên cho đường + 100ml nước vào thẳng để có nước màu nâu đẹp ',img2:'../resources//NuocMam.png'},
                              {key:'4',img1:'../resources//4.png',makefood:'Cho thịt vào nồi, đảo sơ cho thịt săn lại, sau đó cho thêm tí nước vô, nấu trong 15p cho thêm tiêu, hành vô, nêm thêm nước mắm và đường cho đậm đà, cuối cùng cho thêm tàu hũ đã cắt vô. Chúc các bạn thành công ',img2:'../resources//ThitKhoTieu.png'},
                            ]
                          }
                          renderItem={({item}) => 
                          <View>
                            <View style={{marginTop:20,flexDirection:'row', marginRight:30}}>
                                  <Image source={require('../resources//2.png')}></Image>
                                  <Text style={{fontSize:20}}>{item.makefood}</Text>
                            </View>
                            <View>
                             <Image source={require('../resources//DauHu.jpg')} style={{width:'80%',height:200,marginHorizontal:40,borderRadius:20,marginTop:10}}></Image>
                            </View>

                          </View>
                            
                           
                           }
                        />
                    </View>
                </View>
          </View>
        </ScrollView>
    </View>
  )
}