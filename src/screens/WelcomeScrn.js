import React, { useState} from "react";
import {Text, ScrollView, Dimensions, View,StyleSheet, ImageBackground,TextInput, TouchableOpacity} from 'react-native';
import Swiper from "react-native-swiper";
import { Button, Input, ListItem, Image, color } from "@rneui/base"; 


export default function WelcomeScrn({ navigation}){
    return(
        <View style={{ flex:1}}>
            <View style={{flex:3, justifyContent:'flex-start', alignItems:'center', marginTop: 30, paddingTop:20}}>
                <Text style={{fontSize:20, color:'#ed2424', fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize:20, color:'#ed2424', fontWeight:'bold'}}>IN YOUR AREA</Text>
            </View>
            <View style={{flex:6, justifyContent:'center'}}>
                <Swiper autoplay = {true}>
                    <View style={styles.slide1}>
                        <Image 
                            source={require('../images/img1.jpg')}  
                            style = {{flex: 1,  height: 290, width: 395, resizeMode: 'cover'  }}
                        />
                        
                    </View>
                    <View style={styles.slide2}>
                        <Image 
                            source={require('../images/img2.jpg')}  
                            style = {{flex: 1,  height: 290, width: 395, resizeMode: 'cover'  }}
                        />
                        
                    </View>
                    <View style={styles.slide3}>
                        <Image 
                            source={require('../images/img3.png')}  
                            style = {{flex: 1,  height: 290, width: 395, resizeMode: 'cover'  }}
                        />
                        
                    </View>
                    <View style={styles.slide4}>
                        
                        <Image 
                            source={require('../images/img4.png')}  
                            style = {{flex: 1,  height: 290, width: 395, resizeMode: 'cover'  }}
                        />
                        
                        
                    </View>
                    <View style={styles.slide5}>
                        <Image 
                            source={require('../images/img5.png')}  
                            style = {{flex: 1,  height: 290, width: 395, resizeMode: 'cover'  }}
                        />
                        
                    </View>
                </Swiper>
            </View>
            <View style = {{flex:4, justifyContent:'flex-end', marginHorizontal:20}}>
                <TouchableOpacity style={styles.SignUpbtn } activeOpacity={0.8} onPress={() => {navigation.navigate("Login")}} >
                    <Text style={{color: 'white',fontSize: 16 }}> Sign-In </Text>
                </TouchableOpacity>
            
            </View>
            <View style = {{ justifyContent:'flex-end', marginHorizontal:20}}>
                <TouchableOpacity style={styles.createbtn } activeOpacity={0.8}  onPress={() => navigation.push('SignUp')}  >
                    <Text style={{color: '#3b3939',fontSize: 16, fontWeight:600 }}> Create Account </Text>
                </TouchableOpacity>
            
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    slide1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7ccce8',
        
        
        
    },
    slide2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide4:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide5:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SignUpbtn:{
        alignSelf: 'center',
        backgroundColor: '#ed2424',
        width: Dimensions.get('window').width -30,
        borderRadius: 15,
        height: 40,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        
        
        
    },
    createbtn:{
        alignSelf: 'center',
        backgroundColor: 'white',
        width: Dimensions.get('window').width -30,
        borderRadius: 15,
        height: 40,
        
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: '#ed2424',
        borderWidth:1
        
        
    },
});