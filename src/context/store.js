import { configureStore } from '@reduxjs/toolkit'
import usersSlice, { addToUsers } from './usersSlice'
import texSlice from './texSlice'
import themSlice from './themSlice'


export const store = configureStore({
    reducer: {
        users: usersSlice,
        text: texSlice,
        theme: themSlice
    },
})