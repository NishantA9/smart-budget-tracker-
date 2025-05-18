import React, { useState } from 'react';
import AddExpense from '../components/AddExpense';
import ExpenseList from '../components/ExpenseList';
import { addExpense } from '../services/api';


function Dashboard(){
    const [expenses, setExpenses] = useState([]);
    const handleAddExpense = async (expense) => {
        try{
            const saved = await addExpense(expense);
            setExpenses([saved, ...expenses]); //Add to top of the list
        } catch (error) {
            alert('Error adding expense:');
        }
    };

    return(
        <div>
            <h2>Welcome to your Budget Dashboard!!!</h2>
            <AddExpense onAdd={handleAddExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    ); 
}

export default Dashboard;