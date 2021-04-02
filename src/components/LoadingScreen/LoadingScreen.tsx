// External imports
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Internal imports
import Styles from "../../styles/base"

export interface LoadScreenProps {
    
}
 
const LoadScreen: React.FC<LoadScreenProps> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Loading
            </Text>
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
        alignItems: "center",
        backgroundColor: Styles.background.default
    }, 
    text: {
        fontSize: 40
    }
})
 
export default LoadScreen;