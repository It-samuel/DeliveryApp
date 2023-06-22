import React from "react";
import {View, Text, StyleSheet} from "react-native";
import SearchComponent from "../components/SearchComponent";
import { colors } from "../global/styles";


export default function SearchScreen(){
    return(
        <View style={{marginHorizontal:10}}>
            <SearchComponent />
        </View>
    )
}