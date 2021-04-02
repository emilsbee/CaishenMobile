// External imports
import { action, thunk, Thunk, Action } from "easy-peasy"
import AsyncStorage from '@react-native-async-storage/async-storage';

// Internal imports
import constants from "../../constants"
import store from "../store"

export interface AccountType {
    id:string,
    name:string,
    balance:number,
    type:string,
    iban:string,
    payments:string[]
}

export interface AccountModelType {
    accounts: AccountType[],

    /**
     * Fetches accounts from api. The accounts fetched don't include payments
     * associated with those accounts.
     */
    getAccounts: Thunk<AccountModelType>,
    
    /**
     * Setter for accounts
     */
    setAccounts: Action<AccountModelType, {accounts:AccountType[]}>

    createAccount: Thunk<AccountModelType, {name:string, iban:string, type:string}>
}

const AccountModel:AccountModelType = {
    accounts: [],
    setAccounts: action((state, payload) => {
        state.accounts = payload.accounts
    }),
    getAccounts: thunk(async (actions, payload) => {
        let response = await fetch(constants.url+'/account/all', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVtaWxzYmVlIiwiaWF0IjoxNjE0NTQ0MjAyfQ.Wu8toHc36T5OnunY3cYSqwLvWOusnQlbMrdqxXAT1TY"
            },
        });

        let json = await response.json();
        console.log(json)
    }),
    createAccount: thunk(async (actions, payload) => {
        let response = await fetch(constants.url+'/account', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVtaWxzYmVlIiwiaWF0IjoxNjE0NTQ0MjAyfQ.Wu8toHc36T5OnunY3cYSqwLvWOusnQlbMrdqxXAT1TY"
            },
            body: JSON.stringify({
                name: payload.name,
                iban: payload.iban,
                type: payload.type
            })
        });
        const answer = await response.json()
        console.log(answer)
    })
}

export default AccountModel