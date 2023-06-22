import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image} from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../../global/styles";
import { restaurantData } from "../../global/Data";

export default function FoodCard({
    onpressFoodCard,
    restaurantName,
    deliveryavailable,
    discountavailable,
    discountPercent,
    businessAddress,
    distance,
    restaurantname,
    averageReview,
    images,
    numberofReview,
    screenwidth,
}){
    return(
        <TouchableOpacity>
            <View style ={{...styles.cardView,width:screenwidth}}>
                <Image 
                    style ={{...styles.img,width:screenwidth}}
                    source={url=images}
                />
            <View>
                <View>
                    <Text style={{...styles.restaurantName}}>{restaurantName}</Text>
                </View>
            </View>
            <View style={{flex:1, flexDirection:'row',alignContent:'center', justifyContent:'center' }}>
                <View style={styles.distance}>
                    <Icon 
                        name="place"
                        type="material"
                        size={14}
                        iconStyle={{marginTop:3,marginHorizontal:5}}
                    
                    />
                    <Text style={styles.min}>{distance} Min</Text>
                </View>
                <View style={{flex:9, flexDirection:'row'}}>
                    <Text style={styles.address}>{businessAddress}</Text>
                </View>
            </View>
            </View>
            <View style={styles.reveiw}>
                <Text style={styles.avg}>{averageReview}</Text>
                <Text>{numberofReview} review</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.gray2,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    },
    img:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:150,
    },
    restaurantName:{
        fontSize:17,
        fontWeight:'bold',
        color:colors.gray2,
        marginTop:5,
        marginLeft:7,
    },
    distance:{
        flex:4,
        flexDirection:'row',
        paddingHorizontal:5,
        borderRightWidth:1
    },
    min:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        color:colors.gray3
    },
    address:{
        fontSize:12,
        paddingTop:5,
        color:colors.gray2,
        paddingHorizontal:10
    },
    reveiw:{
        position:'absolute',
        top:0,
        right:10,
        backgroundColor:'rgb(52, 52, 52,0.3)',
        padding:2,
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:5,
        borderBottomLeftRadius:12
    },
    avg:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginTop:-3
    }
})