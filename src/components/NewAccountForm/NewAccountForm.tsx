// External imports
import React from 'react';
import { StyleSheet, Pressable, Keyboard, ScrollView, View, KeyboardAvoidingView, Platform, Text } from 'react-native';

// Internal imports
import Styles from "../../styles/base"
import Section from "../Form/Section"
import SelectValueElement from "../Form/SelectValueElement"
import TextInput from "../Form/TextInputElement"
import Dropdown from "../Form/DropdownElement"
import {Button} from "../Form/../Button"
import { useStoreActions, useStoreState } from '../../store/store';
import { createAccount } from '../../store/models/account/helpers';
import { useNavigation } from '@react-navigation/native';
import { validateInput } from './helpers';

export interface NewAccountFormProps {
    
}
 
const NewAccountForm: React.FC<NewAccountFormProps> = () => {
    const navigation = useNavigation()

    // Store actions
    const addAccount = useStoreActions(actions => actions.account.addAccount)

    // Store state
    const accessToken = useStoreState(state => state.auth.accessToken)

    // Local state
    const [name, setname] = React.useState("")
    const [type, settype] = React.useState("")
    const [iban, setiban] = React.useState("")
    const [currency, setCurrency] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [error, setError] = React.useState("")

    const handleCreateAccount = () => {
        const {valid, validationError} = validateInput(name, type, currency, description, iban)
        
        if (valid) {
            createAccount(accessToken, name, type, currency, description, iban)
                .then(accounts => {
                    addAccount({account: accounts[0]})
                    navigation.goBack()
                })
                .catch(e => {
                    navigation.goBack()
                })
        } else {
            setError(validationError)
        }
    }

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
                <ScrollView>
                    <View style={styles.errorContainer}>
                        <Text style={styles.error}>
                            {error ? error : ""}
                        </Text>
                    </View>

                    <Section title="Name">
                        <TextInput
                            onChangeText={text => setname(text)}
                            text={name}
                        />
                    </Section>
                    <Section title="Type">
                        <SelectValueElement values={["Bank", "Crypto", "Cash"]} onPick={value => settype(value.toString())}/>
                    </Section>
                    <View>
                        <Section title="Currency">
                            <Dropdown values={["EUR", "USD", "GBP"]} onPick={value => setCurrency(value.toString())} currentValue={currency}/>
                        </Section>
                    </View>

                    { type === "Bank" &&
                        <Section title="IBAN (optional)">
                            <TextInput
                                onChangeText={text => setiban(text)}
                                text={iban}
                            />
                        </Section>
                    }

                    <Section title="Description" >
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
                            onPress={handleCreateAccount} 
                            backgroundColor={Styles.background.accent2} 
                            fontColor={Styles.fontColor.default.light}
                            width={"80%"}
                        />
                    </Section>
                </ScrollView>
            </Pressable>
        </KeyboardAvoidingView>
    );
}
 
const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    errorContainer: {
        height: 30,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end"
    }, 
    error: {
        fontSize: Styles.fontSize.h6,
        color: Styles.fontColor.error
    }
})

export default NewAccountForm;