import { Icon, withBadge } from "@rneui/base";
import React from "react";
import { Button, Input, ListItem, Image } from "@rneui/base"; 
import { View, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";

export default function HomeScrnHeader({navigation}){

const BadgeIcon = withBadge(0)(Icon)
    return(
        <View style = {styles.container} >
            <View style={{alignItems:'center', justifyContent:'center', marginLeft:15}}>
            <Icon 
                type="material-community"
                name="menu"
                color={'white'}
                size={32}
                onPress={() => {
                    navigation.toggleDrawer()
                }}
            />
            </View>
                <ImageBackground style={{alignItems:'center', justifyContent:'center'}}>
                    <View>
                        <Text style={styles.brand}>
                            Chop <Image source={require('../Home/cutlery.png') }
                        style={{height: 35, width: 35,
                        resizeMode: 'cover',tintColor: 'white' }} /> Beta
                        </Text>
                        
                        
                        
                    </View>
                </ImageBackground>
            <View style={{alignItems:'center', justifyContent:'center',marginRight:15}}>
            <BadgeIcon 
                type="material-community"
                name="cart"
                color={'white'}
                size={32}
            />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ed2424',
        height: 70,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    brand:{
        flexDirection: "row",
        fontSize: 35,
        color: 'white',
        
    },
})