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
                      <Text style={{fontWeight:'bold',fontSize:20}}>TH???T KHO TI??U ????N GI???N</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../resources/DauBep1.jpg')} style={{marginLeft:10,marginTop:10}}></Image>
                    <View>
                        <Text style={{paddingLeft:40,paddingTop:30,fontSize:20,fontWeight:'bold'}}> M??? Ch??u </Text>
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
                    <Text style={{fontSize:25,marginTop:20,fontWeight:'bold'}}> Nguy??n Li???u</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../resources/Icon1.png')} style={{marginTop:10,marginLeft:10}}></Image>
                        <Text style={{fontSize:20,marginTop:20,marginLeft:50}}> 2 - 3 ng?????i</Text>
                    </View> 
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:20,marginTop:20}}> Thit ba r???i (ai kh??ng l???y n???c c??ng ???????c)</Text>
                        <Text style={{fontSize:20,marginTop:20}}> Gia v???: ???????ng, Mu???i, N?????c M???m, Ti??u, N?????c L???c,B???t Ng???t, H???t N??m</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{fontSize:25,fontWeight:'bold'}}> C??ch L??m</ Text>
                        <FlatList
                          numColumns={2}
                          horizontal = {false}
                          data={
                            [
                              {key:'1', imgstep: images.step1, img1: images.buoc1,makefood:'C???t th???t theo mi???ng v???a ??n v?? ??em ?????p v???i c??c gia v??? ( 1 ??t ti??u, h???t n??m, ???????ng, n?????c, m???m, t???i, ???t) trong 15p ',img2:'../resources/ThitUop.png'},
                              {key:'2', imgstep: images.step2, img1: images.buoc2,makefood:'C???t t??u h?? ra mi???ng nh??? v???a ??n nh?? ',img2:'../resources/DauHu.png'},
                              {key:'3', imgstep: images.step3, img1: images.buoc3,makefood:'B???t n???i l??n cho ???????ng + 100ml n?????c v??o th???ng ????? c?? n?????c m??u n??u ?????p ',img2:'../resources/NuocMam.png'},
                              {key:'4', imgstep: images.step4, img1: images.buoc4,makefood:'Cho th???t v??o n???i, ?????o s?? cho th???t s??n l???i, sau ???? cho th??m t?? n?????c v??, n???u trong 15p cho th??m ti??u, h??nh v??, n??m th??m n?????c m???m v?? ???????ng cho ?????m ????, cu???i c??ng cho th??m t??u h?? ???? c???t v??. Ch??c c??c b???n th??nh c??ng ',img2:'../resources/ThitKhoTieu.jpg'},
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