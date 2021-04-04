// External imports
import  React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable, ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Internal imports
import {AccountType} from "../../store/models/account/account"
import AccountItem from './AccountItem';
import Styles from "../../styles/base"

export interface AccountListProps {
    accounts: AccountType[]
    onRefresh: () => void,
    refreshing:boolean
}
 
const AccountList: React.FC<AccountListProps> = ({accounts, onRefresh, refreshing}) => {


    const navigation = useNavigation()
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView

                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor={Styles.background.accent2}
                    />
                }
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Accounts list 
                    </Text>
                    <Pressable 
                        onPress={() => {
                            navigation.navigate("new-account-form")
                        }}
                    >
                        <Text 
                            style={styles.buttonText}
                        >
                            +
                        </Text>
                    </Pressable>
                </View>
                {accounts.length !== 0 && accounts.map(account => {
                    return (
                        <AccountItem key={account.id} account={account}/>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
}
 
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: "20%",
    },
    titleContainer: {
        height: 60,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "8%",
        paddingLeft: "10%"
    },
    title: {
        color: Styles.fontColor.default.light,
        fontSize: Styles.fontSize.h3,
        fontWeight: "500"
    },
    addAccount: {
        color: Styles.fontColor.default.light,
        fontSize: Styles.fontSize.h1
    },
    buttonContainer: {

    },
    buttonText: {
        color: Styles.fontColor.accent,
        fontSize: 35,
        fontWeight: "500"
    }
})

export default AccountList;