// External imports
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Internal imports
import Styles from "../../styles/base"

export interface NewAccountFormSectionProps {
    children:React.ReactNode,
    title:string
}
 
const NewAccountFormSection: React.FC<NewAccountFormSectionProps> = ({children, title}) => {
    return (
        <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                    {title}
                </Text>
                {children}
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "5%",
    },
    sectionTitle: {
        fontSize: Styles.fontSize.h7,
        color: Styles.fontColor.default.light,
        marginBottom: 15,
    },
    sectionInput: {
        padding: 10,
        borderRadius: 10,
        width: "100%",
        borderWidth: 1,
        fontSize: Styles.fontSize.h7,
        color: Styles.fontColor.default.light
    }
})
 
export default NewAccountFormSection;