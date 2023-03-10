import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import { firebase } from '../../firebase'


const Login = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const gotoRegister = () => {
        return navigation.navigate("Register")
    }

    const loginUser = async (email, password) => {
        try {
            await firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(userCredientals => {
                    const user = userCredientals.user;
                    alert("You logged in using " + user.email);
                    navigation.navigate("Dashboard")
                })
        }
        catch (error) {
            alert(error.message)
        }


    }

    const forgotPassword = () => {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                alert("Password sent to " + email)
            })
            .catch((error) => alert(error.message))
    }


    <fontPage />

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Hey! Welcome Back.</Text>

            <View style={styles.iconView}>
                <Pressable style={styles.pressable}>
                    <Image
                        source={require("../../assets/facebook.png")}
                        style={{ height: 38, width: 38 }} />
                </Pressable>
                <Pressable style={styles.pressable}>
                    <Image
                        source={require("../../assets/twitter.png")}
                        style={{ height: 38, width: 38 }} />
                </Pressable >
                <Pressable style={styles.pressable}>
                    <Image
                        source={require("../../assets/google.png")}
                        style={{ height: 38, width: 38 }} />
                </Pressable>
            </View>
            <View
                style={{
                    marginVertical: 20,
                    height: 150,
                    flexDirection: 'column',
                    justifyContent: "space-between"
                }}>
                <TextInput
                    placeholder='example@gmail.com'
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => setEmail(text)} />
                <TextInput
                    style={styles.textInput}
                    placeholder='********'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => setPassword(text)} />
            </View>
            <View style={styles.buttonView}>
                <View style={{ width: 320, alignItems: "center" }}>
                    <Pressable style={styles.forgotBtn} onPress={forgotPassword}>
                        <Text style={{ fontSize: 20, fontFamily: "Nunitomedium" }}>
                            Forgot Password
                        </Text>
                    </Pressable >
                </View>

                <View style={{ width: 320, alignItems: "center" }}>
                    <Pressable style={styles.logInBtn} onPress={() => loginUser(email, password)}>
                        <Text style={{ fontSize: 30, fontFamily: "Nunitoblack", color: '#FF9B07' }}>
                            Login
                        </Text>
                    </Pressable>
                </View>
                <View style={{ width: 320, alignItems: "center" }}>
                    <Pressable style={styles.registerBtn} onPress={gotoRegister}>
                        <Text style={{ fontSize: 30, fontFamily: "Nunitoblack" }}>
                            Register
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        /*       flex: 1,
              justifyContent: 'center',
              alignItems: 'center' */

        marginTop: 100,
        marginHorizontal: 30
    },
    title: {
        fontSize: 40,
        marginVertical: 10,
        fontFamily: "Nunitobold",
        color: "#FFC107"
    },
    subtitle: {
        fontSize: 18,
        fontFamily: "Nunitomedium"
    },
    iconView: {
        width: 325,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20

    },
    pressable: {
        height: 50,
        width: 90,
        backgroundColor: 'black',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: 330,
        height: 60,
        borderColor: '#FF9B07',
        borderWidth: 2,
        padding: 15,
        borderRadius: 15,
        fontSize: 20,

    },
    forgotBtn: {

    },
    logInBtn: {
        borderWidth: 2,
        height: 55,
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomEndRadius: 20,
        backgroundColor: "black"

    },
    registerBtn: {
        borderWidth: 2,
        height: 55,
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomEndRadius: 20,
        borderColor: "#FF9B07"

    },
    buttonView: {
        height: 190,
        justifyContent: "space-between",
        flexDirection: "column",
        width: 300

    }
})