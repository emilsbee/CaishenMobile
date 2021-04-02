// External imports
import * as React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native';

// Internal imports
import Styles from "../../styles/base"
import {LightenDarkenColor} from "./helpers"

export interface ButtonProps {
    text:string, // Text to display on button
    onPress: (event: GestureResponderEvent) => void, // On press event
    height?:number,
    width?:number,
    borderRadius?:number,
    backgroundColor?:string,
    fontColor?:string,
    padding?:number
}
 
const Button: React.FC<ButtonProps> = ({text, onPress, height, width, borderRadius, backgroundColor, fontColor, padding}) => {
    
    const getBackgroundColor = ():string => {
        if (backgroundColor) {
            return backgroundColor
        } else {
            return Styles.background.accent
        }
    }

    return (
        <Pressable 
            onPress={onPress} 
            style={({ pressed }) => [
                styles.container,
                {
                    height: height ? height : "auto",
                    width: width ? width : "auto",
                    borderRadius: borderRadius ? borderRadius : 10,
                    backgroundColor: pressed ? LightenDarkenColor(getBackgroundColor(), -35) : getBackgroundColor(),
                }
            ]}
        >
            <Text 
                style={[
                    styles.text,
                    {
                        color: fontColor ? fontColor : "black"
                    }
                ]}
            >
                {text}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 9
    },
    text: {
        fontSize: Styles.fontSize.h8
    }
})

export default Button;