// External imports
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

// Internal imports
import Styles from "../../styles/base"

export interface SectionProps {
    children:React.ReactNode,
    title:string,
    containerStyle?:{},
}
 
/**
 * A section wrapper for form creation. Includes a title above the given input component 
 * or otherwise called input element in this context.  
 * @param {React.ReactNode} children The input element component to render in the section.
 * @param {string} title The title displayed above input.
 */
const Section: React.FC<SectionProps> = ({children, title, containerStyle}) => {
    return (
        <View style={[styles.sectionContainer, {...containerStyle}]}>
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
        // height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "5%",
    },
    sectionTitle: {
        fontSize: Styles.fontSize.h7,
        color: Styles.fontColor.default.light,
        marginBottom: 15,
    }
})
 
export default Section;