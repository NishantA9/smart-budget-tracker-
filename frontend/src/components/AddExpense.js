import React, { useState } from 'react';

function AddExpense({ onAdd }) {
  const [formData, setFormData] = useState({
    type: 'expense',
    category: '',
    amount: '',
    date: '',
    note: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      ...formData,
      user_id: 1, // hardcoded for now
    };

    onAdd(expenseData);

    setFormData({
      type: 'expense',
      category: '',
      amount: '',
      date: '',
      note: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
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

      <input
        type="text"
        name="note"
        placeholder="Note"
        value={formData.note}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;
