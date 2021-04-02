// External imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme } from "@react-navigation/native";

// Internal imports
import Home from "../Home"
import Login from "../Login"
import Profile from "../Profile"
import Styles from "../../styles/base"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

interface NavigationProps {
    authenticated:boolean,
}

/**
 * This component configures the navigation for the app based on whether user is authenticated or not. 
 * @param authenticated Boolean that indicates whether user has succesfully logged in to the app. 
 */
const Navigation: React.FC<NavigationProps> = ({authenticated}) => {
 
    return (
            <NavigationContainer theme={DarkTheme}>
                
                    {authenticated ?
                        <Tab.Navigator
                            tabBarOptions={{
                                style: {
                                    backgroundColor: Styles.background.default
                                }
                            }}
                            
                        >
                            <Tab.Screen 
                                component={Home}
                                name="Home"
                                options={() => ({
                                    
                                    
                                })}
                            />
                            <Tab.Screen 
                                component={Profile}
                                name="Profile"
                            />
                        </Tab.Navigator>
                        :
                        <Stack.Navigator>
                            <Stack.Screen 
                                component={Login}
                                name="Login"
                                options={() => ({
                                    headerStyle: {
                                    backgroundColor: Styles.background.default,
                                    borderBottomColor: Styles.background.default,
                                    shadowColor: Styles.background.default,
                                    },
                                    title: ''
                                })}
                            />
                        </Stack.Navigator>  
                    }
            </NavigationContainer>
    );
}

export default Navigation