import { useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default function FunctionUsingUseState(){
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h3>{count}</h3>
            <button style={{fontSize: 30, width: 40}} onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
            <button style={{fontSize: 30, width: 40}} onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
        </div>
    );
}
