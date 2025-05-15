import {useState} from 'react';

function AddExpense({onAdd}) {
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        category: '',
        date: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        onAdd(formData);
        setFormData({ description: '', amount: '', category: '', date: '',});
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type ="text"
                name="description"
                placeholder='Description'
                value={formData.description}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="amount"
                placeholder='Amount'
                value={formData.amount}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="category"
                placeholder='Category'
                value={formData.category}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required 
            />
            <button type="submit">Add Expense</button>
        </form>
    );
}
export default AddExpense;       

