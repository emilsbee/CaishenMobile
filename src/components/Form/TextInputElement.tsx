// External imports
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

// Internal imports 
import Styles from "../../styles/base"

export interface CustomTextInputElementProps {
    text:string,
    onChangeText: (text:string) => void,
    multiline?:boolean,
    height?:number
}
 
/**
 * Form section element for single line text input. 
 * @param {string} text The text to display in the input. 
 * @param {(text:string) => void} onChangeText The callback called whenever user makes changes to text in input.
 */
const CustomTextInputElement: React.FC<CustomTextInputElementProps> = ({text, onChangeText, multiline, height}) => {
    const [textInputFocused, setTextInputFocused] = React.useState(false)

    return (
        <TextInput
            multiline={multiline ? true : false}
            onFocus={() => setTextInputFocused(true)} 
            onBlur={() => setTextInputFocused(false)}
            style={
                [
                    styles.sectionTextInput, 
                    {
                        borderColor: textInputFocused ? Styles.background.accent2 : "darkgrey",
                        height: height ? height : "auto"
                    }
                ]
            } 
            selectionColor={Styles.background.accent2}
            value={text}
            onChangeText={onChangeText}
        />
    );
}

const styles = StyleSheet.create({
    sectionTextInput: {
        padding: 10,
        borderRadius: 10,
        width: "100%",
        borderWidth: 1,
        fontSize: Styles.fontSize.h7,
        color: Styles.fontColor.default.light
    },
})

export default CustomTextInputElement;