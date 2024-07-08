import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pedidos from '../screens/pedidos';
import Servicos from '../screens/servicos';
import Boletos from "../screens/boletos";


const Stack = createStackNavigator();

export default function Home(){
    return<Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerShown: false,
    }}>
        <Stack.Screen name='Pedidos' component={Pedidos}/>
        <Stack.Screen name='Servicos' component={Servicos}/>
        <Stack.Screen name='Boletos' component={Boletos}/>
    </Stack.Navigator>
}