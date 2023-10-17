import React, { useState } from 'react';

const AddBudgetGoals = () => {
    const [savingsPercentage, setSavingsPercentage] = useState(0);
    const [selectedCity, setSelectedCity] = useState('');

    const handleSavingsChange = (e) => {
        const newPercentage = Math.min(50, Math.max(0, parseInt(e.target.value, 10) || 0));
        setSavingsPercentage(newPercentage);
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    return (
        <div>
            <div>
                <label>Savings: </label>
                <input
                    type="range"
                    min="0"
                    max="50"
                    value={savingsPercentage}
                    onChange={handleSavingsChange}
                />
                <span>{savingsPercentage}%</span>
                <button onClick={() => setSavingsPercentage(50)}>Maximize</button>
            </div>

            <div>
                <label>Insert City: </label>
                <select value={selectedCity} onChange={handleCityChange}>
                    <option value="">Select a city</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Seoul">Seoul</option>
                    <option value="SanFrancisco">San Francisco</option>
                    <option value="Taipei">Taipei</option>
                    <option value="BuenosAires">Buenos Aires</option>
                    <option value="Berlin">Berlin</option>
                    <option value="London">London</option>
                </select>
            </div>
        </div>
    );
};

export default AddBudgetGoals;
