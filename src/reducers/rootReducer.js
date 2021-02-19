import { combineReducers } from 'redux';
import { commentsReducer } from './commentsReducer';
import { postsReducer } from './postsReducer';
import { uiReducer } from './uiReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
})

