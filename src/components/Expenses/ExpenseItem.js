import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import card from '../UI/card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    
    return (
        <card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </card>
    );
}

export default ExpenseItem;
