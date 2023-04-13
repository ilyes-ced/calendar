import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

var offset = 0


const append = (ele: number) => {

}
const prepend = (ele: number) => {

}

const initial_canlendar = (months_offset: number) => {
    let state: number[][] = [[], [], []] 
    var now = new Date();
    now.setMonth(now.getMonth()+months_offset)
    now = new Date(now.getFullYear(), now.getMonth(), 1);
    const current_month = now.getMonth()
    var first_day_name = now.toLocaleDateString(undefined, { weekday: 'long' })

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
        state[1].push(now.getDate())
        now.setDate(now.getDate() + 1);
    }

    first_day_name = now.toLocaleDateString(undefined, { weekday: 'long' })
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




let this_month_calendar: number[][]  = initial_canlendar(0);

export const calendarSlice = createSlice({
  name: 'this_month',
  initialState: this_month_calendar,
  reducers: {

    increment_month: (state) => {
        offset++
        state = initial_canlendar(offset)
        return state
    },
    
    decrement_month: (state) => {
        offset--
        state = initial_canlendar(offset)
        return state
    },

    reset_month: (state) => {
        offset = 0
        state = initial_canlendar(offset)
        return state
    },
  },
})

export const { increment_month, decrement_month, reset_month } = calendarSlice.actions

export const calendarData = (state: RootState) => state

export default calendarSlice.reducer


