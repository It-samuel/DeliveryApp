import React, { useState} from "react";
import {Text, ScrollView, Dimensions, View,StyleSheet, ImageBackground,TextInput, TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements';

import {colors } from '../global/styles'
import { Button, Input, ListItem, Image } from "@rneui/base"; 
import Terms from "../global/Terms";



export default function SignUp({navigation}){
    return(
        <View style={{flex:1, color: 'white', bottom: 40}}>
            <ImageBackground style= {styles.skin}>
            <View>
                <Text style={styles.brand}>
                    Chop  <Image source={require('../global/icons/cutlery.png') }
                        style={{height: 35, width: 35,
                        resizeMode: 'contain',tintColor: 'white' }} />  Beta
                </Text>
                <Text style={{color: 'white'}}> From Kitchen to You, A Culinary Journey!</Text>
                
                
            </View>

            </ImageBackground>
            <View style={styles.bottomView}>
            <Text style={{color:'#ed2424', fontSize: 35, marginTop: 20, alignSelf: 'center'}}>Create An Account</Text>
                    
                    <View style={{marginTop:50}}>
                        <TextInput 
                        placeholder="Username"
                        style={styles.textInput}
                        underlineColorAndroid={'transparent'}
                        />
                        <TextInput 
                        placeholder="Full-name"
                        style={styles.textInput}
                        underlineColorAndroid={'transparent'}
                        
                        />
                        <TextInput 
                        placeholder="Email"
                        style={styles.textInput}
                        underlineColorAndroid={'transparent'}
                        />
                        <TextInput 
                        placeholder="Password"
                        style={styles.textInput}
                        underlineColorAndroid={'transparent'}
                        />
                        <Terms />
                        <TouchableOpacity style={styles.SignUpbtn} activeOpacity={0.8}>
                            <Text style={{color: 'white',fontSize: 16 }}> SignUp </Text>
                        </TouchableOpacity>
                        <Text style={{alignSelf: 'center', marginTop:15}}>
                            Already have an account? {'   '}
                            <TouchableOpacity   onPress={() => navigation.navigate('DrawerNav')}  activeOpacity={0.8}>
                            <Text style={{fontWeight: 'bold', color: '#0778b5'}}>Login</Text>
                            </TouchableOpacity>
                            
                        </Text>
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
        
        fontFamily: ''
        
    },
    bottomView:{
        
        backgroundColor:'white',
        bottom: 55,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
        
    },
    textInput:{
        borderBottomColor: 'red',
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        color: 'black',
        height: 30,
        marginBottom: 25,
        fontSize: 15,
        alignSelf: 'center',
        width: Dimensions.get('window').width - 30,

    },
    SignUpbtn:{
        alignSelf: 'center',
        backgroundColor: '#ed2424',
        width: Dimensions.get('window').width / 2,
        borderRadius: 15,
        height: 40,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        
        
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    checkboxContainer: {
        margin: 0,
        padding: 0,
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
    },

})


export const TermsAndConditions = () => {
    const [isAgreed, setIsAgreed] = useState(false);

    const handleAgree = () => {
      setIsAgreed(!isAgreed);
    };
};
