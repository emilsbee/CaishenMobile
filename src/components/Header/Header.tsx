// External imports
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Internal imports
import Styles from "../../styles/base"

export interface HeaderProps {
    title:string
}
 
const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    }, 
    title: {
        fontSize: Styles.fontSize.h4,
    }
})
 
export default Header;