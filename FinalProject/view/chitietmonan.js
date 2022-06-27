import React, {Component, useState} from 'react'
import { Text, View, StyleSheet,Button,Image,TouchableOpacity,StatusBar,FlatList,Dimensions,Alert,TextInput,ImageBackground,ScrollView,SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
const windownWidth = Dimensions.get('window').width;
const windownHeight= Dimensions.get('window').height;
const images = {
  buoc1: require('../resources/ThitUop.jpg'),
  buoc2 : require('../resources/DauHu.jpg'),
  buoc3 : require('../resources/thangduong.jpg'),
  buoc4: require('../resources/ketqua.jpg'),
  buoc5 : require('../resources/CaTim.png'),
  step1 : require('../resources/1.png'),
  step2 : require('../resources/2.png'),
  step3 : require('../resources/3.png'),
  step4 : require('../resources/4.png')
}
export default function ChiTiet({navigation}) {

  // function to handel edit or delete food 
  const handleEdit = ()=>{
    navigation.navigate('SuaMon')
  }

  const handleDelete = ()=>{
    // navigation.navigate('chitiet')
  }

  return(
    <View style={{flex:1}}>

      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        {/* button back  */}
        <View>
          <TouchableOpacity
          onPress={()=>navigation.navigate('TrangChu')}>
            <Image source={require('../resources/back.png')} style={{width:0.1*windownWidth, height:0.05*windownHeight,borderRadius:10, resizeMode: "contain", marginVertical:10, marginHorizontal:5}} ></Image>
          </TouchableOpacity>
        </View>

        <View  style={{flexDirection:"row", justifyContent:"space-between"}}>
          {/* button edit  */}
          <View>
            <TouchableOpacity
            onPress={handleEdit}>
              <Image source={require('../resources/edit.png')} style={{width:0.1*windownWidth, height:0.05*windownHeight,borderRadius:10, resizeMode: "contain", marginVertical:10, marginHorizontal:5}}></Image>
            </TouchableOpacity>
          </View>
            {/* button delete  */}
          <View>
            <TouchableOpacity
            onPress={handleDelete}>
              <Image source={require('../resources/bin.png')} style={{width:0.1*windownWidth, height:0.05*windownHeight,borderRadius:10, resizeMode: 'contain', marginVertical:10, marginHorizontal:5}}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>

        <View style={{height:0.3*windownHeight,backgroundColor:'white',flexDirection:'row'}}>
            <Image style={{height:0.3*windownHeight,width:windownWidth}} source={require('../resources/ThitKhoTieu.jpg')}></Image>
        </View>
        <ScrollView>
        <View style={{backgroundColor:'#EDE3AF'}} >
                <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                      <Text style={{fontWeight:'bold',fontSize:20}}>THỊT KHO TIÊU ĐƠN GIẢN</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../resources/DauBep1.jpg')} style={{marginLeft:10,marginTop:10}}></Image>
                    <View>
                        <Text style={{paddingLeft:40,paddingTop:30,fontSize:20,fontWeight:'bold'}}> Mị Châu </Text>
                        <Text  style={{paddingLeft:40,fontSize:20}}>@cook_24683579 </Text>
                    </View>
                </View>
                <View>
                    <Image source={require('../resources/Line.png')} style={{marginTop:20}}></Image>
                </View>
        </View>
        <View style={{backgroundColor:'#EDE3AF'}}>
                <View style={{flexDirection:'row'}}>
                  <Image source={require('../resources/clock.png')} style={{marginTop:10,marginLeft:95}}></Image>
                  <View style={{marginTop:25}}>
                    <Text style={{fontSize:25}}> 30p</Text>
                  </View>
                </View>
                <View >
                    <Text style={{fontSize:25,marginTop:20,fontWeight:'bold'}}> Nguyên Liệu</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../resources/Icon1.png')} style={{marginTop:10,marginLeft:10}}></Image>
                        <Text style={{fontSize:20,marginTop:20,marginLeft:50}}> 2 - 3 người</Text>
                    </View> 
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:20,marginTop:20}}> Thit ba rọi (ai không lấy nạc cũng được)</Text>
                        <Text style={{fontSize:20,marginTop:20}}> Gia vị: Đường, Muối, Nước Mắm, Tiêu, Nước Lọc,Bột Ngọt, Hạt Nêm</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{fontSize:25,fontWeight:'bold'}}> Cách Làm</ Text>
                        <FlatList
                          numColumns={2}
                          horizontal = {false}
                          data={
                            [
                              {key:'1', imgstep: images.step1, img1: images.buoc1,makefood:'Cắt thịt theo miếng vừa ăn và đem ướp với các gia vị ( 1 ít tiêu, hạt nêm, đường, nước, mắm, tỏi, ớt) trong 15p ',img2:'../resources/ThitUop.png'},
                              {key:'2', imgstep: images.step2, img1: images.buoc2,makefood:'Cắt tàu hũ ra miếng nhỏ vừa ăn nhé ',img2:'../resources/DauHu.png'},
                              {key:'3', imgstep: images.step3, img1: images.buoc3,makefood:'Bắt nồi lên cho đường + 100ml nước vào thẳng để có nước màu nâu đẹp ',img2:'../resources/NuocMam.png'},
                              {key:'4', imgstep: images.step4, img1: images.buoc4,makefood:'Cho thịt vào nồi, đảo sơ cho thịt săn lại, sau đó cho thêm tí nước vô, nấu trong 15p cho thêm tiêu, hành vô, nêm thêm nước mắm và đường cho đậm đà, cuối cùng cho thêm tàu hũ đã cắt vô. Chúc các bạn thành công ',img2:'../resources/ThitKhoTieu.jpg'},
                            ]
                          }
                          renderItem={({item}) => 
                            <View>
                              <View style={{marginTop:20,flexDirection:'row', marginRight:30}}>
                                    <Image source={item.imgstep}></Image>
                                    <Text style={{fontSize:20,marginRight:30}}>{item.makefood}</Text>
                              </View>
                              <View>
                              <Image source={item.img1} style={{width:0.8*windownWidth,height:0.3*windownHeight,marginHorizontal:40,borderRadius:20,marginTop:10}}></Image>
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