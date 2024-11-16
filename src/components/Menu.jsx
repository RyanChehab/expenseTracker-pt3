import React,{useState} from "react";
import Income_sheet from "./Income_sheet";

function Menu(){
    const [showIncomeSheet, setShowIncomeSheet] = useState(false);

    const handle = () => {
        setShowIncomeSheet((show) => !show)
    }
    return(
        <div className="menu flex space-between align-center">
        <div className="options flex p-2">
            <button className="p-05 btns" id="income" onClick={handle}>Income</button>
            {showIncomeSheet && <Income_sheet /> }
            <button className="p-05 btns" id="expense">Expenses</button>
        </div>
        <div className="filter">
            <i className="filter fas fa-sliders-h m-2"></i>
        </div>
     </div>
    )
}

export default Menu;