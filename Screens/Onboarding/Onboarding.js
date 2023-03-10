import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'


const Onboarding = ({ navigation }) => {

    const gotoLogin = () => {
        return navigation.navigate("Login")
    }


    /*    const [fontsLoaded] = useFonts({
           "Nunitoblack": require("../../fonts/Nunito-Black.ttf"),
           "Nunitobold": require("../../fonts/Nunito-ExtraBold.ttf"),
           "Nunitomedium": require("../../fonts/Nunito-MediumItalic.ttf"),
           "Nunito": require("../../fonts/Nunito-MediumItalic.ttf")
       })
   
       if (!fontsLoaded) return null */

    return (
        <LinearGradient
            colors={['#EDD280', '#E2B11C']}
            style={styles.linearColor}>

            <View style={styles.container}>
                <Image source={require("../../assets/Logo.png")} style={{ height: 280, width: 280 }} />
                <Pressable style={styles.pressable} onPress={gotoLogin}>

                    <Text style={styles.pressableText}>Get Started</Text>
                </Pressable>
            </View>
        </LinearGradient>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearColor: {
        flex: 1
    },
    pressable: {
        width: 250,
        height: 70,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20

    },
    pressableText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Nunitobold'
    }
});  