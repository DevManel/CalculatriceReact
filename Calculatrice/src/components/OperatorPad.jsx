import React from 'react';

const OperatorPad = ({ onOperatorClick, onEqualClick, onReset }) => {
    return (
        <div className="operator-pad">
            <button onClick={() => onOperatorClick('+')}>+</button>
            <button onClick={() => onOperatorClick('-')}>-</button>
            <button onClick={() => onOperatorClick('*')}>*</button>
            <button onClick={onEqualClick}>=</button>
            <button onClick={onReset}>C</button>
        </div>
    );
};

export default OperatorPad;