// External imports
import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// Internal imports
import Styles from "../../styles/base"
import AccountListWrapper from "../AccountList"
import NewAccountForm from '../NewAccountForm';

const Stack = createStackNavigator();

export interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen 
                component={AccountListWrapper}
                name="account-list"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                component={NewAccountForm}
                name="new-account-form"
                options={{
                    headerBackTitle:"Back",
                    headerTintColor: Styles.background.accent2,
                    headerTitleStyle: {
                        color: Styles.fontColor.default.light,
                        fontSize: Styles.fontSize.h6,
                    },
                    headerStyle: {
                        backgroundColor: Styles.background.default,
                        shadowColor: 'transparent'
                    },
                    headerTitle: "New account"
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Styles.background.default,
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
})
 
export default Home;