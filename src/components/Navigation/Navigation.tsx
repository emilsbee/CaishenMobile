// External imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Internal imports
import App from "../App"
import Login from "../Login"
import Header from "../Header"
import Styles from "../../styles/base"
import { useStoreState } from '../../store/store';
import {checkAccessToken} from "./helpers"

const Stack = createStackNavigator();

interface NavigationProps {
    
}

const Navigation: React.FC<NavigationProps> = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    
    const authenticated = useStoreState(state => state.auth.authenticated)
    
    React.useEffect(() => {
        checkAccessToken().then(result => {
            setIsAuthenticated(result && true)
        })
    }, [])

    React.useEffect(() => {
        setIsAuthenticated(authenticated)
    }, [authenticated])

    return (
            <NavigationContainer>
                <Stack.Navigator>
                    {isAuthenticated ?
                        <Stack.Screen 
                            component={App}
                            name="Home"
                            options={({navigation}) => ({
                                headerTitle: props => <Header title={"Caishen"}/>,
                                headerStyle: {
                                  backgroundColor: Styles.background.default,
                                  borderBottomColor: Styles.background.default,
                                  shadowColor: Styles.background.default
                                }
                            })}
                        />
                        :
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
                    }
                </Stack.Navigator>
            </NavigationContainer>
    );
}

export default Navigation