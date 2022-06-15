import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from "./view/Login";
const Project= createStackNavigator({
    Login: {
   screen: Login
  },
});
export default createAppContainer(Project);
