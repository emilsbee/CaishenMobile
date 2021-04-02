// External imports
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useStoreActions } from '../../store/store';

// Internal imports
import {Button} from "../Button"

export interface ProfileProps {
    
}
 
const Profile: React.FC<ProfileProps> = () => {
    const logout = useStoreActions(actions => actions.auth.logout)

    return (
        <View style={styles.container}>
            <Button text="Logout" onPress={() => logout()}/>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Profile;