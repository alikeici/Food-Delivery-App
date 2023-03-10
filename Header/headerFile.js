import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Menu from "@expo/vector-icons/MaterialCommunityIcons"
import Cart from "@expo/vector-icons/MaterialIcons"

const Header = () => {
    return (
        <View style={Styles.container}>
            <Pressable style={Styles.pressable}>
                <Menu color="#FF9B07" size={40} name="menu" />
            </Pressable>
            <Pressable style={Styles.pressable}>
                <Cart color="#FF9B07" size={40} name="shopping-cart" />

            </Pressable>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: 330,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20
    },
    pressable: {
        width: 80,
        height: 50,
        backgroundColor: "black",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Header