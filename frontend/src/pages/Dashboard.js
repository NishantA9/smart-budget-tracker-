import {useState} from 'react';
import AddExpense from '../components/AddExpense';
import ExpenseList from '../components/ExpenseList';


function Dashboard(){
    const [expenses, setExpenses] = useState([]);
    const handleAddExpense = (expense) => {
        setExpenses([expense, ...expenses]);
    };

    return(
        <div>
            <h2>Welcome to your Budget Dashboard!!!</h2>;
            <AddExpense onAdd={handleAddExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    ); 
}

export default Dashboard;