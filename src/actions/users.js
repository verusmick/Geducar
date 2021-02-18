import { types } from "../types/types";
import { fetchWithoutToken } from "../utils/fetch";

export const startLoadUsers = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithoutToken('clients');
            const users = await resp.json();
            dispatch(loadUsers(users));
        } catch (error) {
            console.log(error);
        }
    }
}

export const loadUsers = (users) => (
    {
        type: types.usersLoad,
        payload: users
    }
)
