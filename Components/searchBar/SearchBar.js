import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Search from '@expo/vector-icons/MaterialIcons'

const SearchBar = () => {
    return (
        <View style={Styles.container}>
            <Pressable style={Styles.search}>
                <Search color="#FF9B07" size={30} name="search" style={{ marginHorizontal: 10 }} />
            </Pressable>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        marginVertical: 20

    },
    search: {
        borderColor: "black",
        height: 50,
        width: 330,
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: "center"
    }

})

export default SearchBar