import { types } from "../types/types";

const initialState = {
    comments: []    
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.commentsLoadByPostId:
            return {
                ...state,
                comments: [...action.payload]
            }      
        case types.commentsClean:
            return initialState
        default:
            return state;
    }

}
