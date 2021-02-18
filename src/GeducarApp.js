import React from 'react'
import { Provider } from 'react-redux'
import { Users } from './components/users/Users'
import { store } from './store/store'

export const GeducarApp = () => {
    return (
        <Provider store={store}>
            <Users />
        </Provider>

    )
}
