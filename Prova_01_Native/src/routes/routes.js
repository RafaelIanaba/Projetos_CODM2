import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import  {Ionicons} from "@expo/vector-icons";
import Home from "../screens/home";
import Conta from '../screens/conta';
import Carrinho from '../screens/carrinho';
import Menu from "../screens/menu";
import Login from "../screens/login";

const Tab = createBottomTabNavigator()

export default function Routes(){
    return<NavigationContainer>
        <Tab.Navigator screenOptions={{
            tabBarInactiveTintColor: "black",
            tabBarActiveTintColor: "#51d6ac",
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
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name='Conta' component={Conta} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="person" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name='Carrinho' component={Carrinho} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="cart" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name='Menu' component={Menu} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="menu" color={color} size={26} />
                ),
            }} /> 
            <Tab.Screen name='Login' component={Login} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="log-in" color={color} size={26} />
                ),
            }} />
        </Tab.Navigator>
    </NavigationContainer>
}