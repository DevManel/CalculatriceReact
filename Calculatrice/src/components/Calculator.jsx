import React, { useReducer } from 'react';
import Display from './Display.jsx';
import NumberPad from './NumberPad.jsx';
import OperatorPad from './OperatorPad.jsx';

const initialState = {
    currentInput: '',
    previousInput: '',
    operator: '',
    result: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NUMBER':
            return { ...state, currentInput: state.currentInput + action.payload };
        case 'SET_OPERATOR':
            if (state.currentInput === '') return state;
            return {
                ...state,
                previousInput: state.currentInput,
                currentInput: '',
                operator: action.payload,
            };
        case 'EQUAL':
            if (state.currentInput === '' || state.previousInput === '') return state;
            let computation;
            switch (state.operator) {
                case '+':
                    computation = parseFloat(state.previousInput) + parseFloat(state.currentInput);
                    break;
                case '-':
                    computation = parseFloat(state.previousInput) - parseFloat(state.currentInput);
                    break;
                case '*':
                    computation = parseFloat(state.previousInput) * parseFloat(state.currentInput);
                    break;
                default:
                    return state;
            }
            return {
                ...state,
                result: computation,
                currentInput: String(computation),
                previousInput: '',
                operator: '',
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const Calculator = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleNumberClick = (num) => {
        dispatch({ type: 'ADD_NUMBER', payload: num });
    };

    const handleOperatorClick = (op) => {
        dispatch({ type: 'SET_OPERATOR', payload: op });
    };

    const handleEqualClick = () => {
        dispatch({ type: 'EQUAL' });
    };

    const handleReset = () => {
        dispatch({ type: 'RESET' });
    };

    return (
        <div className="calculator">
            <h2>Calculatrice</h2>
            <Display currentInput={state.currentInput} result={state.result} />
            <div className="pad-container">
                <NumberPad onClick={handleNumberClick} />
                <OperatorPad
                    onOperatorClick={handleOperatorClick}
                    onEqualClick={handleEqualClick}
                    onReset={handleReset}
                />
            </div>
        </div>
    );
};

export default Calculator;
