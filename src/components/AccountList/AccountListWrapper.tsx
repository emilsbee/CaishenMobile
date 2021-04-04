// External imports
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Internal imports
import { useStoreActions, useStoreState } from '../../store/store';
import AccountList from "./AccountList"
import {getAccounts} from "../../store/models/account/helpers"
import Styles from "../../styles/base"

export interface AccountListWrapperProps {
    
}
 
const AccountListWrapper: React.FC<AccountListWrapperProps> = () => {
    // Local state
    const [error, setError] = React.useState("")
    const [refreshing, setRefreshing] = React.useState(false);

    // Store actions
    const setAccounts = useStoreActions(actions => actions.account.setAccounts)

    // Store state
    const accounts = useStoreState(state => state.account.accounts)
    const accessToken = useStoreState(state => state.auth.accessToken)

    React.useEffect(() => {
        getAccounts(accessToken).then(res => {
            setAccounts({accounts: res})
            setError("")
        }).catch(() => {
            setError("Couldn't fetch accounts.")
        })
    }, [])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getAccounts(accessToken).then(res => {
            setAccounts({accounts: res})
            setRefreshing(false)
            setError("")
        }).catch(() => {
            setRefreshing(false)
            setError("Couldn't fetch accounts.")
        })
      }, []);

    return (
        error.length > 0 ? 
            <View style={styles.errorContainer}>
                <Text style={styles.error}>
                    {error}
                </Text>
            </View>
            :
            <AccountList accounts={accounts} onRefresh={onRefresh} refreshing={refreshing}/>
    );
}

const styles = StyleSheet.create({
    errorContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }, 
    error: {
        color: Styles.fontColor.default.light,
        fontSize: Styles.fontSize.h4
    }
})
 
export default AccountListWrapper;