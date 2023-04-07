import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

/**
 
const init_calendar = () => {
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
                last_month = [now.getDate(), ...last_month]
        }
        now.setDate(now.getDate() + 1);
    }else if(first_day_name === 'Tuesday'){
        for (let i = 0; i < 2; i++) {
            now.setDate(now.getDate() - 1);
                last_month = [now.getDate(), ...last_month]
        }
        now.setDate(now.getDate() + 2);
    }else if(first_day_name === 'Wednesday'){
        for (let i = 0; i < 3; i++) {
            now.setDate(now.getDate() - 1);
                last_month = [now.getDate(), ...last_month]
        }
        now.setDate(now.getDate() + 3);
    }else if(first_day_name === 'Thursday'){
        for (let i = 0; i < 4; i++) {
            now.setDate(now.getDate() - 1);
                last_month = [now.getDate(), ...last_month]
        }
        now.setDate(now.getDate() + 4);
    }else if(first_day_name === 'Friday'){
        for (let i = 0; i < 5; i++) {
            now.setDate(now.getDate() - 1);
                last_month = [now.getDate(), ...last_month]
        }
        now.setDate(now.getDate() + 5);
    }else if(first_day_name === 'Saturday'){
        for (let i = 0; i < 6; i++) {
            now.setDate(now.getDate() - 1);
                last_month = [now.getDate(), ...last_month]
        }
        now.setDate(now.getDate() + 6);
    }
    while (now.getMonth() === current_month){

        now.setDate(now.getDate() + 1);
        var first_day_name = now.toLocaleDateString(undefined, { weekday: 'long' })
        
        


        if(first_day_name === 'Sunday'){
            this_month.push(day_number)
            day_number++
        }else if(first_day_name === 'Monday'){
            this_month.push(day_number)
            day_number++
        }else if(first_day_name === 'Tuesday'){
            this_month.push(day_number)
            day_number++
        }else if(first_day_name === 'Wednesday'){
            this_month.push(day_number)
            day_number++
        }else if(first_day_name === 'Thursday'){
            this_month.push(day_number)
            day_number++
        }else if(first_day_name === 'Friday'){
            this_month.push(day_number)
            day_number++
        }else if(first_day_name === 'Saturday'){
            this_month.push(day_number)
            day_number++
        }

    }
    var first_day_name = now.toLocaleDateString(undefined, { weekday: 'long' })

    if(first_day_name === 'Monday'){
        for (let i = 0; i < 6; i++) {
            next_month.push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Tuesday'){
        for (let i = 0; i < 5; i++) {
            next_month.push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Wednesday'){
        for (let i = 0; i < 4; i++) {
            next_month.push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Thursday'){
        for (let i = 0; i < 3; i++) {
            next_month.push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Friday'){
        for (let i = 0; i < 5; i++) {
            next_month.push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Saturday'){
        for (let i = 0; i < 1; i++) {
            next_month.push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }
        
}

 * 
 */