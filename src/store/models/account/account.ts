// External imports
import { action, Action } from "easy-peasy"

// Internal imports

export interface AccountType {
    id:string,
    name:string,
    balance:number,
    type:string,
    iban:string,
}

export interface AccountModelType {
    accountError:string,
    
    /**
     * Setter for account error.
     * @param {string} error The error message.
     */
    setAccountError: Action<AccountModelType, {error:string}>

    accounts: AccountType[],
    
    /**
     * Setter for accounts.
     * @param {AccountType[]} accounts The array of accounts.
     */
    setAccounts: Action<AccountModelType, {accounts:AccountType[]}>,

    /**
     * Adds account to the accounts currently stored in the store.
     * @param {AccountType} account The account to add to the store account array.
     */
    addAccount: Action<AccountModelType, {account:AccountType}>
}

const AccountModel:AccountModelType = {
    accountError: "",
    setAccountError: action((state, payload) => {
        state.accountError = payload.error
    }),

    accounts: [],
    setAccounts: action((state, payload) => {
        state.accounts = payload.accounts
    }),
    addAccount: action((state, payload) => {
        state.accounts.push(payload.account)
    })
}

export default AccountModel