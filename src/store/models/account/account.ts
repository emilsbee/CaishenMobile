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
    setAccounts: Action<AccountModelType, {accounts:AccountType[]}>
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
    
}

export default AccountModel