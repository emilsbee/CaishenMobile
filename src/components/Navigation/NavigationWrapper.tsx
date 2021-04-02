// External imports
import React from 'react';

// Internal imports
import Navigation from "./Navigation"
import { useStoreState } from '../../store/store';
import {checkAccessToken} from "./helpers"

export interface NavigationWrapperProps {
    
}
 
/**
 * Wrapper component for Navigation component.  
 */
const NavigationWrapper: React.FC<NavigationWrapperProps> = () => {
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
        <Navigation authenticated={isAuthenticated}/>
    );
}
 
export default NavigationWrapper;