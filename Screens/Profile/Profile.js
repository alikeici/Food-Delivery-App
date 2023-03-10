import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { firebase } from '../../firebase'


const Profile = ({ navigation }) => {
    const Signout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                navigation.navigate("Login")
            })
            .catch((error) => alert(error.message))

    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Pressable onPress={Signout}>

                <Text>Sign Out</Text>
            </Pressable>
        </View>
    )
}

export default Profile