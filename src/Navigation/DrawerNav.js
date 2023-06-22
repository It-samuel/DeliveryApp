import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ClientTab from "./ClientTab";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import BusinessConsole from "../screens/DrawerScreen/Business";
import DriverConsole from "../screens/DrawerScreen/DriverConsole";
import Help from "../screens/DrawerScreen/Help";
import Payment from "../screens/DrawerScreen/payment";
import Promotions from "../screens/DrawerScreen/Promotions";
import Settings from "../screens/DrawerScreen/Settings";
import DrawerHeader from "../screens/DrawerScreen/DrawerHeader";
import DrawerContent from "@react-navigation/drawer";
import { View, Text } from "native-base";


const Drawer = createDrawerNavigator()

export default function DrawerNav({navigation}){
    return(
        <Drawer.Navigator  drawerContent= { (props) => <DrawerHeader {...props} />} >
            
            <Drawer.Screen 
                name="ClientTab"
                component={ClientTab}


                options={
                    {
                        title:'Home',
                        headerShown: false,
                        drawerIcon:({focussed,size})=>(
                            <Icon 
                                type="material-community"
                                name="home"
                                color={focussed ? '#7cc' :colors.gray2}
                                size={size}
                            />

                        )
                    }
                }
            />
            <Drawer.Screen 
                name="BusinessConsole"
                component={BusinessConsole}


                options={
                    {
                        title:'Business',
                        headerShown: false,
                        drawerIcon:({focussed,size})=>(
                            <Icon  
                                type="material-community"
                                name="domain"
                                color={focussed ? '#7cc' :colors.gray2}
                                size={size}
                            />

                        )
                    }
                }
            />
            <Drawer.Screen 
                name="DriverConsole"
                component={DriverConsole}


                options={
                    {
                        title:'Driver Console',
                        headerShown: false,
                        drawerIcon:({focussed,size})=>(
                            <Icon 
                                type="material-community"
                                name="truck-delivery"
                                color={focussed ? '#7cc' :colors.gray2}
                                size={size}
                            />

                        )
                    }
                }
            />
            <Drawer.Screen 
                name="Payment"
                component={Payment}


                options={
                    {
                        title:'Payment',
                        headerShown: false,
                        drawerIcon:({focussed,size})=>(
                            <Icon 
                                type="material-community"
                                name="cash-check"
                                color={focussed ? '#7cc' :colors.gray2}
                                size={size}
                            />

                        )
                    }
                }
            />
            <Drawer.Screen 
                name="Promtions"
                component={Promotions}


                options={
                    {
                        title:'Promtions',
                        headerShown: false,
                        drawerIcon:({focussed,size})=>(
                            <Icon 
                                type="material-community"
                                name="hand-heart"
                                color={focussed ? '#7cc' :colors.gray2}
                                size={size}
                            />

                        )
                    }
                }
            />
            <Drawer.Screen 
                name="Settings"
                component={Settings}


                options={
                    {
                        title:'Settings',
                        headerShown: false,
                        drawerIcon:({focussed,size})=>(
                            <Icon 
                                type="material-community"
                                name="cog-outline"
                                color={focussed ? '#7cc' :colors.gray2}
                                size={size}
                            />

                        )
                    }
                }
            />
            <Drawer.Screen 
            name="Help"
            component={Help}


            options={
                {
                    title:'Help',
                    headerShown: false,
                    drawerIcon:({focussed,size})=>(
                        <Icon 
                            type="material-community"
                            name="help-box"
                            color={focussed ? '#7cc' :colors.gray2}
                            size={size}
                        />

                    )
                }
            }
        /> 
            
        </Drawer.Navigator>
    )
}