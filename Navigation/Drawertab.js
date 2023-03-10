
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from "@expo/vector-icons/Foundation"
import Category from "@expo/vector-icons/MaterialIcons"
import Person from "@expo/vector-icons/MaterialIcons"

import Dashboard from '../Screens/Dashboard/Dashboard'
import Profile from '../Screens/Profile/Profile'
import Menu from '../Screens/Menu/Menu'
import BottomTab from './BottomTab'
import CustomDrawer from './CustomDrawer'



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DashboardScreen = () => {
    return (

        < Stack.Navigator >
            <Stack.Screen name="Dashed" component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name="Menued" component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name="Profiled" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator >
    )

}

const MenuScreen = () => {
    return (

        <Stack.Navigator initialRouteName="Menued1">
            <Stack.Screen name="Dashed1" component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name="Menued1" component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name="Profiled1" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}
const ProfileScreen = () => {
    return (

        <Stack.Navigator initialRouteName="Profiled2">
            <Stack.Screen name="Dashed2" component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name="Menued2" component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name="Profiled2" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}

const Drawertab = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer{...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: 'black',
                drawerActiveTintColor: '#FF9B07',
                drawerLabelStyle: {
                    fontSize: 20,
                    marginLeft: 20
                }
            }}

        >
            <Drawer.Screen name="Welcome" component={BottomTab}
                options={{
                    drawerIcon: ({ focused }) => {
                        return <Home
                            name='home'
                            size={30}
                            color={focused ? "#FF9B07" : "black"}
                            style={{ marginLeft: 5 }}
                        />
                    }
                }}

            />
            <Drawer.Screen
                name="Categories"
                component={MenuScreen}
                options={{
                    drawerIcon: ({ focused }) => {
                        return <Category
                            name='category'
                            size={30}
                            color={focused ? "#FF9B07" : "black"}
                        />
                    }
                }}

            />
            <Drawer.Screen
                name="Profile Page"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ focused }) => {
                        return <Person
                            name='person-pin'
                            size={30}
                            color={focused ? "#FF9B07" : "black"}
                        />
                    }
                }}
            />
        </Drawer.Navigator>
    )
}

export default Drawertab