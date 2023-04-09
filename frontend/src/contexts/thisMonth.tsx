import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


const initial_canlendar = () => {
    let state: number[][] = [[], [], []] 
    var now = new Date();
    now = new Date(now.getFullYear(), now.getMonth(), 1);
    var first_day = new Date(now.getFullYear(), now.getMonth(), 1);
    const current_month = now.getMonth()
    var day_number = 1
    var first_day_name = now.toLocaleDateString(undefined, { weekday: 'long' })
    var tempo_date =  new Date();
    tempo_date = new Date(now.getFullYear(), now.getMonth(), 1);
    if(first_day_name === 'Monday'){
        for (let i = 0; i < 1; i++) {
            now.setDate(now.getDate() - 1);
                state[0] = [now.getDate(), ...state[0]]
        }
        now.setDate(now.getDate() + 1);
    }else if(first_day_name === 'Tuesday'){
        for (let i = 0; i < 2; i++) {
            now.setDate(now.getDate() - 1);
                state[0] = [now.getDate(), ...state[0]]
        }
        now.setDate(now.getDate() + 2);
    }else if(first_day_name === 'Wednesday'){
        for (let i = 0; i < 3; i++) {
            now.setDate(now.getDate() - 1);
                state[0] = [now.getDate(), ...state[0]]
        }
        now.setDate(now.getDate() + 3);
    }else if(first_day_name === 'Thursday'){
        for (let i = 0; i < 4; i++) {
            now.setDate(now.getDate() - 1);
                state[0] = [now.getDate(), ...state[0]]
        }
        now.setDate(now.getDate() + 4);
    }else if(first_day_name === 'Friday'){
        for (let i = 0; i < 5; i++) {
            now.setDate(now.getDate() - 1);
                state[0] = [now.getDate(), ...state[0]]
        }
        now.setDate(now.getDate() + 5);
    }else if(first_day_name === 'Saturday'){
        for (let i = 0; i < 6; i++) {
            now.setDate(now.getDate() - 1);
                state[0] = [now.getDate(), ...state[0]]
        }
        now.setDate(now.getDate() + 6);
    }
    while (now.getMonth() === current_month){

        now.setDate(now.getDate() + 1);
        var first_day_name = now.toLocaleDateString(undefined, { weekday: 'long' })




        if(first_day_name === 'Sunday'){
            state[1].push(day_number)
            day_number++
        }else if(first_day_name === 'Monday'){
            state[1].push(day_number)
            day_number++
        }else if(first_day_name === 'Tuesday'){
            state[1].push(day_number)
            day_number++
        }else if(first_day_name === 'Wednesday'){
            state[1].push(day_number)
            day_number++
        }else if(first_day_name === 'Thursday'){
            state[1].push(day_number)
            day_number++
        }else if(first_day_name === 'Friday'){
            state[1].push(day_number)
            day_number++
        }else if(first_day_name === 'Saturday'){
            state[1].push(day_number)
            day_number++
        }

    }
    var first_day_name = now.toLocaleDateString(undefined, { weekday: 'long' })

    if(first_day_name === 'Monday'){
        for (let i = 0; i < 6; i++) {
            state[2].push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Tuesday'){
        for (let i = 0; i < 5; i++) {
            state[2].push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Wednesday'){
        for (let i = 0; i < 4; i++) {
            state[2].push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Thursday'){
        for (let i = 0; i < 3; i++) {
            state[2].push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Friday'){
        for (let i = 0; i < 5; i++) {
            state[2].push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Saturday'){
        for (let i = 0; i < 1; i++) {
            state[2].push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }
    return state
}


let this_month_calendar: number[][]  = initial_canlendar();

export const calendarSlice = createSlice({
  name: 'this_month',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: this_month_calendar,
  reducers: {

    increment_month: () => {},
    decrement_month: () => {},

    //incrementByAmount: (state, action: PayloadAction<number>) => {
    //  state.push(action.payload)
    //},
  },
})

export const { increment_month, decrement_month } = calendarSlice.actions

export const selectCount = (state: RootState) => state

export default calendarSlice.reducer


