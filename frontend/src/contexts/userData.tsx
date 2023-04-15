import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'


const save_storage = (user_data: user_data, token: any) => {
	console.log(user_data)
	console.log(token)

	localStorage.setItem("user_is_authed", JSON.stringify(true))
	localStorage.setItem("user_data", JSON.stringify(user_data))
	localStorage.setItem("user_token", token)
}


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

function init_data(){
	if (localStorage.getItem("user_is_authed") === "true"){
		const user_data: string = localStorage.getItem("user_data")  || ""
		const user_token: string = localStorage.getItem("user_token")  || ""
		return {
			is_authed: true,
			user_data: JSON.parse(user_data),
			events: {},
			tasks: {},
			contacts: {},
			token: user_token,
			error: null,
			success: true,
			loading: false,
		}
	}else{
		return {
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
	}
}



export const userSlice = createSlice({
	name: 'auth',
	initialState: init_data(),
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
			console.log(payload)
			save_storage(payload.user_data, payload.token)
		},
		error: (state, { payload }) => {
			state.loading = false
			state.error = payload
		},
		added_event: (state, {payload}) => {
			alert(payload)
			alert("payload")
			console.log(payload)
		}

	},
})

export const { logging_in, success, error, added_event } = userSlice.actions

export const userData = (state: RootState) => state

export default userSlice.reducer


