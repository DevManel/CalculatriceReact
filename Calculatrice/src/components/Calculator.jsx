import React, { useState } from 'react';
import Display from './Display.jsx';
import NumberPad from './NumberPad.jsx';
import OperatorPad from './OperatorPad.jsx';

const Calculator = () => {
    const [currentInput, setCurrentInput] = useState('');
    const [previousInput, setPreviousInput] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState(null);

    const handleNumberClick = (num) => {
        setCurrentInput(prev => prev + num);
    };

    const handleOperatorClick = (op) => {
        if (currentInput === '') return;
        setPreviousInput(currentInput);
        setCurrentInput('');
        setOperator(op);
    };

    const handleEqualClick = () => {
        if (currentInput === '' || previousInput === '') return;
        let computation;
        switch (operator) {
            case '+':
                computation = parseFloat(previousInput) + parseFloat(currentInput);
                break;
            case '-':
                computation = parseFloat(previousInput) - parseFloat(currentInput);
                break;
            case '*':
                computation = parseFloat(previousInput) * parseFloat(currentInput);
                break;
            default:
                return;
        }
        setResult(computation);
        setCurrentInput(String(computation));
        setPreviousInput('');
        setOperator('');
    };

    const handleReset = () => {
        setCurrentInput('');
        setPreviousInput('');
        setOperator('');
        setResult(null);
    };

    return (
        <div className="calculator">
            <h2>Calculatrice</h2>
            <Display currentInput={currentInput} result={result} />
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
