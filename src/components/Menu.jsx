import React,{useState} from "react";
import Income_sheet from "./Income_sheet";
import Expense_sheet from "./Expense_sheet";

function Menu(){
    const [showIncomeSheet, setShowIncomeSheet] = useState(false);
    const [showExpenseSheet, setShowExpenseSheet] = useState(false);

    const handleIncome = () => {
        setShowIncomeSheet((show)=>!show)
        setShowExpenseSheet(false)
    }

    const handleExpense = () =>{
        setShowExpenseSheet((show)=>!show)
        setShowIncomeSheet(false)
    }
    return(
    <>

    <div className="menu flex space-between align-center">
        <div className="options flex p-2">
            <button className="p-05 btns" id="income" onClick={handleIncome}>Income</button>
            <button className="p-05 btns" id="expense" onClick={handleExpense}>Expenses</button>
        </div>
        <div className="filter">
            <i className="filter fas fa-sliders-h m-2"></i>
        </div>
    </div>
    
    {showIncomeSheet && <Income_sheet /> }
    {showExpenseSheet && <Expense_sheet />}
    </>     
    )
}

export default Menu;