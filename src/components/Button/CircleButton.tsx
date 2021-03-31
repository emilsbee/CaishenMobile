// External imports
import * as React from 'react';
import { GestureResponderEvent } from 'react-native';

// Internal imports
import Button from "./Button"

export interface CircleButtonProps {
    radius:number,
    text:string,
    onPress: (event: GestureResponderEvent) => void
}
 
const CircleButton: React.FC<CircleButtonProps> = ({onPress, text, radius}) => {
    return (
        <Button onPress={onPress} text={text} height={radius} width={radius} borderRadius={radius/2}/>
    );
}
 
export default CircleButton;