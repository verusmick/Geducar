import { types } from "../types/types";

const initialState = {
    users: [],
    selected: null
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.usersLoad:
            return {
                ...state,
                users: [...action.payload]
            }      
        default:
            return state;
    }

}
