import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'


type Event = {
	id: string,
    title: string,
    start_date: number,
    end_date: number,
    start_time: number,
    end_time: number,
    participants: number[],
    location: string,
    description: string,
    notifications: number[],
    repeat: boolean,
}

const initialState: Event[][] = [[], [], []]

export const userSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		
		test: (state) => {
			//state = ''
		},


	},
})

export const { test } = userSlice.actions

export const userData = (state: RootState) => state

export default userSlice.reducer


