import { types } from "../types/types";

const initialState = {
    posts: []    
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.postsLoadByUserId:
            return {
                ...state,
                posts: [...action.payload]
            }      
        case types.postsClean:
            return initialState
        default:
            return state;
    }

}
