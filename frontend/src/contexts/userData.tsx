import { createSlice } from '@reduxjs/toolkit'
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
}

const initialState = {
	is_authed: false,
	user_data: {},
	events: {},
	tasks: {},
	contacts: {},
	token: null,
	error: null,
	success: false,
	loading: false,
}


console.log(initialState)
export const userSlice = createSlice({
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
			state.is_authed = true
			state.user_data = payload.user_data
			state.token = payload.token
		},
		error: (state, { payload }) => {
			state.loading = false
			state.error = payload
		},
		log: (state, {payload}) => {
			alert(payload)
			alert("payload")
			console.log(payload)
		}

	},
})

export const { logging_in, success, error, log } = userSlice.actions

export const userData = (state: RootState) => state

export default userSlice.reducer


