import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: {
        accessToken: localStorage.accessToken || null,
        name: '',
        userId: localStorage.userId || 0,
        loggedIn: false,
        statusMessage: '',
    },
}

export const user = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setAccessToken: (state, action) => {
            const { accessToken } = action.payload
            state.login.accessToken = accessToken
            localStorage.setItem('accessToken', accessToken)
        },
        setUserId: (state, action) => {
            const { userId } = action.payload
            state.login.userId = userId
            localStorage.setItem('userId', userId)
        },
        setStatusMessage: (state, action) => {
            const { statusMessage } = action.payload
            state.login.statusMessage = statusMessage
        },
        toggleLoggedState: (state, action) => {
            state.login.loggedIn = action.payload
        },
        logout: (state, action) => {
            state.login.userId = 0
            state.login.accessToken = null
            localStorage.removeItem('accessToken')
            localStorage.removeItem('userId')
        },
    },
})