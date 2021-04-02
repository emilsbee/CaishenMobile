import constants from "../../../constants";

/**
 * Given a non-empty password and username a login is performed in the api.
 * @param {string} username The username to use in login. Must be a non-empty string.
 * @param {string} password The password to use in login. Must be a non-empty string.
 * @returns Object indicating whether login was succesful and either an error message or api access token.
 */
export const login = async (username:string, password:string):Promise<{success:boolean, text:string}> => {
    const content = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    }

    try {
        let response = await fetch(constants.url+'/auth/login', content)
        
        if (response.status === 401) {
            return {
                success: false,
                text: "Wrong password/username."
            }
        } else {
            let accessToken = await response.json();
            return {
                success: true,
                text: accessToken
            }
        }
    } catch (e) {
        return {
            success: false,
            text: "Bad request."
        }
    }
    
}