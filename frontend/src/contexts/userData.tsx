import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'


const save_storage = (user_data: user_data, token: any) => {
	console.log(user_data)
	console.log(token)

	localStorage.setItem("user_is_authed", JSON.stringify(true))
	localStorage.setItem("user_data", JSON.stringify(user_data))
	localStorage.setItem("user_token", token)
}





type user_data = {
	username: String,
	email: String,
}

type Event = {
	id: string,
    title: string,
    start_date: Date,
    end_date: Date,
    start_time: Date,
    end_time: Date,
    participants: number[],
    location: string,
    description: string,
    notifications: number[],
    repeat: boolean,
}

const events: Event[] = [[], [], []]

const init_data = () => {
	if (localStorage.getItem("user_is_authed") === "true"){
		const user_data: string = localStorage.getItem("user_data")  || ""
		const user_token: string = localStorage.getItem("user_token")  || ""
		return {
			is_authed: true,
			user_data: JSON.parse(user_data),
			events: events,
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
			events: events,
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
		},
		init_events: (state, {payload}) => {
			console.log(payload)
	


			//const start_month = new Date(payload.start_date*1000).getMonth()
			//let events: Event[][] = [[], [], []]
			//for (let i = 0; i < payload.events.length; i++) {
			//	
			//	console.log(events)
//
			//	if(new Date (payload.events[i].start_date*1000).getMonth() === start_month){
			//		events[0].push(payload.events[i])
			//		events[0][events[0].length-1].start_date = new Date (payload.events[i].start_date*1000)
			//		events[0][events[0].length-1].end_date = new Date (payload.events[i].end_date*1000)
			//	}else if(new Date(payload.events[i].start_date*1000).getMonth() === start_month+1){
			//		events[1].push(payload.events[i])
			//		events[1][events[1].length-1].start_date = new Date (payload.events[i].start_date*1000)
			//		events[1][events[1].length-1].end_date = new Date (payload.events[i].end_date*1000)
			//	}else if(new Date(payload.events[i].start_date*1000).getMonth() === start_month+2){
			//		events[2].push(payload.events[i])
			//		events[2][events[2].length-1].start_date = new Date (payload.events[i].start_date*1000)
			//		events[2][events[2].length-1].end_date = new Date (payload.events[i].end_date*1000)
			//	}
//
//
//
			//	//new Date (payload.events[i].start_date*1000)
			//	
			//}

			console.log(events)
			state.events = payload.events
			return state
		},

	},
})

export const { logging_in, success, error, added_event, init_events } = userSlice.actions

export const userData = (state: RootState) => state

export default userSlice.reducer


