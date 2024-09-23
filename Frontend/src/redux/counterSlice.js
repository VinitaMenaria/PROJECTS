// step 1
import {createSlice} from '@reduxjs/toolkit'
// step 2
const initialState={
    count:0
}
// step 3
const counterSlice=createSlice({
    name:'count',
    initialState,    //or initialState
    reducers:{
        increment:(state)=>{
            console.log(state)
            state.count+=1
    },
    decrement:(state)=>{
        state.count-=1
    }
}
})
// step 4
// export=>actions reducer 
console.log(counterSlice)
console.log(counterSlice.action)
export const {increment,decrement}=counterSlice.actions

export default counterSlice.reducer

// note: const [count.setCount]=useStae(0)

