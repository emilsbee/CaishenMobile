// External imports
import { action, thunk, Thunk, Action } from "easy-peasy"
import AsyncStorage from '@react-native-async-storage/async-storage';

// Internal imports
import constants from "../../constants"

export interface AuthModelType {
    authError:string,
    setAuthError: Action<AuthModelType, {error:string}>,
    authenticated: boolean;
    login: Thunk<AuthModelType, {username:string, password:string}>;
    setLogin: Action<AuthModelType, {authenticated:boolean}>;
}

const AuthModel:AuthModelType = {
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
                  } catch (e) {
                    console.error("ERROR: ", e)
                  }

            } else {
                actions.setAuthError({error: "Wrong password and/or email."})
            }
        } catch (e) {
            console.error("ERROR: ",e)
        }
    
    }),
}

export default AuthModel