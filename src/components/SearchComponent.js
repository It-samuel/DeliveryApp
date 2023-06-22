import React, {useState, useRef} from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback,Modal, TextInput, FlatList, Keyboard} from "react-native";
import { colors } from "../global/styles";
import { Icon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { filterData } from "../global/Data";


export default function SearchComponent(){
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFocussed, setTextInputFocussed] = useState(true)
    const textInput = useState(0)
    const [data, setData] = useState([...filterData])

    return(
        <View style={{flex:1}}>
            <TouchableWithoutFeedback
                onPress={()=> {
                    setModalVisible(true)
                }}
            >
                <View style={styles.searchArea}>
                    <Icon 
                        name="search"
                        style={styles.searchIcon}
                        type="material"
                        iconStyle={{marginLeft:5}}
                        size={32}
                    
                    />
                    <Text style={{fontSize:15}}> Search for your favorite food</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal 
                animationType="fade"
                transparent={false}
                visible= {modalVisible}
            >
                <View style={styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.TextInput}>
                            <Animatable.View>
                                <Icon 
                                    name={textInputFocussed ? "arrow-back" : "search"}
                                    onPress={() =>{
                                        if(textInputFocussed)
                                        setModalVisible(false)
                                        setTextInputFocussed(false)
                                    }}
                                    style={styles.icon2}
                                    type="material"
                                    iconStyle={{marginRight:5}}
                                />
                            </Animatable.View>
                            <TextInput 
                                style={{width:"90%", height:40}}
                                placeholder=""
                                autoFocus={false}
                                ref={textInput}
                            />
                            <Animatable.View>
                            <Icon 
                                    name={textInputFocussed ? "close-circle" : null}
                                    iconStyle = {{color:colors.gray2}}
                                    onPress={() =>{
                                        textInput.current.clear()
                                        // handleSearch()
                                    }}
                                    style={{marginRight:-10}}
                                    type="material-community"
                                    
                                />
                            </Animatable.View>
                        </View>
                    </View>
                    <FlatList 
                        data={data}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() =>{
                                    Keyboard.dismiss
                                    navigation.navigate("SearchScreen", {item:item.name})
                                    setModalVisible(false)
                                    setTextInputFocussed(true)
                                }}>
                                <View style={styles.view2}>
                                    <Text style={{color:colors.gray2,fontSize:15}}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text1:{
        color:colors.gray2,
        fontSize:16,
    },
    TextInput:{
        borderWidth:1,
        marginHorizontal:0,
        borderRadius:12,
        borderColor:"#86939e",
        flexDirection:"row",
        justifyContent:'space-evenly',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10
    },
    searchArea:{
        marginTop:10,
        width:'100%',
        height:50,
        backgroundColor:colors.gray4,
        borderRadius:12,
        borderWidth:1,
        paddingHorizontal:25,
        borderColor:colors.gray1,
        flexDirection:"row",
        
        alignItems:'center'
    },
    searchIcon:{
        fontSize:20,
        padding:5,
        color:colors.gray2
    },
    view1:{
        height:70,
        justifyContent:'center',
        paddingHorizontal:10,
    },
    view2:{
        flexDirection:'row',
        padding:15,
        alignItems:"center"
    },
    icon2:{
        fontSize:24,
        padding:5,
        color:colors.gray1
    }
})