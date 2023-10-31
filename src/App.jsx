// App.jsx
import './App.css';
import React, { useState } from 'react';
import AddIncomeForm from './components/AddIncome/AddIncome';
import AddBudgetGoals from './components/AddBudgetGoals/AddBudgetGoals';
import AddExpenses from './components/AddExpenses/AddExpenses';
import OutputRecommendation from './components/Output/Output';
import './bootstrap-5.3.2-dist/css/bootstrap.min.css';
function App() {
  const [incomeData, setIncomeData] = useState({});
  const [budgetGoalsData, setBudgetGoalsData] = useState({});
  const [expensesData, setExpensesData] = useState({});
  const [showOutput, setShowOutput] = useState(false);

  const handleFormSubmit = () => {
    setShowOutput(true); 
  };

  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Budget Calculator</h1>
      </header>

      <section className="mb-4">
        <h2>1. Incomes</h2>
        <AddIncomeForm onSubmit={setIncomeData} />
      </section>

      <section className="mb-4">
        <h2>2. Budget Goals (Optional)</h2>
        <AddBudgetGoals onSubmit={setBudgetGoalsData} />
      </section>

      <section className="mb-4">
        <h2>3. Expenses</h2>
        <AddExpenses onSubmit={setExpensesData} />
      </section>

      <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>
        Submit All Sections
      </button>

      {showOutput && (
        <section>
          <OutputRecommendation incomeData={incomeData} budgetGoalsData={budgetGoalsData} expensesData={expensesData} />
        </section>
      )}
    </div>
  );
}

export default App;
