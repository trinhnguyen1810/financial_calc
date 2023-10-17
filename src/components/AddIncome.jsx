import React from 'react';

const AddIncomeForm = () => {
    return (
        <div>
            <div>
                <label htmlFor="workStudy"> Work-study income </label>
                <input required="required" type="text" id="workStudy" name="workStudyIncome" />
            </div>
            <div>
                <label htmlFor="externalSource"> External Source </label>
                <input required="required" type="text" id="externalSource" name="externalSourceIncome" />
            </div>
        </div>
    );
}

export default AddIncomeForm;
