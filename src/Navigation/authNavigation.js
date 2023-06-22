import React from "react";
import { createNativeStackNavigator, TransitionPresets } from "@react-navigation/native-stack";
import WelcomeScrn from "../screens/WelcomeScrn";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

import DrawerNav from "./DrawerNav";

const Auth = createNativeStackNavigator();

export default function Authen(){
    return(
        <Auth.Navigator initialRouteName="WelcomeScrn">
            <Auth.Screen 
            name ="Welcome"
            component={WelcomeScrn}
            options={{headerShown: false}}
            
            />
            <Auth.Screen 
            name ="Login"
            component={Login}
            options={{headerShown: false}}
            />
            <Auth.Screen 
            name ="DrawerNav"
            component={DrawerNav}
            options={{headerShown: false}}
            />
            
        </Auth.Navigator>
    )
}