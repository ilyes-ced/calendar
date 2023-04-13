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

const initialState = {
  loading: false,
  user_data: {},
  token: null,
  error: null,
  success: false,
}



export const calendarSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    
    logging_in: (state) => {
      alert('hello there')
      state.loading = true
      state.error = null
    },
    success (state, { payload }) {
      state.loading = false
      state.success = true
      state.user_data = payload.user_data
      state.token = payload.token
    },
    error: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

  },
})

export const { logging_in, success, error } = calendarSlice.actions

export const selectCount = (state: RootState) => state

export default calendarSlice.reducer


