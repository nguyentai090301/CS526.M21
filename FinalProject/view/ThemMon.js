import React, {Component, useState} from 'react'
import { Text, View, StyleSheet,Button,Image,TouchableOpacity,StatusBar,FlatList,Dimensions,Alert,TextInput,ImageBackground,ScrollView,SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
const windownWidth = Dimensions.get('window').width;
const windownHeight= Dimensions.get('window').height;
const images = {
  step1 : require('../resources/1.png'),
  step2 : require('../resources/2.png'),
  step3 : require('../resources/3.png'),
  step4 : require('../resources/4.png')
}
export default function ThemMon({navigation}) {

    // tên món ăn, 
    // mô tả món ăn, 
    // sô lượng khẩu phần,
    // thời gian nấu,
    // nguyên liệu,
    // gia vị,
    // bước 1, 2, 3, 4 


    const [nameF, setNameF] = useState('');
    const [cpntent, setContent] = useState('');
    const [solu, setSolu] = useState('');
    const [time, setTime] = useState('');
   
    const [nglieu, setNglieu] = useState('');
    const [giavi, setGiavi] = useState('');

    const [f_step1, setf_step1] = useState('');
    const [f_step2, setf_step2] = useState('');
    const [f_step3, setf_step3] = useState('');
    const [f_step4, setf_step4] = useState('');




    const handleSave = ()=>{
        navigation.navigate('ChiTiet')
    }

    const handleChooseImg = ()=>{
        // navigation.navigate('themmon')

    }


  return(
    <View style={{flex:1,marginTop:24}}>
 
        {/* TOP NAVIGATION */}
        <View style={{height:60,backgroundColor:'white',flexDirection:'row', justifyContent: "space-between", padding:10, alignItems:'center'}}>
            <View style={{height:40,backgroundColor:'white',flexDirection:'row'}}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('TrangChu')}>
                    <Image source={require('../resources/back.png')}></Image>
                </TouchableOpacity>
            </View>

            <Button title='Save'
                onPress={handleSave}>
            </Button> 

        </View>

  {/*  SCROLL VIEW */}
        <ScrollView>

{/* view anh  */}
            <View style={{backgroundColor:'#EDE3AF'}} >

                <View style={{flexDirection:"column",height:200, justifyContent:"flex-end", backgroundColor:'#EDE3AF', alignItems:"center"}}>
                    <TouchableOpacity
                        onPress={handleChooseImg}>
                        <Image source={require('../resources/camera.png')} style={{width:0.2*windownWidth, height:0.1*windownHeight,borderRadius:20, resizeMode: 'contain', marginVertical:20}}></Image>

                    </TouchableOpacity>
                </View>
                
                {/* line  */}
                <View>
                    <Image source={require('../resources/Line.png')} style={{marginTop:20}}></Image>
                </View>
            </View>

{/* view ten mon va huowng dan */}
            <View style={{backgroundColor:'#EDE3AF'}}>


            {/* ten mon an */}
                <View style={{marginTop:0.10*windownWidth,alignItems:'center',width:0.9*windownWidth,marginHorizontal:18}}>
                    <Text style={{fontSize:25,marginTop:20,fontWeight:'bold'}}> Món ăn </Text>

                    <View style={styles.Text_in}>
                        <TextInput style={{fontSize:16, fontWeight:'bold'}} placeholder='Tên món ăn ' onChangeText={newText => setNameF(newText)} ></TextInput>      
                    </View>

                    <View style={styles.Text_in}>
                        <TextInput style={{fontSize:16, fontWeight:'bold'}} placeholder='Mô tả món ăn ' onChangeText={newText => setContent(newText)} ></TextInput>      
                    </View>

                    <View style={styles.Text_in}>
                        <TextInput style={{fontSize:16, fontWeight:'bold'}} placeholder='Khẩu phần ăn ' onChangeText={newText => setSolu(newText)} ></TextInput>      
                    </View>

                    <View style={styles.Text_in}>
                        <TextInput style={{fontSize:16, fontWeight:'bold'}} placeholder='Thời gian nấu ' onChangeText={newText => setTime(newText)} ></TextInput>      
                    </View>
                </View>


            {/* nguyen lieu  */}
                <View style={{marginTop:0.10*windownWidth,alignItems:'center',width:0.9*windownWidth,marginHorizontal:18}}>
                    
                    <Text style={{fontSize:25,marginTop:20,fontWeight:'bold'}}> Nguyên Liệu</Text>
                    
                    {/* nl  */}
                    <View style={styles.Text_in}>
                        <TextInput style={{fontSize:16, fontWeight:'bold'}} placeholder=' Nguyên liệu thô ' onChangeText={newText => setNglieu(newText)} ></TextInput>   
                    </View>
                
                    <View style={styles.Text_in}>
                        <TextInput style={{fontSize:16, fontWeight:'bold'}} placeholder=' Gia vị ' onChangeText={newText => setGiavi(newText)} ></TextInput>      
                    </View>

                </View>
                


            {/* Cach lam  */}
                    <View style={{marginTop:20, flexDirection:"column"}}>

                        <View style={{marginTop:0.10*windownWidth,alignItems:'center',width:0.9*windownWidth,marginHorizontal:18}}>
                            <Text style={{fontSize:25,fontWeight:'bold'}}> Cách Làm</ Text>

                        </View>

                        {/* Step1  */}
                        <View style={styles.Bound_step}>

                            <View style={styles.Bound_img}>
                                <Image source={images.step1} style={{width:0.2*windownWidth,height:0.2*windownHeight, resizeMode: 'contain'}}></Image>

                                <TouchableOpacity
                                    onPress={handleChooseImg}>
                                    <Image source={require('../resources/camera.png')} style={{width:0.2*windownWidth, height:0.1*windownHeight,borderRadius:20, resizeMode: 'contain'}}></Image>
                               </TouchableOpacity>
                            </View>

                            <View style={styles.content}>
                                <TextInput style={{fontSize:16, fontWeight:'bold'}} placeholder='Bước 1 ' onChangeText={newText => setf_step1(newText)} ></TextInput>      
                            </View>
                        </View>

                        {/* Step2  */}
                        <View style={styles.Bound_step}>

                            <View style={styles.Bound_img}>
                                <Image source={images.step2} style={{width:0.2*windownWidth,height:0.2*windownHeight, resizeMode: 'contain'}}></Image>

                                <TouchableOpacity
                                    onPress={handleChooseImg}>
                                    <Image source={require('../resources/camera.png')} style={{width:0.2*windownWidth, height:0.1*windownHeight,borderRadius:20, resizeMode: 'contain'}}></Image>
                               </TouchableOpacity>                            
                            </View>

                            <View style={styles.content}>
                                <TextInput style={{fontSize:16, fontWeight:'bold'}} placeholder='Bước 2 ' onChangeText={newText => setf_step2(newText)} ></TextInput>      
                            </View>
                        </View>

                        {/* Step3  */}
                        <View style={styles.Bound_step}>

                            <View style={styles.Bound_img}>
                                <Image source={images.step3} style={{width:0.2*windownWidth,height:0.2*windownHeight, resizeMode: 'contain'}}></Image>

                                <TouchableOpacity
                                    onPress={handleChooseImg}>
                                    <Image source={require('../resources/camera.png')} style={{width:0.2*windownWidth, height:0.1*windownHeight,borderRadius:20, resizeMode: 'contain'}}></Image>
                               </TouchableOpacity>
                            </View>

                            <View style={styles.content}>
                                <TextInput style={{fontSize:16, fontWeight:'bold'}} placeholder='Bước 3 ' onChangeText={newText => setf_step3(newText)} ></TextInput>      
                            </View>
                        </View>

                        {/* Step4  */}
                        <View style={styles.Bound_step}>

                            <View style={styles.Bound_img}>
                                <Image source={images.step4} style={{width:0.2*windownWidth,height:0.2*windownHeight, resizeMode: 'contain'}}></Image>
                                <TouchableOpacity
                                    onPress={handleChooseImg}>
                                    <Image source={require('../resources/camera.png')} style={{width:0.2*windownWidth, height:0.1*windownHeight,borderRadius:20, resizeMode: 'contain'}}></Image>
                               </TouchableOpacity>
                            </View>

                            <View style={styles.content}>
                                <TextInput style={{fontSize:16, fontWeight:'bold'}} placeholder='Bước 4 ' onChangeText={newText => setf_step4(newText)} ></TextInput>      
                            </View>
                        </View>

                    
                    </View>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

      Text_in:{
        flexDirection: 'row',
        backgroundColor:'#C0C0C0',
        width:'100%',
        height:80,
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:20,
        marginVertical:10,
        justifyContent:"center",
      },
      content:{
        flexDirection: 'row',
        backgroundColor:'#C0C0C0',
        width:'75%',
        height:150,
        paddingVertical:10,
        paddingHorizontal:10,
        justifyContent:"center",
        borderRadius:20
      },
      Bound_step:{
        width:"95%", 
        flexDirection:'row' ,
        alignItems:"center", 
        justifyContent:"space-between",
        marginVertical:25,
        marginHorizontal:10
    },
    Bound_img:{
        flexDirection:"column",
        marginRight:5,
        justifyContent:"space-around",
        height:150
    },
    Text_v:{
        width:"100%",
        fontSize:16,
        fontWeight:'bold',
    }
      
  });