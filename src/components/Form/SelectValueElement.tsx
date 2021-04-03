// External imports
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

// Internal imports
import Styles from "../../styles/base"

export interface SelectValueElementProps {
    values:(string | number )[],
    onPick:(value:(string | number)) => void
}
 
/**
 * Form element that displays given values as seperate boxes and lets the user to select one of them. This element
 * must be used by wrapping it in the Section component. 
 * @param {(string | number)[]} values An array of strings or numbers which are displayed as selectable options.
 * @param {(value: (string | number)) => void} onPick Callback function that is called whenever an option is selected.
 */
const SelectValueElement: React.FC<SelectValueElementProps> = ({values, onPick}) => {
    // Local state
    const [selected, setSelected] = React.useState<(string | number)>("")

    return (
        <View style={styles.container}>
            {values.length !== 0 &&
                values.map(value => {
                    return (
                        <Pressable 
                            style={[
                                styles.textContainer,
                                {
                                    borderColor: selected === value ? Styles.background.accent2 : "darkgrey"
                                }
                            ]} 
                            onPress={() => {
                                setSelected(value)
                                onPick(value)
                            }}
                            key={value}
                        >
                            <Text style={styles.text}>
                                {value}
                            </Text>
                        </Pressable>
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textContainer: {
        padding: 7,
        borderWidth: 1,
        borderRadius: 10,
    },
    text: {
        color: Styles.fontColor.default.light,
        fontSize: Styles.fontSize.h8
    }
})
 
export default SelectValueElement;