// External imports
import { action, thunk, Thunk, Action } from "easy-peasy"
import AsyncStorage from '@react-native-async-storage/async-storage';

// Internal imports
import constants from "../../constants"

export interface AuthModelType {
    accessToken:string,
    
    /**
     * Setter for accessToken.
     */
    setAccessToken: Action<AuthModelType, {accessToken:string}>,

    authError:string,
    
    /**
     * Setter for authError.
     */
    setAuthError: Action<AuthModelType, {error:string}>,

    authenticated: boolean;

    /**
     * Attempts to login with the provided username and password. 
     * If succesful login is made, then authenticated is set to true,
     * the returned access token is saved in local storage and local store.
     * Otherwise an authError is set.
     */
    login: Thunk<AuthModelType, {username:string, password:string}>;

    /**
     * Attempts to logout. Sets authenticated to false, removes 
     * access token from local storage and local store.
     */
    logout: Thunk<AuthModelType>,

    /**
     * Setter for authenticated
     */
    setLogin: Action<AuthModelType, {authenticated:boolean}>;
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
    setLogin: action((state, payload) => {
        state.authenticated = payload.authenticated
    }),
    login: thunk(async (actions, payload) => {
        const {username, password} = payload

        try {
            let response = await fetch(constants.url+'/auth/login', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username,
                  password
                })
            });
    
            let json = await response.json();

            if (json.accessToken) {
                actions.setLogin({authenticated: true}) 

                try {
                    await AsyncStorage.setItem('access-token', json.accessToken)
                    actions.setAccessToken({accessToken: json.accessToken})
                } catch (e) {
                actions.setAuthError({error: "Unable to save token."})
                }

            } else {
                actions.setAuthError({error: "Wrong password and/or email."})
            }
        } catch (e) {
            actions.setAuthError({error: "Bad request."})
        }
    }),
    logout: thunk(async (actions) => {
        try {
            await AsyncStorage.removeItem("access-token")
            actions.setLogin({authenticated: false})
            actions.setAccessToken({accessToken: ""})
        } catch (e) {
            actions.setAuthError({error: "Unable to save token."})
        }
    })
}

export default AuthModel