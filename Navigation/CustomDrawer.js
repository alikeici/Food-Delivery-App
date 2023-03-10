import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = props => {
    return (
        <DrawerContentScrollView {...props}>
            <Pressable style={styles.pressable}>
                <Image source={require("../assets/Logo.png")} style={styles.image} />
            </Pressable>
            <View>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    pressable: {
        height: 200,
        width: 200
    },
    image: {
        height: 200,
        width: 200,
        marginLeft: 40
    }
})

export default CustomDrawer