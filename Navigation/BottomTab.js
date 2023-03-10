import React from "react";

import Dashboard from "../Screens/Dashboard/Dashboard";
import Menu from "../Screens/Menu/Menu";
import Profile from "../Screens/Profile/Profile";


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const DashboardScreen = () => {
    return (

        < Stack.Navigator >
            <Stack.Screen name="Dash" component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name="MenuPage" component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name="ProfilePage" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator >
    )

}

const MenuScreen = () => {
    return (

        <Stack.Navigator initialRouteName="MenuPage1">
            <Stack.Screen name="DashboardPage" component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name="MenuPage1" component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name="ProfilePage1" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}
const ProfileScreen = () => {
    return (

        <Stack.Navigator initialRouteName="ProfilePage2">
            <Stack.Screen name="DashboardPage2" component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name="MenuPage2" component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name="ProfilePage2" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}

const BottomTab = () => {
    <fontPage />
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#FF9B07",
                tabBarInactiveBackgroundColor: "black",
                tabBarStyle: {
                    backgroundColor: "white",
                    height: 80,
                    borderTopEndRadius: 40,
                    borderTopStartRadius: 40

                },
                tabBarLabelStyle: {
                    fontSize: 17,
                    marginBottom: 15
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={DashboardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="home" size={30}
                            color={focused ? '#FF9B07' : "white"}
                            style={{ fontFamily: 'Nunitoblack' }}

                        />
                    )



                }}
            />
            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="restaurant-menu"
                            size={30}
                            color={focused ? '#FF9B07' : "white"}
                            style={{ fontFamily: 'Nunitoblack' }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="person"
                            size={30}
                            color={focused ? '#FF9B07' : "white"}
                            style={{ fontFamily: 'Nunitoblack' }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )

}

export default BottomTab;