import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import card from '../UI/card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <card className="expenses">
        <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
        />
        {props.items.map((expense) => ( 
          <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} 
          />
        ))};
      </card>
    </div>
  );
};

export default Expenses;