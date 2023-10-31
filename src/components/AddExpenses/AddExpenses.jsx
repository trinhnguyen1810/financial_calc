// AddExpenses.jsx
import React, { useState } from 'react';
import './AddExpenses.css';

const PercentageExpenseItem = ({ label, value, onChange }) => (
  <div className="expense-item mb-3">
    <label>{label}: </label>
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={onChange}
      className="form-range"
    />
    <span className="expense-value">{value.toFixed(0)}%</span>
  </div>
);

const ValueExpenseItem = ({ label, value, onChange }) => (
  <div className="expense-item mb-3">
    <label>{label}: </label>
    <input
      type="number"
      min="0"
      value={value}
      onChange={onChange}
      className="form-control"
    />
    <span className="expense-value">${value.toFixed(0)}</span>
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

  const handleGroceriesChange = (e) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    setGroceriesValue(newValue);
    const remainingPercentage = 100 - newValue;
    const equalPercentage = remainingPercentage / 4;
    setTransportationValue(equalPercentage);
    setEntertainmentValue(equalPercentage);
    setHealthFitnessValue(equalPercentage);
    setMiscellaneousValue(equalPercentage);
  };

  const handleTransportationChange = (e) => setTransportationValue(parseInt(e.target.value, 10) || 0);
  const handleEntertainmentChange = (e) => setEntertainmentValue(parseInt(e.target.value, 10) || 0);
  const handleHealthFitnessChange = (e) => setHealthFitnessValue(parseInt(e.target.value, 10) || 0);
  const handleMiscellaneousChange = (e) => setMiscellaneousValue(parseInt(e.target.value, 10) || 0);
  const handleLoansPaymentsChange = (e) => setLoansPaymentsValue(parseInt(e.target.value, 10) || 0);
  const handleOtherExpensesChange = (e) => setOtherExpensesValue(parseInt(e.target.value, 10) || 0);

  return (
    <div className="expenses-container">
      <PercentageExpenseItem label="Groceries/Food" value={groceriesValue} onChange={handleGroceriesChange} />
      <PercentageExpenseItem label="Transportation" value={transportationValue} onChange={handleTransportationChange} />
      <PercentageExpenseItem label="Entertainment/Leisure" value={entertainmentValue} onChange={handleEntertainmentChange} />
      <PercentageExpenseItem label="Health and Fitness" value={healthFitnessValue} onChange={handleHealthFitnessChange} />
      <PercentageExpenseItem label="Miscellaneous" value={miscellaneousValue} onChange={handleMiscellaneousChange} />
      <ValueExpenseItem label="Loans Payments" value={loansPaymentsValue} onChange={handleLoansPaymentsChange} />
      <ValueExpenseItem label="Other expenses payments" value={otherExpensesValue} onChange={handleOtherExpensesChange} />
    </div>
  );
};

export default AddExpenses;
