import {createStore} from 'redux';

const counterReducer = (state={counter:0}, action) => {

    if(action.type === 'increment') {
        return { counter:state.counter + action.value};
    }

    if(action.type === 'decrement') {
        return { counter:state.counter - action.value};
    }

    return state;
}

const counterStore = createStore(counterReducer);

export default counterStore;