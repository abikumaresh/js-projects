const contactsIntitalState = []
const contactsReducer = (state = contactsIntitalState, action) => {
    switch (action.type) {
        case 'SET_CONTACTS' : {
            return [...action.payload]
        }
        case 'ADD_CONTACT' : {
            return [...state, action.payload]
        }
        case 'CLEAR_CONTACTS' : {
            return []
        }
        default: {
            return [...state]
        }
    }
}

export default contactsReducer