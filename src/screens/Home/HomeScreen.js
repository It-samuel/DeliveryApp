import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions} from "react-native";
import HomeScrnHeader from "./HomeScrnHeader";
import { colors } from "../../global/styles";
import { Icon } from "react-native-elements";
import { filterData, restaurantData } from "../../global/Data";
import CountDown from "react-native-countdown-component";
import FoodCard from "./FoodCard";
import { color } from "@rneui/base";


const SCREEN_WIDTH = Dimensions.get('window').width
export default function HomeScreen ({navigation}){

const [delivery, setDelivery] = useState(true)
const [indexCheck, setIndexCheck] = useState("0")
    return(
        <View style={styles.container}>
            <HomeScrnHeader  navigation={navigation}/>
            <ScrollView 
            stickyHeaderIndices= {[0]}
            showsHorizontalScrollIndicator ={true}
            >
                <View style={{backgroundColor:'white', paddingBottom:7}}>
            <View style={{marginTop:10, flexDirection:'row', justifyContent:'space-evenly'}}>
                <TouchableOpacity
                    onPress ={ ()=>{
                        setDelivery(true)
                    }}
                >
                    <View style={{...styles.deliverybtn,backgroundColor:delivery?colors.buttons :colors.gray1}}>
                        <Text style={styles.deliveryText}>Delivery</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                onPress ={()=>{
                    setDelivery(false)
                    navigation.navigate('MapScreen')
                }}
                >
                    <View style={{...styles.deliverybtn,backgroundColor:delivery?colors.gray1 :colors.buttons}}>
                        <Text style={styles.deliveryText}>Pick-Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginHorizontal:10,marginVertical:10}}>
            <View style={{flexDirection:'row',backgroundColor:colors.gray1,borderRadius:15,paddingVertical:3}}>
                <View style={{flexDirection:'row', alignItems:'center',paddingLeft:10,justifyContent:'space-evenly',paddingHorizontal:20}}>
                    <Icon 
                        type="material-community"
                        name="map-marker"
                        color={colors.gray2}
                        size={25}
                    />
                    <Text style={{marginLeft:5}}>Tipper Garage Tanke</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'white',borderRadius:15,paddingHorizontal:5,marginRight:20}}>
                    <Icon 
                        type="material-community"
                        name="clock-time-four"
                        color={colors.gray2}
                        size={25}
                    />
                    <Text style={{marginLeft:5}}>now</Text>
                </View>
            </View>
            <View>
            <Icon 
                        type="material-community"
                        name="tune"
                        color={colors.gray2}
                        size={25}
                    />
            </View>
            </View>
            <View style={styles.headerTextView}>
                <Text style={styles.header}>Categories</Text>
            </View>
            <View>
                <FlatList 
                    data={filterData}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item)=>item.id}
                    extraData={indexCheck}
                    renderItem = {({item,index})=>(
                        <Pressable
                            onPress={()=>{setIndexCheck(item.id)}}
                        
                        >
                            <View style={indexCheck === item.id ? {...styles.activecard}:{...styles.smallcard}}>
                                <Image 
                                    style ={{height:60, width:60, borderRadius:30}}
                                    source={item.image}
                                />
                                <View>
                                    <Text style ={indexCheck === item.id ? {...styles.ActivecardText}: {...styles.cardText}}>{item.name}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
                    
                />
            </View>
            <View style={styles.headerTextView}>
                <Text style={styles.header}>Free Delivery</Text>
            </View>
            <View>
                <View style={{flexDirection:'row', alignItems:'center', }}>
                    <Text style={{marginLeft:7, fontSize:16,marginTop:-10, marginRight:5}}>
                        Expires In
                    </Text>
                    <CountDown 
                        until={3600}
                        size={13}
                        digitStyle ={{backgroundColor:"#1cd41c", marginTop:5}}
                        digitTxtStyle={{color:'white'}}
                        timeToShow={['M','S']}
                        timeLabelStyle={{m:'Min', s:'Sec', color:'black'}}
                    />
                </View>
                <FlatList 
                    style={{marginTop:10, marginBottom:10}}
                    horizontal ={true}
                    showsHorizontalScrollIndicator ={false}
                    data={restaurantData}
                    keyExtractor={(item, index)=>index.toString}
                    renderItem={({item})=>(
                        <View style={{marginRight:5}}> 
                            <FoodCard
                                screenwidth={SCREEN_WIDTH*0.8}
                                images={item.images}
                                restaurantName={item.restaurantName}
                                distance={item.distance}
                                businessAddress={item.businessAddress}
                                averageReview={item.averageReview}
                                numberofReview={item.numberofReview}
                            />
                        </View>
                    )}
                />
            </View>

            <View style={styles.headerTextView}>
                <Text style={styles.header}>Promotions</Text>
            </View>
            <View>
                <FlatList 
                    style={{marginTop:10, marginBottom:10}}
                    horizontal ={true}
                    showsHorizontalScrollIndicator ={false}
                    data={restaurantData}
                    keyExtractor={(item, index)=>index.toString}
                    renderItem={({item})=>(
                        <View style={{marginRight:5}}> 
                            <FoodCard
                                screenwidth={SCREEN_WIDTH*0.8}
                                images={item.images}
                                restaurantName={item.restaurantName}
                                distance={item.distance}
                                businessAddress={item.businessAddress}
                                averageReview={item.averageReview}
                                numberofReview={item.numberofReview}
                            />
                        </View>
                    )}
                />
            </View>
            <View style={styles.headerTextView}>
                <Text style={styles.header}>NearBy Restaurants</Text>
            </View>
            <View style={{width:SCREEN_WIDTH,paddingTop:10}}>
                { restaurantData.map(item =>(
                    <View key={item.id} style={{paddingBottom:15}}>
                        <FoodCard
                                screenwidth={SCREEN_WIDTH*0.95}
                                images={item.images}
                                showsHorizontalScrollIndicator ={false}
                                restaurantName={item.restaurantName}
                                distance={item.distance}
                                businessAddress={item.businessAddress}
                                averageReview={item.averageReview}
                                numberofReview={item.numberofReview}
                            />
                    </View>
                ))
                }
            </View>
            
            </ScrollView>
            { delivery &&
            <View style={styles.floatingBtn}>
                <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
                    <Icon 
                        name="place"
                        type="material"
                        size={32}
                        color={colors.buttons}
                    />
                    <Text style={{color:colors.gray2}}>Map</Text>

                </TouchableOpacity>
            </View>
}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    deliverybtn:{
        paddingHorizontal:15,
        borderRadius:15,
        paddingVertical:7
    },
    deliveryText:{
        marginLeft:5,
        fontSize:13,
    },
    header:{
        color:colors.gray2,
        fontSize:22,
        fontWeight:'bold',
        paddingLeft:10
    },
    headerTextView:{
        backgroundColor:colors.gray4,
        paddingVertical:3
    },
    smallcard:{
        borderRadius:30,
        backgroundColor:colors.gray4,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100,
    },
    activecard:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100,
    },
    ActivecardText:{
        fontWeight:'bold',
        color:'white',
    },
    cardText:{
        fontWeight:'bold',
        color:colors.gray2,
    },
    floatingBtn:{
        position:'absolute',
        bottom:10,
        right:15,
        backgroundColor:'white',
        elevation:10,
        width:80,
        height:80,
        borderRadius:30,
        alignItems:'center'
    }
})