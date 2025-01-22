import React from 'react';

const Display = ({ currentInput, result }) => {
    return (
        <div className="display">
            <p>{result !== null ? `Résultat : ${result}` : currentInput || '0'}</p>
        </div>
    );
};

export default Display;