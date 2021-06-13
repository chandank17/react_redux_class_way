import { createStore } from 'redux'

const initialState = {
    age: 18
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, age: ++state.age };

        case 'SUB':
            return { ...state, age: --state.age };

        default:
            return state;
    }
}

const store = createStore(myReducer);

export default store;

