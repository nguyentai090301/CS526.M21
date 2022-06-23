import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from 'react-navigation';

import Login from './view/Login.js';
import ChiTiet from './view/chitietmonan';
import SignUp from './view/SignUp.js';
import TrangChu from './view/TrangChu';
import TimKiem from './view/TimKiem.js'; 
import KetQuaTimKiem from './view/KetQuaTimKiem.js'
import addnewfood from './view/addnewfood.js';
import editfood from './view/editfood.js';

const Stack = createNativeStackNavigator();
const MyStack = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'TrangChu' screenOptions={{headerShown: false}} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChiTiet" component={ChiTiet} />     
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="TrangChu" component={TrangChu} />
        <Stack.Screen name="TimKiem" component={TimKiem} />
        <Stack.Screen name="KetQuaTimKiem" component={KetQuaTimKiem} />
        <Stack.Screen name="addnewfood" component={addnewfood} />
        <Stack.Screen name="editfood" component={editfood} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const AppNavigator = createNativeStackNavigator(
//   {
//     TrangChu: TrangChu,
//     Login: Login,
//     SignUp: SignUp,
//     Chitiet: Chitiet,
//     TimKiem: TimKiem,
//     KetQuaTimKiem: KetQuaTimKiem,


//   },
//   {
//     initialRouteName: 'TrangChu',
//   }
// );
export default (MyStack);