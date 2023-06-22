import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native-animatable";
import Authen from "./authNavigation";

export default function RootNavigator(){
    return(
        <NavigationContainer>
            <Authen />
        </NavigationContainer>
    )
}