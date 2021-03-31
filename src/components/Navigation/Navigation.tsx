// External imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StoreProvider } from 'easy-peasy';

// Internal imports
import App from "../App"
import Login from "../Login"
import store, { useStoreState } from '../../store/store';

const Stack = createStackNavigator();


const Navigation = () => {
    const authenticated = store.getState().auth.authenticated

    return (
        <StoreProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    {authenticated ?
                        <Stack.Screen 
                            component={App}
                            name="Home"
                        />
                        :
                        <Stack.Screen 
                            component={Login}
                            name="Login"
                        />
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </StoreProvider>
    );
}

export default Navigation