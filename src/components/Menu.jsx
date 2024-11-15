import React from "react";

function Menu(){
    return(
        <div className="menu flex space-between align-center">
        <div className="options flex p-2">
            <button className="p-05 btns" id="income">Income</button>
            <button className="p-05 btns" id="expense">Expenses</button>
        </div>
        <div className="filter">
            <i className="filter fas fa-sliders-h m-2"></i>
        </div>
     </div>
    )
}

export default Menu;