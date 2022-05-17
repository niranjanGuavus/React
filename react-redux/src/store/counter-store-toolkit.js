import {createSlice, configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const intialState = {counter: 0,showCounter: true};
const counterSlice = createSlice({
    name: 'counter',
    intialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    } 

})



//const store = createStore(counterSlice.reducer);

// for merge multiple reducer into the store we can use combine reducer from redux or 
//configureStore from toolkit
const countStore = configureStore({
    reducer: counterSlice.reducer
})
//reducer: {counter:counterSlice.reducer, soon} -> for multiple reducer

export const counterActions = counterSlice.actions;
export default countStore;
