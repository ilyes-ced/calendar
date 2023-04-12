import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type event = {
    title: string
}
type task = {
    title: string
}
type contact = {
    title: string
}


type user_data = {
    username: String,
    email: String,
    events: event,
    tasks: task,
    contacts: contact,
}




export const calendarSlice = createSlice({
  name: 'this_month',
  initialState: null,
  reducers: {
    
    test: (state) => {

    },

  },
})

export const { test } = calendarSlice.actions

export const selectCount = (state: RootState) => state

export default calendarSlice.reducer


