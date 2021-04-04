

export const validateInput = (
    name:string,
    type:string,
    currency:string,
    description:string,
    iban?:string
):{validationError:string, valid:boolean} => {

    if (!name || name.trim().length === 0) { // name is invalid
        return ({validationError: "You must provide accout name", valid: false})
    } else if (!type || type.trim().length === 0) { // type is invalid
        return ({validationError: "You must provide accout type", valid: false})
    } else if (!currency || currency.trim().length === 0) { // currency is invalid
        return ({validationError: "You must provide accout currency", valid: false})
    } else if (!description || description.trim().length === 0) { // description is invalid
        return ({validationError: "You must provide accout description", valid: false})
    } else if (iban && iban.trim().length === 0) { // iban invalid
        return ({validationError: "You must provide a valid iban", valid: false})
    } else {
        return ({validationError: "", valid: true})
    }
}

