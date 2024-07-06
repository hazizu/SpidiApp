import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Register from "../pages/Auths/register/Register";
import Home from "../pages/Home/Home";

const Stack = createStackNavigator();

const Navigation = ()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            animationEnabled: true,
            headerMode: 'screen',
        }} 
        initialRouteName='register'>
             <Stack.Screen name="register" component={Register} />
             <Stack.Screen name="home" component={Home} />


        </Stack.Navigator>

        </NavigationContainer>

    )
}
export default Navigation;