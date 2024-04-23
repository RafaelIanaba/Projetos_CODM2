import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Check from "../screens/check";
import Market from "../screens/market";
import Register from "../screens/register";
import Confirmation from "../screens/confirmation";

const Stack = createStackNavigator();

export default function Home(){
    return<Stack.Navigator>
        <Stack.Screen name='Market' component={Market}/>
        <Stack.Screen name='Check' component={Check}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Confirmation' component={Confirmation}/>
    </Stack.Navigator>
}