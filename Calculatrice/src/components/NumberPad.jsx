import React from 'react';

const NumberPad = ({ onClick }) => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return (
        <div className="number-pad">
            {numbers.map((num) => (
                <button key={num} onClick={() => onClick(num)}>{num}</button>
            ))}
        </div>
    );
};

export default NumberPad;