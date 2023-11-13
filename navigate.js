import React from "react";
import HomePage from "./components/HomePage";
import ArithmeticQuiz from "./components/ArithmeticQuiz";
import MakeUpAWord from "./components/MakeUpAWord";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="HomePage"
                component={HomePage}
                options={{title: "Главная страница"}}
            /> 
            <Stack.Screen 
                name="ArithmeticQuiz"
                component={ArithmeticQuiz}
                options={{title: "Арифметическая викторина"}}
            /> 
            <Stack.Screen 
                name="MakeUpAWord"
                component={MakeUpAWord}
                options={{title: "Составь слово",}}
            /> 
        </Stack.Navigator>
    </NavigationContainer>
}
