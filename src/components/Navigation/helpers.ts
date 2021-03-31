import AsyncStorage from '@react-native-async-storage/async-storage';

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