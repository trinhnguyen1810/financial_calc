import React from 'react';
import './Output.css'; 

const RecommendedExpenseItem = ({ label, value }) => (
    <div className="recommended-expense-item">
        <label>{label}: </label>
        <span>${value}</span>
    </div>
);

const RecommendedFixedExpenseItem = ({ label, value }) => (
    <div className="recommended-expense-item">
        <label>{label}: </label>
        <span>${value}</span>
    </div>
);

const OutputRecommendation = () => {
    const recommendedGroceries = 200;
    const recommendedTransportation = 150;
    const recommendedEntertainment = 50;
    const recommendedHealthFitness = 30;
    const recommendedMiscellaneous = 50;
    const recommendedLoansPayments = 200;
    const recommendedOtherExpenses = 100;

    return (
        <div className="output-container">
            <h2>Output: Budget Allocation</h2>

            <RecommendedExpenseItem label="Recommended Groceries/Food" value={recommendedGroceries} />
            <RecommendedExpenseItem label="Recommended Transportation" value={recommendedTransportation} />
            <RecommendedExpenseItem label="Recommended Entertainment/Leisure" value={recommendedEntertainment} />
            <RecommendedExpenseItem label="Recommended Health and Fitness" value={recommendedHealthFitness} />
            <RecommendedExpenseItem label="Recommended Miscellaneous" value={recommendedMiscellaneous} />
            <RecommendedFixedExpenseItem label="Loans Payments" value={recommendedLoansPayments} />
            <RecommendedFixedExpenseItem label="Other expenses payments" value={recommendedOtherExpenses} />
        </div>
    );
};

export default OutputRecommendation;