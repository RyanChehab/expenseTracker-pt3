import React,{useEffect, useState} from "react";

function Expense_sheet(){
    const [expenseData, setExpense] = useState([]);
    
    const fetchIncome = ()=> {
        // fetch income data from api
        fetch('http://localhost/expensetrackerpt3/src/backend/read.php',{
            method: 'POST'
        })
        .then(response => response.json())
        .then(data =>{
            setIncomeData(data)
            console.log(data)
            console.log(incomeData)
            })
        
        .catch(error => console.error("Error fetching data: ", error))
    }
}