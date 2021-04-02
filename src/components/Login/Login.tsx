// External imports
import React from 'react';
import {View, Text, StyleSheet, TextInput, Keyboard, Pressable} from "react-native"
import { useStoreActions, useStoreState } from '../../store/store';

// Internal imports
import Styles from "../../styles/base"
import {Button} from "../Button"

export interface LoginProps {
    
}
 
const Login: React.FC<LoginProps> = () => {
    // Store state
    const authError = useStoreState(state => state.auth.authError)

    // Store actions
    const login = useStoreActions(actions => actions.auth.login)

    // Local state
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    return (
        <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Caishen
                </Text>
                <Text style={styles.description}>
                    Automation is the key.
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.authErrorContainer}>
                    <Text style={styles.authError}>
                        {authError}
                    </Text>
                </View>
                <TextInput
                    style={styles.usernameInput}
                    onChangeText={text => setUsername(text)}
                    value={username}
                    placeholder="username"
                    placeholderTextColor="darkgray"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.passwordInput}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder="password"
                    placeholderTextColor="darkgray"
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    text="Login" 
                    onPress={() => login({username, password})} 
                    backgroundColor={Styles.background.accent2}
                    width={65}
                    fontColor={Styles.fontColor.default.light}
                />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Styles.background.default,
        height: "100%",
        paddingTop: 50
    },
    titleContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
    }, 
    title: {
        fontSize: Styles.fontSize.h1,
        color: Styles.fontColor.default.light
    },
    description: {
        marginTop: 20,
        fontSize: Styles.fontSize.h6,
        color: Styles.fontColor.default.light
    },
    authErrorContainer: {
        height: 30,
        marginBottom: 10
    },
    authError: {
        color: Styles.fontColor.error,
        fontSize: Styles.fontSize.h7,
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "10%",
        marginRight: "10%"
    },
    usernameInput: {
        width: "100%",
        height: 43,
        backgroundColor: Styles.background.accent,
        marginBottom: 15,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    passwordInput: {
        width: "100%",
        height: 43,
        backgroundColor: Styles.background.accent,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: "10%",
        marginTop: 20
    }
})
export default Login;