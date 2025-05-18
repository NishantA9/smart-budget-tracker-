import React from 'react';

function ExpenseList({ expenses }) {
    return (
        <div>
            <h3>Recent Expenses</h3>
            <ul>
                {expenses.map((exp, idx) => (
                    <li key={idx}>
                        <strong>{exp.type.toUpperCase()}:</strong>{' '}
                        {exp.category} - ${exp.amount} (
                        {new Date(exp.date).toLocaleDateString()})
                        <br />
                        <em>{exp.note}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;
