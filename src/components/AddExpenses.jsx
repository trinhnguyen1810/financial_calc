import React, { useState } from 'react';

const ExpenseItem = ({ label, value, onChange }) => (
    <div>
        <label>{label}: </label>
        <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={onChange}
        />
        <span>${value}</span>
    </div>
);

const FixedExpenseItem = ({ label, value, onChange }) => (
    <div>
        <label>{label}: </label>
        <input
            type="number"
            min="0"
            value={value}
            onChange={onChange}
        />
        <span>${value}</span>
    </div>
);

const AddExpenses = () => {
    const [groceriesValue, setGroceriesValue] = useState(0);
    const [transportationValue, setTransportationValue] = useState(0);
    const [entertainmentValue, setEntertainmentValue] = useState(0);
    const [healthFitnessValue, setHealthFitnessValue] = useState(0);
    const [miscellaneousValue, setMiscellaneousValue] = useState(0);
    const [loansPaymentsValue, setLoansPaymentsValue] = useState(0);
    const [otherExpensesValue, setOtherExpensesValue] = useState(0);

    const handleGroceriesChange = (e) => setGroceriesValue(parseInt(e.target.value, 10) || 0);
    const handleTransportationChange = (e) => setTransportationValue(parseInt(e.target.value, 10) || 0);
    const handleEntertainmentChange = (e) => setEntertainmentValue(parseInt(e.target.value, 10) || 0);
    const handleHealthFitnessChange = (e) => setHealthFitnessValue(parseInt(e.target.value, 10) || 0);
    const handleMiscellaneousChange = (e) => setMiscellaneousValue(parseInt(e.target.value, 10) || 0);
    const handleLoansPaymentsChange = (e) => setLoansPaymentsValue(parseInt(e.target.value, 10) || 0);
    const handleOtherExpensesChange = (e) => setOtherExpensesValue(parseInt(e.target.value, 10) || 0);

    return (
        <div>
            <ExpenseItem label="Groceries/Food" value={groceriesValue} onChange={handleGroceriesChange} />
            <ExpenseItem label="Transportation" value={transportationValue} onChange={handleTransportationChange} />
            <ExpenseItem label="Entertainment/Leisure" value={entertainmentValue} onChange={handleEntertainmentChange} />
            <ExpenseItem label="Health and Fitness" value={healthFitnessValue} onChange={handleHealthFitnessChange} />
            <ExpenseItem label="Miscellaneous" value={miscellaneousValue} onChange={handleMiscellaneousChange} />
            <FixedExpenseItem label="Loans Payments" value={loansPaymentsValue} onChange={handleLoansPaymentsChange} />
            <FixedExpenseItem label="Other expenses payments" value={otherExpensesValue} onChange={handleOtherExpensesChange} />
        </div>
    );
};

export default AddExpenses;
