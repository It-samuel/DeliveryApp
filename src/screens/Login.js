import React from "react";
import {Text, ScrollView, Dimensions, View,StyleSheet, ImageBackground} from 'react-native';

import {colors } from '../global/styles'
import { Button, Input, ListItem, Image } from "@rneui/base"; 
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import {Icon, SocialIcon} from 'react-native-elements';
import fonts from '../assets/fonts'

export default function Login({navigation}){
    return(
        <View style={{flex:1, color: 'white', bottom: 40}}>
            <ImageBackground style= {styles.skin}>
            <View>
                <Text style={styles.brand}>
                    Chop <Image source={require('../global/icons/cutlery.png') }
                        style={{height: 35, width: 35,
                        resizeMode: 'stretch',tintColor: 'white' }} /> Beta
                </Text>
                <Text style={{color: 'white'}}> From Kitchen to You, A Culinary Journey!</Text>
                
                
            </View>

            </ImageBackground>
            <View style={styles.bottomView}>
                <View style={{padding: 40}}>
                    <Text style={{color:'#ed2424', fontSize: 35}}>Welcome</Text>
                    <Text style={{marginTop:6, paddingLeft: 25}}>Don't have an account?
                    <TouchableOpacity  onPress={() => navigation.push('SignUp')}  activeOpacity={0.8}>
                    <Text style={{color:'#ed2424', fontStyle: 'italic'}} > {'   '} Register now</Text>
                    </TouchableOpacity>
                        
                    </Text>
                    <View style={{marginTop:50}}>
                        <TextInput 
                        placeholder="Enter your Email"
                        style={styles.textInput}
                        underlineColorAndroid={'transparent'}
                        />
                        <TextInput 
                        placeholder="Password"
                        style={styles.textInput}
                        underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <View style={styles.forgotPass}>
                        <Text style={{fontWeight: 'bold', color: '#0778b5'}}> Forgot Password</Text>
                    </View>
                    <View style={{
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity style={styles.loginbtn}  onPress={() => navigation.navigate('DrawerNav')}   activeOpacity={0.8}>
                            <Text style={{color: 'white',fontSize: 16 }}> Login</Text>
                        </TouchableOpacity>
                        <Text style={{bottom: 23}}> or {' '}  Login with</Text>
                    </View>
                    <View style={styles.socialBtn} >
                        <SocialIcon 
                            type="facebook"
                            
                        />
                        <SocialIcon 
                            type="google"
                            
                        />
                    </View>
                </View>
            </View>
        
        </View>
        
    )
}


const styles = StyleSheet.create({
    skin:{
        backgroundColor: colors.buttons,
        height: Dimensions.get("window").height / 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 100, 
        
    },
    brand:{
        flexDirection: "row",
        fontSize: 40,
        color: 'white',
        
        fontFamily: "Lobster"
        
    },
    bottomView:{
        
        backgroundColor:'white',
        bottom: 55,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
        
    },
    textInput:{
        borderBottomColor: 'red',
        alignSelf: "stretch",
        borderBottomWidth: 1,
        color: 'black',
        height: 30,
        marginBottom: 25,
    },
    forgotPass:{
        height: 50,
        marginTop: 20,
        alignSelf: 'flex-end',
        bottom: 16
    },
    loginbtn:{
        alignSelf: 'center',
        backgroundColor: '#ed2424',
        width: Dimensions.get('window').width / 2,
        borderRadius: 15,
        height: 40,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 38,
        
    },
    socialBtn:{
        borderRadius: 50,
        alignSelf: 'center', 
        flexDirection: 'row',
        bottom: 27
    }
})