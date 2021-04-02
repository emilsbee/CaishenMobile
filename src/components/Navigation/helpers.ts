import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Fetches the api access token from async storage.
 * @returns {string} Either the api access token or null if there is no token.
 */
export const checkAccessToken = async ():Promise<string> => {
    try {
        const value = await AsyncStorage.getItem('access-token')
        if(value !== null) {
            return value
        } else {
            return null
        }
    } catch(e) {
        return null
    }
}