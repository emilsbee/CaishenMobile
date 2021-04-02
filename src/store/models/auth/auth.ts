// External imports
import { action, thunk, Thunk, Action } from "easy-peasy"
import AsyncStorage from '@react-native-async-storage/async-storage';

// Internal imports
import { login } from "./helpers";

export interface AuthModelType {
    accessToken:string,
    /**
     * Setter for accessToken.
     * @param {string} accessToken The api access token to set.
     */
    setAccessToken: Action<AuthModelType, {accessToken:string}>,


    authError:string,
    /**
     * Setter for authError.
     * @param {string} error Error to set.
     */
    setAuthError: Action<AuthModelType, {error:string}>,


    authenticated: boolean;
    /**
     * Attempts to login with the provided username and password. 
     * If succesful login is made, then authenticated is set to true,
     * the returned access token is saved in local storage and store.
     * Otherwise an authError is set.
     * @param {string} username Login username.
     * @param {string} password Login password.
     */
    login: Thunk<AuthModelType, {username:string, password:string}>;

    /**
     * Attempts to logout. Sets authenticated to false, removes 
     * access token from local storage and store.
     */
    logout: Thunk<AuthModelType>,

    /**
     * Setter for authenticated.
     * @param {boolean} authenticated Boolean to set as authenticated. 
     */
    setAuthenticated: Action<AuthModelType, {authenticated:boolean}>;
}

const AuthModel:AuthModelType = {
    accessToken: "",
    setAccessToken: action((state, payload) => {
        state.accessToken = payload.accessToken
    }),

    authError: "",
    setAuthError: action((state, payload) => {
        state.authError = payload.error
    }),

    authenticated: false,
    setAuthenticated: action((state, payload) => {
        state.authenticated = payload.authenticated
    }),
    login: thunk(async (actions, payload) => {
        const {username, password} = payload

        if (username.trim().length === 0 || password.trim().length === 0) {
        
            actions.setAuthError({error: "You must provide username and password."})
        
        } else {
                try {
                    let response = await login(username, password)
        
                    if (response.success) {
                        try {
                            
                            await AsyncStorage.setItem('access-token', response.text)

                            actions.setAccessToken({accessToken: response.text})
                            actions.setAuthenticated({authenticated: true}) 
                            actions.setAuthError({error: ""})

                        } catch (e) {
                            actions.setAuthError({error: "Unable to save token."})
                        }
        
                    } else {
                        actions.setAuthError({error: "Wrong password and/or email."})
                    }

                } catch (e) {
                    actions.setAuthError({error: "Error logging in."})
                }
        }
    }),
    logout: thunk(async (actions) => {
        try {
            await AsyncStorage.removeItem("access-token")
            actions.setAuthenticated({authenticated: false})
            actions.setAccessToken({accessToken: ""})
        } catch (e) {
            console.error("Error logging out. Error: ", e)
        }
    })
}

export default AuthModel