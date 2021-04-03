// External imports
import React from 'react';
import { StyleSheet, Pressable, Keyboard, ScrollView, View } from 'react-native';

// Internal imports
import Styles from "../../styles/base"
import Section from "../Form/Section"
import SelectValueElement from "../Form/SelectValueElement"
import TextInput from "../Form/TextInputElement"
import Dropdown from "../Form/DropdownElement"
import {Button} from "../Form/../Button"

export interface NewAccountFormProps {
    
}
 
const NewAccountForm: React.FC<NewAccountFormProps> = () => {
    // Local state
    const [accountNameInput, setAccountNameInput] = React.useState("")
    const [accountType, setAccountType] = React.useState("")
    const [ibanInput, setIbanInput] = React.useState("")
    const [currency, setCurrency] = React.useState("")
    const [description, setDescription] = React.useState("")

    return (
        <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
            <ScrollView>
                <Section title="Name">
                    <TextInput
                        onChangeText={text => setAccountNameInput(text)}
                        text={accountNameInput}
                    />
                </Section>
                <Section title="Type">
                    <SelectValueElement values={["Bank", "Crypto", "Cash"]} onPick={value => setAccountType(value.toString())}/>
                </Section>
                <View style={{zIndex:100}}>
                    <Section title="Currency" containerStyle={{height:100}}>
                        <Dropdown values={["EUR", "USD", "GBP"]} onPick={value => setCurrency(value.toString())} currentValue={currency}/>
                    </Section>
                </View>

                { accountType === "Bank" &&
                    <Section title="IBAN (optional)">
                        <TextInput
                            onChangeText={text => setIbanInput(text)}
                            text={ibanInput}
                        />
                    </Section>
                }
                <Section title="Description">
                    <TextInput
                        onChangeText={text => setDescription(text)}
                        text={description}
                        multiline={true}
                        height={100}
                    />
                </Section>
                <Section title="" containerStyle={{alignItems: "center"}}>
                    <Button 
                        text="Create" 
                        onPress={() => console.log("pressed")} 
                        backgroundColor={Styles.background.accent2} 
                        fontColor={Styles.fontColor.default.light}
                        width={"80%"}
                    />
                </Section>
            </ScrollView>
        </Pressable>
    );
}
 
const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
})

export default NewAccountForm;