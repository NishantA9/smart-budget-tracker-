function ExpenseList({expenses}){
    return (
        <div>
            <h3>Recent Expenses</h3>
            <ul>
                {expenses.map((item, index) => (
                    <li key={index}>
                        {item.date} - {item.category} - {item.description} - ${item.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ExpenseList;