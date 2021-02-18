import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './components/routes/AppRouter'
import { store } from './store/store'

export const GeducarApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>

    )
}
