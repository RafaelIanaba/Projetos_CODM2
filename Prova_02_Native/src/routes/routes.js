import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import  {Ionicons} from "@expo/vector-icons";
import Login from "../screens/login";
import Noticias from "../screens/noticias";
import Eventos from "../screens/eventos";
import Navigation from './navigation';


const Tab = createBottomTabNavigator()

export default function Routes(){
    return<NavigationContainer>
        <Tab.Navigator screenOptions={{
            tabBarInactiveTintColor: "black",
            tabBarActiveTintColor: "#51d6ac",
            tabBarActiveTintColor: "#20420d",
            tabBarInactiveBackgroundColor: "white",
            headerTransparent: true,
            headerShown: false,
            tabBarLabelStyle:{
                flex: 1,
                fontSize: 13,
                lineHeight: 21,
                paddingTop: 5,
                backgroundColor: 'white'
            },
            tabBarStyle:{
                height: 60,
            },
        }}>
            <Tab.Screen name='Login' component={Login} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="enter-outline" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name='Noticias' component={Noticias} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="flame-outline" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name='Eventos' component={Eventos} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="calendar-outline" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name='Pedidos' component={Navigation} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="enter-outline" color={color} size={26} />
                ),
            }} />
        </Tab.Navigator>
    </NavigationContainer>
}