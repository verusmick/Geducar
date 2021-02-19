import { types } from "../types/types";
import { fetchWithoutToken } from "../utils/fetch";

export const startLoadCommentsByPostId = (postId) => {
    return async (dispatch) => {
        try {            
            const resp = await fetchWithoutToken(`posts/${postId}/comments`);
            const comments = await resp.json();
            dispatch(loadCommentsByPostId(comments));
        } catch (error) {
            console.log(error);
        }
    }
}

export const loadCommentsByPostId = (comments) => (
    {
        type: types.commentsLoadByPostId,
        payload: comments
    }
)

export const cleanComments = () => (
    {
        type: types.commentsClean
    }
)
