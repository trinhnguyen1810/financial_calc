import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';
import AddIncomeForm from './components/AddIncome';
import AddBudgetGoals from './components/AddBudgetGoals';
import AddExpenses from './components/AddExpenses';
import OutputRecommendation from './components/Output';

function App() {
  return (
    <div className="App">
      <h1> Budget Calculator</h1>
      <h2> 1. Incomes</h2>
      <AddIncomeForm/>
      <h2> 2. Budget Goals (Optional) </h2>
      <AddBudgetGoals/>
      <h2> 3. Expenses </h2>
      <AddExpenses/>
      <OutputRecommendation/>
    </div>
  );
}

export default App;