// External imports
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useStoreActions } from '../../store/store';

// Internal imports
import {Button} from "../Button"
import Styles from "../../styles/base"

export interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    const createAccount = useStoreActions(actions => actions.account.createAccount)
    const getAccounts = useStoreActions(actions => actions.account.getAccounts)
    
    return (
        <View style={styles.container}>
            <Text>
                Home 
            </Text>
            <Button text="add" onPress={() => createAccount({name: "React", type: "Crypto", iban: null})}/>
            <Button text="get" onPress={() => getAccounts()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Styles.background.default,
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
})
 
export default Home;