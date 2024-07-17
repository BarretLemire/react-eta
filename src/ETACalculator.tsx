import React,  { useState } from 'react';

const ETACalculator: React.FC = () => {
    const [speed, setSpeed] = useState<number | string>('');
    const [distance, setDistance] = useState<number | string>('');
    const [eta, setEta] = useState<string>('');
    const [error, setError] = useState<string>('');


    const handleCalculate = () => {
        const numericSpeed = Number(speed);
        const numericDistance = Number(distance);

        if (numericSpeed <= 0) {
            setError('Speed must be greater than 0');
            setEta('');
        }   else if (numericDistance < 0) {
            setError('Distance cannot be negative');
            setEta('');
        }   else {
            setError('');
            const time = numericDistance / numericSpeed;
            const hours = Math.floor(time);
            const minutes = Math.floor((time - hours) * 60);
            setEta(`${hours} hours and ${minutes} minutes`);
        }
    };
    
    
    
    return (
        <div>
            <h1>ETA Calculator</h1>
            <div>
                <label>
                    Speed (mph):
                    <input
                        type="number"
                        value={speed}
                        onChange={(e) => setSpeed(Number(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <label>
                    Distance (miles):
                    <input
                        type="number"
                        value={distance}
                        onChange={(e) => setDistance(Number(e.target.value))}
                    />
                </label>
            </div>
            <button onClick={handleCalculate}>Calculate ETA</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {eta && <p>Estimated Time of Arrival: {eta}</p>}
        </div>
    );
};

export default ETACalculator;