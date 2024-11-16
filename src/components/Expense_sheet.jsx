import React,{useEffect, useState} from "react";

function Expense_sheet(){
    const [expenseData, setExpense] = useState([]);

    const fetchExpense = ()=> {
        // fetch expense data from api
        fetch('http://localhost/expensetrackerpt3/src/backend/read.php',{
            method: 'POST'
        })
        .then(response => response.json())
        .then(data =>{
            setExpense(data)
            console.log(data)
            console.log(setExpense)
            })
        
        .catch(error => console.error("Error fetching data: ", error))
    }
    // calls the fetchExpense when the component mounts
    useEffect(() => {
        fetchExpense(); 
    }, []);

    
    if (expenseData.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <button className="add-expense" id="add-expense">Add Expense</button>
            {expenseData.length > 0 ? (
                expenseData.filter(({type}) => type === "expense")
                .map(({ id, type, amount, date, notes }) => (
                    <div key={id} className={`transForm-${type}`}>
                        <div className="flex space-between m-1">
                            <p>{type}</p>
                            <i className="delete fas fa-minus" title="Delete transaction"></i>
                        </div>
                        <hr />
                        <p>Amount: {amount}</p>
                        <p>Date: {date}</p>
                        <p>Description: {notes}</p>
                    </div>
                ))
            ) : (
                <p>No transactions found.</p>
            )}
        </div>
    );
}

export default Expense_sheet;
