// External imports
import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { StatusBar } from 'expo-status-bar';

// Internal imports
import store from '../../store/store';
import NavigationWrapper from "../Navigation"

export interface AppProps {
    
}
 
/**
 * The wraps the app with the easy-peasy store component. 
 * Also, sets the status bar to the light theme (the top bar on IOS
 * that shows the time and battery).
 */
const App: React.FC<AppProps> = () => {
    return (
        <StoreProvider store={store}>
            <NavigationWrapper />
            <StatusBar style="light" />
        </StoreProvider>
    );
}
 
export default App;