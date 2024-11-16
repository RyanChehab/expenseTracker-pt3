import { dblClick } from "@testing-library/user-event/dist/click";
import React,{useEffect, useState} from "react";


function Income_sheet(){
    const [incomeData, setIncomeData] = useState([]);

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

    // calls the fetchIncome when the component mounts
    useEffect(() => {
        fetchIncome(); 
    }, []);

    if (incomeData.length === 0) {
        return <p>Loading...</p>;
    }

    const { type, amount, date, notes } = incomeData[0]

    return(
    <div>
        <p>{amount}</p>
    </div>
    )
}

export default Income_sheet;