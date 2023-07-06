import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs" ;
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/Home/HomeScreen";
import { color } from "@rneui/base";
import { colors } from "../global/styles";
import SearchScreen from "../screens/SearchScreen";
import UserAcct from "../screens/UserAcct";
import OrdersScreen from "../screens/OrdersScreen";
import MapScreen from "../screens/MapScreen";


const ClientTabs = createBottomTabNavigator();
export default function ClientTab(){
    return(
        
        <ClientTabs.Navigator
                        tabBarOptions = {{
                            activeTintColor :colors.buttons
                        }}
                        
                
                >
            <ClientTabs.Screen 
                name="Home"
                component={HomeScreen}
                options={
                    {  
                        tabBarLabel : "Home" ,
                        headerShown: false,
                        tabBarIcon : ({color}) => (
                            <Icon 
                                name="home"
                                type="material"
                                color={color}
                                
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen 
                name="SearchScreen"
                component={SearchScreen}
                options={
                    {
                        tabBarLabel : "Search" ,
                        headerShown: false,
                        tabBarIcon : ({color}) => (
                            <Icon 
                                name="search"
                                type="material"
                                color={color}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen 
                name="OrderScreen"
                component={OrdersScreen}
                options={
                    {
                        tabBarLabel : "Orders" ,
                        headerShown: false,
                        tabBarIcon : ({color}) => (
                            <Icon 
                                name="view-list"
                                type="material"
                                color={color}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen 
                name="UserAcct"
                component={UserAcct}
                options={
                    {
                        tabBarLabel : "Account" ,
                        headerShown: false,
                        tabBarIcon : ({color}) => (
                            <Icon 
                                name="person"
                                type="material"
                                color={color}
                            />
                        )
                    }
                }
            />
            
        </ClientTabs.Navigator>
        
    )
}