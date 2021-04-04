// Internal imports
import constants from "../../../constants/constants"
import { AccountType } from "./account"

/**
 * Fetches accounts from api. The accounts fetched don't include payments
 * associated with those accounts.
 * @param {string} accessToken The api access token.
 * @returns {AccountType[]} An array of accounts.
 */
export const getAccounts = (accessToken:string):Promise<AccountType[]> => {
    const content = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: "Bearer "+ accessToken
    }
    }

    return fetch(constants.url+'/account/all', content)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            return json
        })
}

/**
 * Creates an account given the name, iban and type of account. 
 * @param accessToken Api access token.
 * @param name Name of the account.
 * @param iban OPTIONAL Iban of the account.
 * @param type Account type: bank, crypto, cash.
 * @param currency Account currency.
 * @param description Account description.
 * @returns An array that contains the account created. 
 */
export const createAccount = (accessToken:string, name:string, type:string, currency:string, description:string, iban?:string):Promise<AccountType[]> => {
    
    const content = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: "Bearer "+ accessToken
        },
        body: JSON.stringify({
            name,
            iban: iban ? iban : null,
            type,
            currency,
            description,
        })
    }

    return fetch(constants.url+'/account', content)
        .then((response) => response.json())
        .then((json) => {
            return json
        })
        .catch((error) => {
            console.error("Couldn't create a new account. Error: ", error)
        })

}