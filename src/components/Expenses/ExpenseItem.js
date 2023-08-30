import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/card.js';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);


    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };

    const amountClickHandler = () => {
        setAmount(100);
        console.log(amount);
      };
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={amountClickHandler}>Change Amount</button>
        </Card>
    );
}

export default ExpenseItem;
