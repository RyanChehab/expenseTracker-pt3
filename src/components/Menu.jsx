import React from "react";

function Menu(){
    return(
        <div class="menu flex space-between align-center">
        <div class="options flex p-2">
            <button class="p-05 btns" id="income">Income</button>
            <button class="p-05 btns" id="expense">Expenses</button>
        </div>
        <div class="filter">
            <i class="filter fas fa-sliders-h m-2"></i>
        </div>
     </div>
    )
}