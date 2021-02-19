import { types } from "../types/types";
import { fetchWithoutToken } from "../utils/fetch";

export const startLoadPostsByUser = (userId) => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithoutToken(`users/${userId}/posts`);
            const posts = await resp.json();
            dispatch(loadPostsByUser(posts));
        } catch (error) {
            console.log(error);
        }
    }
}

export const loadPostsByUser = (posts) => (
    {
        type: types.postsLoadByUserId,
        payload: posts
    }
)

export const userSetSelected = (user) => ({
    type: types.userSetSelected,
    payload: user
})

export const cleanPostsByUser = () => (
    {
        type: types.postsClean
    }
)
