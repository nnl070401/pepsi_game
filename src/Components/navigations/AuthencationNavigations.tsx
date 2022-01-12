import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

export const AuthencationNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="SignUp" component= {SignUp}/>
        </Stack.Navigator>
    );
};