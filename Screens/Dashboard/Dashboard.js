import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../Header/headerFile'

import SearchBar from '../../Components/searchBar/SearchBar'
import Category from '../../Components/categoryCarousel/Category'
import { firebase } from '../../firebase'


const Dashboard = ({ navigation }) => {
    const Signout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                navigation.navigate("Login")
            })
            .catch((error) => alert(error.message))

    }
    <fontPage />
    return (
        <View style={{ marginTop: 50, marginHorizontal: 30 }}>
            <Header />

            <View>
                <Text style={Styles.title}>Hey, Welcome Back!</Text>
                <Text style={Styles.caption}>Want something new?</Text>
            </View>
            <SearchBar />
            <Category />
        </View>
    )
}

const Styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontFamily: "Nunitoblack",
        fontWeight: "bold",

    },
    caption: {
        fontSize: 20,
        fontFamily: 'Nunito'

    }

})

export default Dashboard