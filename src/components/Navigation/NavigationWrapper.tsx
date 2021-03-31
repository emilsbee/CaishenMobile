// External imports
import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { StatusBar } from 'expo-status-bar';

// Internal imports
import Navigation from "./Navigation"
import store from '../../store/store';

export interface NavigationWrapperProps {
    
}
 
/**
 * Wraps the Navigation component with easy-peasy store. 
 */
const NavigationWrapper: React.FC<NavigationWrapperProps> = () => {

    return (
        <StoreProvider store={store}>
            <Navigation/>
            <StatusBar style="light" />
        </StoreProvider>
    );
}
 
export default NavigationWrapper;