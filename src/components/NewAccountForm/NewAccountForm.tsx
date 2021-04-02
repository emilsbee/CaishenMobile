// External imports
import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Keyboard } from 'react-native';

// Internal imports
import Styles from "../../styles/base"
import Section from "./NewAccountFormSection"

export interface NewAccountFormProps {
    
}
 
const NewAccountForm: React.FC<NewAccountFormProps> = () => {
    // Local state
    const [selected, setSelected] = React.useState("")
    

    return (
        <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
            <Section title="Account name">
                <TextInput
                    onFocus={() => setSelected("name")} 
                    onBlur={() => setSelected("")}
                    style={
                        [
                            styles.sectionInput, 
                            {
                                borderColor: selected === "name" ? Styles.background.accent2 : "darkgrey",
                            }
                        ]
                    } 
                    selectionColor={Styles.background.accent2}
                />
            </Section>
        </Pressable>
    );
}
 
const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
    }, 
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

export default NewAccountForm;