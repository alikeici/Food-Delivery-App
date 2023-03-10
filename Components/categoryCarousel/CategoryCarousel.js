import { View, Text, Pressable, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'

const CategoryCarousel = ({ item }) => {
    return (
        <SafeAreaView style={Styles.view}>
            <Pressable style={Styles.pressable}>
                <Image source={{ uri: item.image }} style={{ height: 35, width: 35 }} />
                <Text style={{ fontFamily: "Nunitomedium", color: "#FF9B07", fontSize: 18 }}>{item.title}</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    pressable: {
        height: 100,
        width: 100,
        borderColor: "black",
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 15,
        marginVertical: 10,
        borderWidth: 1

    },
    view: {
        marginLeft: 100
    },

})

export default CategoryCarousel