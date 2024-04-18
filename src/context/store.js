import { configureStore } from '@reduxjs/toolkit'
import usersSlice, { addToUsers } from './usersSlice'
import texSlice from './texSlice'


export const store = configureStore({
    reducer: {
        users: usersSlice,
        text: texSlice
    },
})