const HANDLE_CHANGE = "HANDLE_CHANGE";
const ADD_CHORE = "ADD_CHORE";

var initialState = {
    chores: []
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case HANDLE_CHANGE:
            return Object.assign({}, state, {choresInput: action.payload});
        case ADD_CHORE: {
            return Object.assign({}, state, {chores: [...state.chores, action.payload], choresInput: ''})
        }

        default: 
            return state;
    }
    
}

export function handleInputChange(e) {
    return {
        type: HANDLE_CHANGE,
        payload: e
    }
}

export function addChore(chore) {
    return {
        type: ADD_CHORE,
        payload: chore
    }
}