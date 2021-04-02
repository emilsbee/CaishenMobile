// External imports
import  React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Internal imports
import { AccountType } from '../../store/models/account/account';
import Styles from "../../styles/base"

export interface AccountItemProps {
    account: AccountType
}
 
const AccountItem: React.FC<AccountItemProps> = ({account}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {account.name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {   
        width: "100%",
        height: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        // borderBottomColor: "darkgrey",
        // borderBottomWidth: .7,
        paddingLeft: "10%"
    }, 
    name: {
        color: Styles.fontColor.default.light,
        fontSize: Styles.fontSize.h5
    }
})
 
export default AccountItem;