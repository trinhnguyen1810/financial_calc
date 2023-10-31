import React from 'react';
import './AddIncome.css';

const AddIncomeForm = () => {
  return (
    <div className="income-form-container mb-4">
      <div className="expense-item mb-3">
        <label htmlFor="workStudy" className="form-label">
          Work-study income: 
        </label>
        <input
          required="required"
          type="text"
          id="workStudy"
          name="workStudyIncome"
          className="form-control"
        />
      </div>
      <div className="expense-item mb-3">
        <label htmlFor="externalSource" className="form-label">
          External Source: 
        </label>
        <input
          required="required"
          type="text"
          id="externalSource"
          name="externalSourceIncome"
          className="form-control"
        />
      </div>
    </div>
  );
};

export default AddIncomeForm;
