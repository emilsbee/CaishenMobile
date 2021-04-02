// External imports
import React from 'react';

// Internal imports
import Navigation from "./Navigation"
import { useStoreActions, useStoreState } from '../../store/store';
import {checkAccessToken} from "./helpers"
import LoadingScreen from "../LoadingScreen"

export interface NavigationWrapperProps {
    
}
 
/**
 * Wrapper component for Navigation component.  
 */
const NavigationWrapper: React.FC<NavigationWrapperProps> = () => {
    // Local state
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    
    // Store actions
    const setAccessToken = useStoreActions(actions => actions.auth.setAccessToken)

    // Store state
    const authenticated = useStoreState(state => state.auth.authenticated)

    // On initial load checks for an access token in async storage.
    // Then sets the result (null or token) to local state and store state.
    React.useEffect(() => {
        checkAccessToken().then(result => {
            setIsAuthenticated(result && true)
            setAccessToken({accessToken: result})
            setLoading(false)
        })
    }, [])

    // On store state change also changes the local state. 
    React.useEffect(() => {
        setIsAuthenticated(authenticated)
    }, [authenticated])

    if (loading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <Navigation authenticated={isAuthenticated}/>
    );
}
 
export default NavigationWrapper;